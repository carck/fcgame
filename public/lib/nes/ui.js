/*
JSNES, based on Jamie Sanders' vNES
Copyright (C) 2010 Ben Firshman

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

JSNES.DummyUI = function (nes) {
    this.nes = nes;
    this.enable = function () { };
    this.updateStatus = function () { };
    this.writeAudio = function () { };
    this.writeFrame = function () { };
};


window.JSNESUI = function (roms) {
    var UI = function (nes) {
        var self = this;
        self.nes = nes;

        /*
         * Create UI
         */
        self.romSelect = document.querySelector('.nes-roms select');
        self.screen = document.querySelector('.nes-screen');
        self.hitArea = {};

        /*
         * ROM loading
         */
        if (self.romSelect) {
            self.romSelect.addEventListener('change', function () {
                self.loadROM();
                if (!self.nes.opts.emulateSound) {
                    self.nes.opts.emulateSound = true;

                    var source = self.audio.createBufferSource();
                    source.connect(self.audio.destination);
                    source.start();
                }
                document.querySelectorAll('.function').forEach(function (el) { el.style.display = 'none'; });

                const elem = document.documentElement;
                if (elem.requestFullscreen) {
                    elem.requestFullscreen().catch(err => {
                        console.log("全屏失败:", err);
                    });
                }
            });
        }

        document.querySelectorAll('.joybtnTurbo').forEach(function (e) {
            const key = e.dataset.key;
            self.hitArea[key] = e.getBoundingClientRect();
        });

        window.addEventListener('resize', function () {
            document.querySelectorAll('.joybtnTurbo').forEach(function (e) {
                const key = e.dataset.key;
                self.hitArea[key] = e.getBoundingClientRect();
            });
        });


        if (typeof roms != 'undefined') {
            self.setRoms(roms);
        }

        /*
         * Canvas
         */
        self.canvasContext = (self.screen && self.screen.getContext) ? self.screen.getContext('2d') : null;

        if (!self.canvasContext || !self.canvasContext.getImageData) {
            alert("Your browser doesn't support writing pixels directly to the <code>&lt;canvas&gt;&lt;/code&gt; tag. Try the latest versions of Google Chrome, Safari, Opera or Firefox!");
            return;
        }

        self.canvasImageData = self.canvasContext.getImageData(0, 0, 256, 240);
        self.resetCanvas();

        /*
         * Keyboard
         */
        document.addEventListener('keydown', function (evt) { self.nes.keyboard.keyDown(evt); });
        document.addEventListener('keyup', function (evt) { self.nes.keyboard.keyUp(evt); });
        document.addEventListener('keypress', function (evt) { self.nes.keyboard.keyPress(evt); });

        const keyMap = {
            "Up": 87,
            "Down": 83,
            "Left": 65,
            "Right": 68,
            "A": 74,
            "B": 75,
            "Select": 32,
            "Start": 13
        };

        document.querySelectorAll('.joydirection, .joybtn').forEach(function (e) {
            const key = e.dataset.key;
            const keyCode = keyMap[key];
            e.addEventListener('touchstart', function (ev) {
                self.nes.keyboard.keyDown({ keyCode: keyCode });
                ev.preventDefault();
            });
            e.addEventListener('touchend', function (ev) {
                self.nes.keyboard.keyUp({ keyCode: keyCode });
                ev.preventDefault();
            });
        });

        function getHitKey(e) {
            var myLocation = (e.changedTouches && e.changedTouches[0]) || (e.originalEvent && e.originalEvent.changedTouches && e.originalEvent.changedTouches[0]);
            for (const key in self.hitArea) {
                const rect = self.hitArea[key];
                if (myLocation && myLocation.clientX >= rect.left &&
                    myLocation.clientX <= rect.right &&
                    myLocation.clientY >= rect.top &&
                    myLocation.clientY <= rect.bottom) {
                    return key;
                }
            }
            return null;
        }

        const turboState = {
            A: { active: false, primary: false, interval: null, fired: false },
            B: { active: false, primary: false, interval: null, fired: false }
        };

        const TURBO_INTERVAL = 50;

        function startTurbo(key, isPrimary) {
            const state = turboState[key];
            if (!state || state.active) return;

            const keyCode = keyMap[key];

            state.active = true;
            state.primary = !!isPrimary;
            state.fired = false;

            self.nes.keyboard.keyDown({ keyCode });

            state.interval = setInterval(() => {
                state.fired
                    ? self.nes.keyboard.keyDown({ keyCode })
                    : self.nes.keyboard.keyUp({ keyCode });
                state.fired = !state.fired;
            }, TURBO_INTERVAL);

            console.log('[Turbo start]', key, 'primary=', state.primary);
        }

        function stopTurbo(key) {
            const state = turboState[key];
            if (!state || !state.active) return;

            clearInterval(state.interval);

            state.active = false;
            state.primary = false;
            state.interval = null;
            state.fired = false;

            self.nes.keyboard.keyUp({ keyCode: keyMap[key] });

            console.log('[Turbo stop]', key);
        }

        function stopNonPrimaryTurbo() {
            Object.keys(turboState).forEach(key => {
                const state = turboState[key];
                if (state.active && !state.primary) {
                    stopTurbo(key);
                }
            });
        }

        function stopAllTurbo() {
            Object.keys(turboState).forEach(stopTurbo);
        }

        var controlsTurbofire = document.getElementById('controls-turbofire');
        if (controlsTurbofire) {
            controlsTurbofire.addEventListener('touchstart', function (e) {
                const key = getHitKey(e);
                if (key && turboState[key]) {
                    startTurbo(key, true);
                }
                e.preventDefault();
            });
            controlsTurbofire.addEventListener('gesturestart', function (e) {
                const key = getHitKey(e);
                if (key && turboState[key]) {
                    startTurbo(key, true);
                }
                e.preventDefault();
            });
            controlsTurbofire.addEventListener('touchmove', function (e) {
                const key = getHitKey(e);

                if (key && turboState[key]) {
                    if (!turboState[key].active) {
                        startTurbo(key, false);
                    }
                } else {
                    stopNonPrimaryTurbo();
                }

                e.preventDefault();
            });
            controlsTurbofire.addEventListener('touchend', function (e) {
                stopAllTurbo();
                e.preventDefault();
            });
        }

        /*
         * Sound
         */
        window.AudioContext = window.webkitAudioContext || window.AudioContext;
        try {
            self.audio = new AudioContext();
        } catch (e) {
            // lets fallback to Flash (for Internet Explorer 8-11)
            console.error(e);
        }
    };

    UI.prototype = {
        loadROM: function () {
            var self = this;
            self.updateStatus("Downloading...");

            var xhr = new XMLHttpRequest();
            var url = this.romSelect ? this.romSelect.value : null;
            xhr.open('GET', url, true);
            if (typeof xhr.overrideMimeType !== 'undefined') {
                xhr.overrideMimeType('text/plain; charset=x-user-defined');
            }
            xhr.onload = function () {
                var data;
                if (JSNES.Utils.isIE()) {
                    // IE handling can be implemented if necessary
                    data = xhr.responseText;
                } else {
                    data = xhr.responseText;
                }
                self.nes.loadRom(data);
                self.nes.start();
                self.enable();
            };
            xhr.send(null);
        },

        resetCanvas: function () {
            this.canvasContext.fillStyle = 'black';
            // set alpha to opaque
            this.canvasContext.fillRect(0, 0, 256, 240);

            // Set alpha
            for (var i = 3; i < this.canvasImageData.data.length - 3; i += 4) {
                this.canvasImageData.data[i] = 0xFF;
            }
        },

        /*
         *
         * nes.ui.screenshot() --> return <img> element :)
         */
        screenshot: function () {
            var data = this.screen.toDataURL("image/png"),
                img = new Image();
            img.src = data;
            return img;
        },

        /*
         * Enable and reset UI elements
         */
        enable: function () {

        },

        updateStatus: function (s) {

        },

        setRoms: function (roms) {
            if (!this.romSelect) return;
            while (this.romSelect.firstChild) this.romSelect.removeChild(this.romSelect.firstChild);
            var placeholder = document.createElement('option');
            placeholder.textContent = '选择游戏...';
            placeholder.value = '';
            this.romSelect.appendChild(placeholder);

            for (var groupName in roms) {
                if (roms.hasOwnProperty(groupName)) {
                    var optgroup = document.createElement('optgroup');
                    optgroup.label = groupName;
                    for (var i = 0; i < roms[groupName].length; i++) {
                        var option = document.createElement('option');
                        option.textContent = roms[groupName][i][0];
                        option.value = roms[groupName][i][1];
                        optgroup.appendChild(option);
                    }
                    this.romSelect.appendChild(optgroup);
                }
            }
        },

        writeAudio: function (samplesL, samplesR) {
            // Create output buffer (planar buffer format)
            var buffer = this.audio.createBuffer(2, samplesL.length, this.audio.sampleRate);
            var channelLeft = buffer.getChannelData(0);
            var channelRight = buffer.getChannelData(1);
            // Convert from interleaved buffer format to planar buffer
            // by writing right into appropriate channel buffers
            var j = 0;
            const scale = 1 / 32768;
            for (var i = 0; i < samplesL.length; i++) {
                channelLeft[j] = samplesL[i] * scale;
                channelRight[j] = samplesR[i] * scale;
                j++;
            }
            // Create sound source and play it
            var source = this.audio.createBufferSource();
            source.buffer = buffer;
            source.connect(this.audio.destination);
            source.start();
        },

        writeFrame: function (buffer, prevBuffer) {
            this.canvasImageData.data.set(new Uint8Array(buffer.buffer));

            this.canvasContext.putImageData(this.canvasImageData, 0, 0);
        }
    };

    return UI;
};
