
const ROMS = {
    "经典热门": [
        ['沙罗曼蛇 (U) Life Force [!]', 'roms/Life Force [!].nes'],
        ['超级马里奥1 (W) Super Mario Bros. [!]', 'roms/(W) Super Mario Bros. [!].nes'],
        ['坦克 (J) Battle City [!]', 'roms/(J) Battle City.nes'],
        ['魂斗罗1 (U) 30S [!]', 'roms/Contra1(U)30S.nes'],
        ['赤影战士 Kage [!]', 'roms/Kage.nes'],
        ['脱狱 Cross Fire (J)', 'roms/Cross Fire (J).nes'],
        ['双截龙2 Double Dragon2 [!]', 'roms/Double Dragon2.nes'],
        ['塞尔达传说2：林克的冒险 [!] Zelda II - The Adventure of Link(U) [!]', 'roms/Zelda II - The Adventure of Link (U).nes'],
        ['冒险岛1 (J) Adventure Island [!]', 'roms/(J) Takahashi Meijin no Bouken Shima [!].nes'],
        ['1943 (U) 1943 - The Battle of Midway [!]', 'roms/1943.nes'],
        ['火箭车 (J) Road Fighter [!]', 'roms/(J) Road Fighter [!].nes'],
        ['越野机车 (JU) Excitebike [!]', 'roms/(JU) Excitebike [!].nes'],
        ['功夫 (J) (V1.2) Yie Ar Kung-Fu [!]', 'roms/(J) (V1.2) Yie Ar Kung-Fu [!].nes'],
        ['淘金者(汉化) [!]', 'roms/TaoJinZhe.nes'],
        ['俄罗斯方块 (U) Tetris 2 [!]', 'roms/Tetris 2 (U) [!].nes'],
        ['中国象棋 [!]', 'roms/Zhong Guo Xiang Qi.nes'],
        ['五子棋 (5) 日版 [!]', 'roms/5.nes'],
        ['炸弹人1 [!] (J) Bomberman [!]', 'roms/(J) Bomberman [!].nes'],
    ],
    "超级玛丽": [
        ['超级马里奥1 (W) Super Mario Bros. [!]', 'roms/(W) Super Mario Bros. [!].nes'],
        ['超级马里奥2 (W) Super Mario Bros. 3 (U)', 'roms/Super Mario Bros. 3 (U) (PRG1) [!].nes'],
        ['马里奥拆屋工 (W) Wrecking Crew', 'roms/(W) Wrecking Crew [!].nes'],
        ['马里奥医生 (JU) Dr. Mario', 'roms/Dr. Mario (JU).nes'],
    ],
    "坦克大战": [
        ['坦克大战 (J) Battle City [!]', 'roms/(J) Battle City.nes'],
        ['导弹坦克 (Ch) Missile Tank', 'roms/(Ch) Missile Tank.nes'],
        ['坦克1990 (Ch) Tank 1990', 'roms/(Ch) Tank 1990.nes'],
    ],
    "魂斗罗": [
        ['魂斗罗1 (U) 30S [!]', 'roms/Contra1(U)30S.nes'],
        ['魂斗罗1 (U) 30', 'roms/Contra1(U)30.nes'],
        ['魂斗罗1 (U) 30F', 'roms/Contra1(U)30F.nes'],
        ['魂斗罗1 (U) 30L', 'roms/Contra1(U)30L.nes'],
        ['魂斗罗1 (U) 30M', 'roms/Contra1(U)30M.nes'],
        ['魂斗罗1 (U) S [!]', 'roms/Contra1(U)S.nes'],
        ['魂斗罗1 (U) F', 'roms/Contra1(U)F.nes'],
        ['魂斗罗1 (U) L', 'roms/Contra1(U)L.nes'],
        ['魂斗罗1 (U) M', 'roms/Contra1(U)M.nes'],
    ],
    "双截龙": [
        ['双截龙2 Double Dragon2 [!]', 'roms/Double Dragon2.nes'],
        ['双截龙1 Double Dragon1', 'roms/Double Dragon1.nes'],
        ['双截龙3 Double Dragon3', 'roms/Double Dragon3.nes'],
        ['双截龙4 Double Dragon4', 'roms/Double Dragon4.nes'],
    ],
    "淘金者": [
        ['淘金者(汉化) [!]', 'roms/TaoJinZhe.nes'],
        ['淘金者(J)', 'roms/Championship Lode Runner (J).nes'],
    ],
    "俄罗斯方块": [
        ['俄罗斯方块2 (U) Tetris 2 [!]', 'roms/Tetris 2 (U) [!].nes'],
        ['俄罗斯方块 LJ65', 'roms/lj65.nes'],
        ['俄罗斯方块 Tetris(U)', 'roms/Tetris (U) [!].nes'],
        ['俄罗斯方块 (Tengen) Tetris [!]', 'roms/(Tengen) Tetris [!].nes'],
    ],
    "飞机类": [
        ['沙罗曼蛇 (U) Life Force [!]', 'roms/Life Force [!].nes'],
        ['1943 (U) 1943 - The Battle of Midway [!]', 'roms/1943.nes'],
        ['兵蜂1 (J) TwinBee [!]', 'roms/(J) TwinBee [!].nes'],
    ],
    "赛车类": [
        ['火箭车 (J) Road Fighter [!]', 'roms/(J) Road Fighter [!].nes'],
        ['越野机车 (JU) Excitebike [!]', 'roms/(JU) Excitebike [!].nes'],
        ['F1赛车 (J) F-1 Race', 'roms/(J) F-1 Race [!].nes'],
        ['摩托车大赛 (JU) (PRG0) Mach Rider', 'roms/(JU) (PRG0) Mach Rider [!].nes'],
    ],
    "运动类": [
        ['网球Tennis(JU)', 'roms/Tennis (JU) [!].nes'],
        ['高尔夫 Golf (JU)', 'roms/Golf (JU).nes'],
    ],
    "棋牌类": [
        ['中国象棋 [!]', 'roms/Zhong Guo Xiang Qi.nes'],
        ['五子棋 (5) 日版 [!]', 'roms/5.nes'],
        ['Concentration Room', 'roms/croom.nes'],
        ['AV麻雀俱乐部 (Hacker) AV Mahjongg', 'roms/(Hacker) AV Mahjongg.nes'],
    ],
    "其他": [
        ['马戏团 (J) Circus Charlie', 'roms/(J) Circus Charlie [!].nes'],
        ['敲冰块 (J) Ice Climber', 'roms/(J) Ice Climber.nes'],
        ['纽约大拳猫 (JP)', 'roms/RockinCats.nes'],
        ['撞球咖啡馆 Shufflepuck Cafe', 'roms/Shufflepuck Cafe.nes'],
        ['泡泡龙 Bubble Bobble (U)', 'roms/Bubble Bobble (U).nes'],
        ['地底探险1 (J) Spelunker', 'roms/(J) Spelunker [!].nes'],
        ['快乐猫 (J) Mappy', 'roms/(J) Mappy [!].nes'],
        ['成龙踢馆1 (J) Spartan X', 'roms/(J) Spartan X [!].nes'],
        ['猪小弟 (J) Pooyan', 'roms/(J) Pooyan.nes'],
        ['打砖块1 (J) Arkanoid', 'roms/(J) Arkanoid [!].nes'],
    ],
    "不可用": [
        ['小蜜蜂 (J) Galaxian', 'roms/(J) Galaxian [!].nes'],
        ['赤色要塞 (KC) Jackal [!]', 'roms/Jackal.nes'],
        ['花式撞球 (U) Side Pocket', 'roms/Side Pocket.nes'],
        ['彩虹岛 (U) Rainbow Islands', 'roms/Rainbow Islands.nes'],
        ['快打旋风 (U) Mighty Final Fight [!]', 'roms/Mighty Final Fight.nes'],
        ['忍者龙剑传1 (PC10) Ninja Gaiden [!]', 'roms/Ninja_Gaiden1.nes'],
        ['忍者龙剑传2 (PC10) Ninja Gaiden II [!]', 'roms/Ninja_Gaiden2.nes'],
        ['忍者龙剑传3 (PC10) Ninja Gaiden III [!]', 'roms/Ninja_Gaiden3.nes'],
        ['七宝奇谋1 (J) Goonies, The [!]', 'roms/(J) Goonies, The [!].nes'],
        ['南极大冒险 (J) Antarctic Adventure', 'roms/(J) Antarctic Adventure [!].nes'],
        ['叮当1 (J) Dig Dug', 'roms/(J) Dig Dug [!].nes'],
        ['影之传说 (J) Kage no Densetsu [!]', 'roms/(J) Kage no Densetsu [!].nes'],
    ],
};

