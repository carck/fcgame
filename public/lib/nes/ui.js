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

if (typeof jQuery !== 'undefined') {
    (function ($) {
        $.fn.JSNESUI = function (roms) {
            var parent = this;
            var UI = function (nes) {
                var self = this;
                self.nes = nes;

                /*
                 * Create UI
                 */
                self.romSelect = $('.nes-roms select');
                self.screen = $('.nes-screen');

                /*
                 * ROM loading
                 */
                self.romSelect.change(function () {
                    self.loadROM();
                    if (!self.nes.opts.emulateSound) {
                        self.nes.opts.emulateSound = true;

                        var source = self.audio.createBufferSource();
                        source.connect(self.audio.destination);
                        source.start();
                    }
                    $('.function').hide();
                });

                $('.nes-screen').css({
                    'max-height': document.documentElement.clientHeight,
                })
                $(window).bind('resize', function () {
                    $('.nes-screen').css({
                        'max-height': document.documentElement.clientHeight,
                    })
                })

                /*
                 * Lightgun experiments with mouse
                 * (Requires jquery.dimensions.js)
                 */
                if ($.offset) {
                    self.screen.mousedown(function (e) {
                        if (self.nes.mmap) {
                            self.nes.mmap.mousePressed = true;
                            // FIXME: does not take into account zoom
                            self.nes.mmap.mouseX = e.pageX - self.screen.offset().left;
                            self.nes.mmap.mouseY = e.pageY - self.screen.offset().top;
                        }
                    }).mouseup(function () {
                        setTimeout(function () {
                            if (self.nes.mmap) {
                                self.nes.mmap.mousePressed = false;
                                self.nes.mmap.mouseX = 0;
                                self.nes.mmap.mouseY = 0;
                            }
                        }, 500);
                    });
                }

                if (typeof roms != 'undefined') {
                    self.setRoms(roms);
                }

                /*
                 * Canvas
                 */
                self.canvasContext = self.screen[0].getContext('2d');

                if (!self.canvasContext.getImageData) {
                    parent.html("Your browser doesn't support writing pixels directly to the <code>&lt;canvas&gt;</code> tag. Try the latest versions of Google Chrome, Safari, Opera or Firefox!");
                    return;
                }

                self.canvasImageData = self.canvasContext.getImageData(0, 0, 256, 240);
                self.resetCanvas();

                /*
                 * Keyboard
                 */
                $(document).
                    bind('keydown', function (evt) {
                        self.nes.keyboard.keyDown(evt);
                    }).
                    bind('keyup', function (evt) {
                        self.nes.keyboard.keyUp(evt);
                    }).
                    bind('keypress', function (evt) {
                        self.nes.keyboard.keyPress(evt);
                    });


                function bindButton(selector, keyCode, options) {
                    options = options || {};
                    var $el = $(selector);
                    $el.bind('touchstart', function (e) {
                        self.nes.keyboard.keyDown({ keyCode: keyCode });
                        if (options.addActive) {
                            if (navigator.vibrate) {
                                navigator.vibrate(15);
                            }
                            $el.addClass('active');
                        }
                        e.preventDefault();
                    });
                    $el.bind('touchend', function (e) {
                        self.nes.keyboard.keyUp({ keyCode: keyCode });
                        if (options.addActive)
                            $el.removeClass('active');
                        e.preventDefault();
                    });
                }

                bindButton('#joystick_btn_up', 87, {});
                bindButton('#joystick_btn_down', 83, {});
                bindButton('#joystick_btn_left', 65, {});
                bindButton('#joystick_btn_right', 68, {});
                bindButton('#joystick_btn_A', 74, {});
                bindButton('#joystick_btn_B', 75, {});
                bindButton('#joystick_btn_select', 32, { addActive: true });
                bindButton('#joystick_btn_start', 13, { addActive: true });

                $('#controls-turbofire').bind('touchstart', function (e) {
                    handleFire(e, true);
                    e.preventDefault();
                });
                $('#controls-turbofire').bind('gesturestart', function (e) {
                    handleFire(e, true);
                    e.preventDefault();
                });
                $('#controls-turbofire').bind('touchmove', function (e) {
                    handleFire(e, true);
                    e.preventDefault();
                });
                $('#controls-turbofire').bind('touchend', function (e) {
                    clearInterval(self.interval);
                    $('#controls-turbofire .a').removeClass('active');
                    $('#controls-turbofire .b').removeClass('active');
                    self.nes.keyboard.keyUp({
                        keyCode: 74
                    });
                    self.nes.keyboard.keyUp({
                        keyCode: 75
                    });
                    e.preventDefault();
                });

                function handleFire(e, turbo) {
                    var parent = $('#controls-fire');
                    if (turbo) {
                        parent = $('#controls-turbofire');
                    }
                    var myLocation = e.originalEvent.changedTouches[0];
                    var realTarget = document.elementFromPoint(myLocation.clientX, myLocation.clientY);
                    if ($(realTarget).hasClass('a')) {
                        $('.a', parent).addClass('active');
                        $('.b', parent).removeClass('active');
                        clearInterval(self.interval);
                        if (turbo) {
                            self.nes.keyboard.keyUp({
                                keyCode: 74
                            });
                            self.nes.keyboard.keyDown({
                                keyCode: 74
                            });
                            self.a_fire = false;
                            self.interval = setInterval(function () {
                                self.a_fire
                                    ? self.nes.keyboard.keyUp({
                                        keyCode: 74
                                    })
                                    : self.nes.keyboard.keyDown({
                                        keyCode: 74
                                    });
                                self.a_fire = !self.a_fire;
                            }, 50);
                        } else {
                            self.nes.keyboard.keyUp({
                                keyCode: 74
                            });
                            self.nes.keyboard.keyDown({
                                keyCode: 74
                            });
                        }
                    } else if ($(realTarget).hasClass('b')) {
                        $('.a', parent).removeClass('active');
                        $('.b', parent).addClass('active');
                        clearInterval(self.interval);
                        if (turbo) {
                            self.nes.keyboard.keyDown({
                                keyCode: 75
                            });
                            self.nes.keyboard.keyUp({
                                keyCode: 75
                            });
                            self.b_fire = false;
                            self.interval = setInterval(function () {
                                self.b_fire
                                    ? self.nes.keyboard.keyUp({
                                        keyCode: 75
                                    })
                                    : self.nes.keyboard.keyDown({
                                        keyCode: 75
                                    });
                                self.b_fire = !self.b_fire;
                            }, 50);
                        } else {
                            self.nes.keyboard.keyDown({
                                keyCode: 75
                            });
                            self.nes.keyboard.keyUp({
                                keyCode: 75
                            });
                        }
                    } else {
                        clearInterval(self.interval);
                        $('.a', parent).removeClass('active');
                        $('.b', parent).removeClass('active');
                        self.nes.keyboard.keyUp({
                            keyCode: 88
                        });
                        self.nes.keyboard.keyUp({
                            keyCode: 90
                        });

                    }
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
                    $.ajax({
                        url: escape(self.romSelect.val()),
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
                            if (JSNES.Utils.isIE()) {
                                var charCodes = JSNESBinaryToArray(
                                    xhr.responseBody
                                ).toArray();
                                data = String.fromCharCode.apply(
                                    undefined,
                                    charCodes
                                );
                            } else {
                                data = xhr.responseText;
                            }
                            self.nes.loadRom(data);
                            self.nes.start();
                            self.enable();
                        }
                    });
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
                    var data = this.screen[0].toDataURL("image/png"),
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
                    this.romSelect.children().remove();
                    $("<option>选择游戏...</option>").appendTo(this.romSelect);
                    for (var groupName in roms) {
                        if (roms.hasOwnProperty(groupName)) {
                            var optgroup = $('<optgroup></optgroup>').
                                attr("label", groupName);
                            for (var i = 0; i < roms[groupName].length; i++) {
                                $('<option>' + roms[groupName][i][0] + '</option>')
                                    .attr("value", roms[groupName][i][1])
                                    .appendTo(optgroup);
                            }
                            this.romSelect.append(optgroup);
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
    })(jQuery);
}
