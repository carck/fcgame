package main

import (
	"fmt"
	"log"
	"net"
	"net/http"
	"sync"

	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool { return true },
}

// ------------------------
// Global state
// ------------------------
var (
	tvConn  *websocket.Conn
	tvSend  chan []byte
	tvMutex sync.Mutex

	playerIDSeq  = 1
	players      = make(map[int]*websocket.Conn)
	playersMutex sync.Mutex
)

// ------------------------
// Player WebSocket (/ws)
// ------------------------
func wsPlayerHandler(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println("Upgrade error:", err)
		return
	}

	// Set TCP_NODELAY for low latency
	if tcpConn, ok := conn.UnderlyingConn().(*net.TCPConn); ok {
		tcpConn.SetNoDelay(true)
	}

	// Assign player ID
	playersMutex.Lock()
	id := playerIDSeq
	playerIDSeq++
	players[id] = conn
	playersMutex.Unlock()

	log.Println("Player connected:", id)

	// Send player ID (1 byte)
	if err := conn.WriteMessage(websocket.BinaryMessage, []byte{byte(id)}); err != nil {
		conn.Close()
		return
	}

	go readLoopPlayer(id, conn)
}

// ------------------------
// TV WebSocket (/ws-tv)
// ------------------------
func wsTVHandler(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println("Upgrade error:", err)
		return
	}

	// Set TCP_NODELAY for low latency
	if tcpConn, ok := conn.UnderlyingConn().(*net.TCPConn); ok {
		tcpConn.SetNoDelay(true)
	}

	tvMutex.Lock()
	if tvConn != nil {
		tvMutex.Unlock()
		log.Println("TV already connected, rejecting")
		conn.Close()
		return
	}

	tvConn = conn
	tvSend = make(chan []byte, 1024) // 缓冲足够大
	tvMutex.Unlock()

	log.Println("TV connected")

	go tvWriteLoop(conn, tvSend)
	go readLoopTV(conn)
}

// ------------------------
// Player read loop
// ------------------------
func readLoopPlayer(id int, conn *websocket.Conn) {
	defer func() {
		conn.Close()
		playersMutex.Lock()
		delete(players, id)
		playersMutex.Unlock()
		log.Println("Player disconnected:", id)
	}()

	for {
		mt, msg, err := conn.ReadMessage()
		if err != nil {
			return
		}
		if mt != websocket.BinaryMessage {
			continue
		}

		// Forward to TV asynchronously
		tvMutex.Lock()
		send := tvSend
		tvMutex.Unlock()

		if send != nil {
			select {
			case send <- msg: // 异步发送
			default:
				// TV 太慢，丢弃
			}
		}
	}
}

// ------------------------
// TV read loop
// ------------------------
func readLoopTV(conn *websocket.Conn) {
	defer func() {
		conn.Close()
		tvMutex.Lock()
		if tvSend != nil {
			close(tvSend)
			tvSend = nil
		}
		tvConn = nil
		tvMutex.Unlock()
		log.Println("TV disconnected")
	}()

	for {
		_, _, err := conn.ReadMessage()
		if err != nil {
			return
		}
		// TV 消息忽略
	}
}

// ------------------------
// TV write loop
// ------------------------
func tvWriteLoop(conn *websocket.Conn, send <-chan []byte) {
	for msg := range send {
		if err := conn.WriteMessage(websocket.BinaryMessage, msg); err != nil {
			return
		}
	}
}

// ------------------------
// main
// ------------------------
func main() {
	fs := http.FileServer(http.Dir("./public"))
	http.Handle("/", fs)

	http.HandleFunc("/ws", wsPlayerHandler)
	http.HandleFunc("/ws-tv", wsTVHandler)

	port := 9008
	fmt.Println("Server running at :9008")
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", port), nil))
}