JSNES.TVUI = function (nes) {
    this.nes = nes;

    // =========================
    // 图像处理
    // =========================
    const useCanvas = !this.nes.opts.webgl;
    const canvas = document.getElementById('nes-canvas');
    let gl = null;
    let canvasContext = null;
    let canvasImageData = null;;

    if (useCanvas) {
        canvasContext = canvas.getContext('2d');
        canvasImageData = this.canvasContext.getImageData(0, 0, 256, 240);
        canvasContext.fillStyle = 'black';
        // set alpha to opaque
        canvasContext.fillRect(0, 0, 256, 240);
    } else {
        gl = canvas.getContext('webgl', { alpha: false, antialias: false });
        gl.disable(gl.DEPTH_TEST);
        gl.disable(gl.BLEND);
        gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);

        function shader(type, src) {
            const s = gl.createShader(type);
            gl.shaderSource(s, src);
            gl.compileShader(s);
            return s;
        }

        const vs = shader(gl.VERTEX_SHADER, `
        attribute vec2 a_pos;
        attribute vec2 a_uv;
        varying vec2 v_uv;
        void main() {
            v_uv = vec2(a_uv.x, 1.0 - a_uv.y);
            gl_Position = vec4(a_pos, 0.0, 1.0);
        }
        `);

        const fs = shader(gl.FRAGMENT_SHADER, `
        precision mediump float;
        uniform sampler2D u_tex;
        varying vec2 v_uv;
        void main() {
            gl_FragColor = texture2D(u_tex, v_uv);
        }
        `);

        const prog = gl.createProgram();
        gl.attachShader(prog, vs);
        gl.attachShader(prog, fs);
        gl.linkProgram(prog);
        gl.useProgram(prog);

        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
            -1, -1, 0, 0,
            1, -1, 1, 0,
            -1, 1, 0, 1,
            1, 1, 1, 1,
        ]), gl.STATIC_DRAW);

        const FSIZE = 4 * 4;
        const aPos = gl.getAttribLocation(prog, 'a_pos');
        const aUV = gl.getAttribLocation(prog, 'a_uv');
        gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, FSIZE, 0);
        gl.vertexAttribPointer(aUV, 2, gl.FLOAT, false, FSIZE, 8);
        gl.enableVertexAttribArray(aPos);
        gl.enableVertexAttribArray(aUV);

        const tex = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 256, 240, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

        function resizeGL() {
            const NES_ASPECT = 4 / 3;
            const w = canvas.clientWidth;
            const h = canvas.clientHeight;
            const screenAspect = w / h;
            let vw, vh, vx, vy;
            if (screenAspect > NES_ASPECT) {
                vh = h;
                vw = vh * NES_ASPECT;
                vx = (w - vw) / 2;
                vy = 0;
            } else {
                vw = w;
                vh = vw / NES_ASPECT;
                vx = 0;
                vy = (h - vh) / 2;
            }
            canvas.width = w;
            canvas.height = h;
            gl.viewport(vx, vy, vw, vh);
        }

        window.addEventListener('resize', resizeGL);
        resizeGL();
    }

    this.writeFrame = buffer => {
        if (useCanvas) {
            canvasImageData.data.set(new Uint8Array(buffer.buffer));
            canvasContext.putImageData(canvasImageData, 0, 0);
        } else {
            gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, 256, 240, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array(buffer.buffer));
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        }
    };

    /* =========================
    * 状态显示
    * ========================= */
    this.enable = function () { };
    this.updateStatus = function () { };

    /* =========================
    * 音频处理
    * ========================= */
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    this.audio = new AudioContext({ latencyHint: 'interactive' });

    this.writeAudio = samples => {
        if (!this.audio)
            return;
        var buffer = this.audio.createBuffer(2, samples.length, this.audio.sampleRate);
        var channelLeft = buffer.getChannelData(0);
        var channelRight = buffer.getChannelData(1);
        var j = 0;
        for (var i = 0; i < samples.length; i += 2) {
            channelLeft[j] = samples[i] / 32768;
            channelRight[j] = samples[i + 1] / 32768;
            j++;
        }
        var source = this.audio.createBufferSource();
        source.buffer = buffer;
        source.connect(this.audio.destination);
        source.start();
    };

    // =========================
    // ROM 选择加载
    // =========================
    const form = document.getElementById('rom-form');

    for (const cat in ROMS) {
        const catHeader = document.createElement('strong');
        catHeader.textContent = cat;
        form.appendChild(catHeader);
        form.appendChild(document.createElement('br'));

        ROMS[cat].forEach(([name, path], index) => {
            const id = `rom-${cat}-${index}`;

            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'rom';
            radio.value = path;
            radio.id = id;

            const label = document.createElement('label');
            label.setAttribute('for', id);
            label.textContent = name;

            form.appendChild(radio);
            form.appendChild(label);
            form.appendChild(document.createElement('br'));
        });
    }

    form.focus();

    form.addEventListener('click', e => {
        const selected = e.target.value;
        if (selected)
            this.loadROM(selected);
        e.preventDefault();
    });

    this.loadROM = (path) => {
        if (this.audio.state === 'suspended') {
            this.audio.resume();
        }

        if (!this.nes.opts.emulateSound) {
            this.nes.opts.emulateSound = true;
        }

        const self = this;

        $.ajax({
            url: escape(path),
            xhr: function () {
                var xhr = $.ajaxSettings.xhr();
                if (typeof xhr.overrideMimeType !== 'undefined') {
                    // Download as binary
                    xhr.overrideMimeType('text/plain; charset=x-user-defined');
                }
                self.xhr = xhr;
                return xhr;
            },
            complete: function (xhr, status) {
                var i, data;
                data = xhr.responseText;
                document.getElementById('rom-selector').style.display = 'none';
                self.nes.loadRom(data);
                self.nes.start();
            }
        });
    }

    // -----------------------
    // 输入处理
    // -----------------------
    const is_https = window.location.protocol == 'https:';
    const ws = new WebSocket(`${is_https ? 'wss' : 'ws'}://${location.host}/ws-tv`);
    ws.binaryType = "arraybuffer";

    const turboFreq = 20;
    const turboInterval = 1000 / turboFreq;
    const turboTimers = {};
    const turboKeys = {};
    const playerStates = {};

    ws.onmessage = (event) => {
        const data = new Uint8Array(event.data);
        const playerId = data[0] & 0x0F;
        const turboState = data[0] & 0xF0;
        const state = data[1];

        if (!playerStates[playerId])
            playerStates[playerId] = { state: 0x00, turboState: 0x00 };

        this.applyToJSNES(playerId, state, turboState);
    };

    this.keymap = {
        '1': {
            0: 74, // A
            1: 75, // B
            2: 32, // SELECT
            3: 13, // START
            4: 87, // UP
            5: 83, // DOWN
            6: 65, // LEFT
            7: 68, // RIGHT
        },
        '2': {
            0: 97,  // A
            1: 98,  // B
            2: 111, // SELECT
            3: 106, // START
            4: 38,  // UP
            5: 40,  // DOWN
            6: 37,  // LEFT
            7: 39,  // RIGHT
        }
    };

    this.applyToJSNES = (playerId, state, turboState) => {
        const ps = playerStates[playerId];

        for (let i = 0; i < 8; i++) {
            const mask = 1 << (7 - i);
            const pressedNow = (state & mask) !== 0;
            const pressedPrev = (ps.state & mask) !== 0;

            if (pressedNow != pressedPrev) {
                const key = this.keymap[playerId][i];
                console.log(`Player ${playerId} key ${key} ${pressedNow ? 'down' : 'up'}`);
                if (pressedNow)
                    this.nes.keyboard.keyDown({ keyCode: key });
                else
                    this.nes.keyboard.keyUp({ keyCode: key });
            }
        }

        for (let i = 0; i < 2; i++) {
            const mask = 1 << (7 - i);
            const pressedNow = (turboState & mask) !== 0;
            const pressedPrev = (ps.turboState & mask) !== 0;

            if (pressedNow != pressedPrev) {
                const key = this.keymap[playerId][i];
                console.log(`Player ${playerId} turbo key ${key} ${pressedNow ? 'down' : 'up'}`);
                if (pressedNow) {
                    this.startTurbo(key);
                }
                else {
                    this.stopTurbo(key);
                }
            }
        }

        ps.state = state;
        ps.turboState = turboState;
    }

    this.startTurbo = (key) => {
        this.stopTurbo(key);

        turboTimers[key] = setInterval(() => {
            if (turboKeys[key]) {
                this.nes.keyboard.keyUp({ keyCode: key });
            } else {
                this.nes.keyboard.keyDown({ keyCode: key });
            }
            turboKeys[key] = !turboKeys[key];
        }, turboInterval);
    };

    this.stopTurbo = (key) => {
        if (turboTimers[key]) {
            clearInterval(turboTimers[key]);
            turboTimers[key] = null;

            this.nes.keyboard.keyUp({ keyCode: key });
        }
        turboKeys[key] = false;
    };

    // =========================
    // 全局键盘导航 ROM 列表
    // =========================
    const radios = Array.from(document.querySelectorAll('#rom-form input[type=radio]'));
    document.addEventListener('keydown', evt => {
        let currentIndex = radios.findIndex(r => r.checked);
        if (currentIndex === -1)
            currentIndex = 0;

        if (evt.code === 'ArrowDown') {
            const nextIndex = (currentIndex + 1) % radios.length;
            radios[nextIndex].focus();
            radios[nextIndex].checked = true;
            evt.preventDefault();
        } else if (evt.code === 'ArrowUp') {
            const prevIndex = (currentIndex - 1 + radios.length) % radios.length;
            radios[prevIndex].focus();
            radios[prevIndex].checked = true;
            evt.preventDefault();
        } else if (evt.code === 'Enter' || evt.code === ' ') {
            const selected = radios.find(r => r.checked);
            if (selected)
                this.loadROM(selected.value);
            evt.preventDefault();
        }
    });
};
