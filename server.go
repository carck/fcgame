package main

import (
	"fmt"
	"log"
	"net/http"
	"sync"

	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool { return true },
}

type Player struct {
	ID int
	Conn *websocket.Conn
}

var (
	tvConn       *websocket.Conn
	playerIDSeq  = 1
	players      = make(map[int]*websocket.Conn)
	playersMutex = &sync.Mutex{}
)

func wsHandler(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println("Upgrade error:", err)
		return
	}

	// First connection is TV
	if tvConn == nil {
		tvConn = conn
		log.Println("TV connected")
		go readLoopTV(conn)
		return
	}

	// Assign player ID
	playersMutex.Lock()
	id := playerIDSeq
	playerIDSeq++
	players[id] = conn
	playersMutex.Unlock()

	log.Println("Player connected:", id)

	// Send player ID as first message (1 byte)
	conn.WriteMessage(websocket.BinaryMessage, []byte{byte(id)})

	go readLoopPlayer(id, conn)
}

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
		// Forward to TV
		if tvConn != nil {
			tvConn.WriteMessage(websocket.BinaryMessage, msg)
		}
	}
}

func readLoopTV(conn *websocket.Conn) {
	defer func() {
		conn.Close()
		tvConn = nil
		log.Println("TV disconnected")
	}()

	for {
		_, _, err := conn.ReadMessage()
		if err != nil {
			return
		}
		// TV messages can be ignored in this simple relay
	}
}

func main() {
	fs := http.FileServer(http.Dir("./public"))
	http.Handle("/", fs)
	http.HandleFunc("/ws", wsHandler)

	port := 8080
	fmt.Println("Server running at :8080")
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", port), nil))
}
