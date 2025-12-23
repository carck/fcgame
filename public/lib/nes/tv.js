
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

    this.canvasContext = document.getElementById('nes-canvas').getContext('2d');
    this.canvasImageData = this.canvasContext.getImageData(0, 0, 256, 240);

    this.resetCanvas = () => {
        this.canvasContext.fillStyle = 'black';
        // set alpha to opaque
        this.canvasContext.fillRect(0, 0, 256, 240);
        // Set alpha
        for (var i = 3; i < this.canvasImageData.data.length - 3; i += 4) {
            this.canvasImageData.data[i] = 0xFF;
        }
    };

    this.enable = function () { };
    this.updateStatus = function () { };
    this.writeAudio = (samples) => {
        // Create output buffer (planar buffer format)
        var buffer = this.audio.createBuffer(2, samples.length, this.audio.sampleRate);
        var channelLeft = buffer.getChannelData(0);
        var channelRight = buffer.getChannelData(1);
        // Convert from interleaved buffer format to planar buffer
        // by writing right into appropriate channel buffers
        var j = 0;
        for (var i = 0; i < samples.length; i += 2) {
            channelLeft[j] = this.intToFloatSample(samples[i]);
            channelRight[j] = this.intToFloatSample(samples[i + 1]);
            j++;
        }
        // Create sound source and play it
        var source = this.audio.createBufferSource();
        source.buffer = buffer;
        source.connect(this.audio.destination); // Output to sound
        // card
        source.start();
    };

    this.intToFloatSample = (value) => {
        return value / 32767; // from -32767..32768 to -1..1 range
    };

    this.writeFrame = (buffer, prevBuffer) => {
        var imageData = this.canvasImageData.data;
        var pixel, i, j;

        for (i = 0; i < 256 * 240; i++) {
            pixel = buffer[i];

            if (pixel != prevBuffer[i]) {
                j = i * 4;
                imageData[j] = pixel & 0xFF;
                imageData[j + 1] = (pixel >> 8) & 0xFF;
                imageData[j + 2] = (pixel >> 16) & 0xFF;
                prevBuffer[i] = pixel;
            }
        }

        this.canvasContext.putImageData(this.canvasImageData, 0, 0);
    };

    this.resetCanvas();

    window.AudioContext = window.webkitAudioContext || window.AudioContext;
    try {
        this.audio = new AudioContext();
    } catch (e) {
        console.error(e);
    }

    // -----------------------
    // Populate ROM selector
    // -----------------------
    const form = document.getElementById('rom-form');

    // Dynamically populate radio buttons
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

    // Listen for change or Enter/Space
    form.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
            const selected = form.querySelector('input[type=radio]:checked');
            if (selected)
                this.loadROM(selected.value);
            e.preventDefault();
        }
    });

    form.addEventListener('click', e => {
        const selected = form.querySelector('input[type=radio]:checked');
        if (selected)
            this.loadROM(selected.value);
        e.preventDefault();
    });

    this.loadROM = (path) => {
        // Resume audio context
        if (!this.nes.opts.emulateSound) {
            this.nes.opts.emulateSound = true;

            var source = this.audio.createBufferSource();
            source.connect(this.audio.destination);
            source.start();
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
    // WebSocket multiplayer
    // -----------------------
    const is_https = window.location.protocol == 'https:';
    const ws = new WebSocket(`${is_https ? 'wss' : 'ws'}://${location.host}/ws-tv`);
    ws.binaryType = "arraybuffer";

    const turboButtons = { 0: true, 1: true }; // A and B buttons have turbo
    const turboFreq = 20;
    const turboInterval = 1000 / turboFreq;
    const playerStates = {};

    ws.onmessage = (event) => {
        const data = new Uint8Array(event.data);
        const playerId = data[0];
        const state = data[1];

        if (!playerStates[playerId])
            playerStates[playerId] = { state: 0x00, turboMask: 0x00, turboToggle: 0x00 };

        const ps = playerStates[playerId];

        ps.turboMask = 0x00;
        for (let bit = 0; bit < 8; bit++) {
            const mask = 1 << (7 - bit);
            const pressed = (state & mask) !== 0;
            if (turboButtons[bit] && pressed)
                ps.turboMask |= (1 << bit);
        }

        this.applyToJSNES(playerId, ps, state);
    };

    setInterval(() => {
        for (const playerId in playerStates) {

            const ps = playerStates[playerId];
            if (ps.turboMask != 0) {
                ps.turboToggle ^= ps.turboMask;
                this.applyToJSNES(playerId, ps, ps.state | ps.turboToggle);
            }
        }
    }, turboInterval);

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

    this.applyToJSNES = (playerId, ps, state) => {
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
        ps.state = state;
    }

    document.addEventListener('keydown', (evt) => {
        const active = document.activeElement;
        if (evt.code === 'ArrowDown') active.nextElementSibling?.focus();
        if (evt.code === 'ArrowUp') active.previousElementSibling?.focus();
        if (evt.code === 'Enter') active.click();
    });
};