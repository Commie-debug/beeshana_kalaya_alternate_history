(function() {
  var game;
  var ui;

  var DateOptions = {hour: 'numeric',
                 minute: 'numeric',
                 second: 'numeric',
                 year: 'numeric',
                 month: 'short',
                 day: 'numeric' };

  var main = function(dendryUI) {
    ui = dendryUI;
    game = ui.game;

    // Add your custom code here.
  };

  var TITLE = "Beeshana Kalaya: An Alternate History" + '_' + "Communist45";

  window.loadMod = function(url) {
      ui.loadGame(url);
  };

  window.showStats = function() {
    if (window.dendryUI.dendryEngine.state.sceneId.startsWith('library')) {
        window.dendryUI.dendryEngine.goToScene('backSpecialScene');
    } else {
        window.dendryUI.dendryEngine.goToScene('library');
    }
  };

  window.showMods = function() {
    window.hideOptions();
    if (window.dendryUI.dendryEngine.state.sceneId.startsWith('mod_loader')) {
        window.dendryUI.dendryEngine.goToScene('backSpecialScene');
    } else {
        window.dendryUI.dendryEngine.goToScene('mod_loader');
    }
  };
  
  window.showOptions = function() {
      var save_element = document.getElementById('options');
      window.populateOptions();
      save_element.style.display = "block";
      if (!save_element.onclick) {
          save_element.onclick = function(evt) {
              var target = evt.target;
              var save_element = document.getElementById('options');
              if (target == save_element) {
                  window.hideOptions();
              }
          };
      }
  };

  window.hideOptions = function() {
      var save_element = document.getElementById('options');
      save_element.style.display = "none";
  };

  window.disableBg = function() {
      window.dendryUI.disable_bg = true;
      document.body.style.backgroundImage = 'none';
      window.dendryUI.saveSettings();
  };

  window.enableBg = function() {
      window.dendryUI.disable_bg = false;
      window.dendryUI.setBg(window.dendryUI.dendryEngine.state.bg);
      window.dendryUI.saveSettings();
  };

  window.disableAnimate = function() {
      window.dendryUI.animate = false;
      window.dendryUI.saveSettings();
  };

  window.enableAnimate = function() {
      window.dendryUI.animate = true;
      window.dendryUI.saveSettings();
  };

  window.disableAnimateBg = function() {
      window.dendryUI.animate_bg = false;
      window.dendryUI.saveSettings();
  };

  window.enableAnimateBg = function() {
      window.dendryUI.animate_bg = true;
      window.dendryUI.saveSettings();
  };


  // Custom Audio Manager curtosy of Puddle on discord
  window.AudioManager = (function() {
    var layers = {
        music: {
            playlist: [
                'music/basic/Sri_Lanka_Anthem.mp3',
                'music/basic/Vimukthi_Gee.mp3',
                'music/basic/SLFP_Song.mp3',
                'music/basic/Bandaranaike_song.mp3',
                'music/basic/Siu_Digin_Galana_Andure.mp3',
                'music/basic/Epa_Gee_Nada_Denna.mp3'
            ],
            currentIndex: 0,
            audio: null,
            volume: 1.0,
            enabled: true
        },
        ambient: {
            playlist: [],
            currentIndex: 0,
            audio: null,
            volume: 0.4,
            enabled: false
        },
        sfx: {
            playlist: [],
            currentIndex: 0,
            audio: null,
            volume: 0.6,
            enabled: true
        }
    };

    var muted = false;
    var started = false;

    function shuffle(arr) {
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
        }
    }

    function playLayer(layerName) {
            var layer = layers[layerName];
            if (!layer || !layer.enabled || layer.playlist.length === 0) return;
            var targetVol = muted ? 0 : layer.volume;

            if (layer.audio) {
                var old = layer.audio;
                old.onended = null;
                var fadeOut = setInterval(function() {
                    if (old.volume > 0.05) {
                        old.volume = Math.max(0, old.volume - 0.05);
                    } else {
                        old.pause();
                        clearInterval(fadeOut);
                    }
                }, 50);
            }

            setTimeout(function() {
                var newAudio = new Audio(layer.playlist[layer.currentIndex]);
                layer.audio = newAudio;
                newAudio.volume = 0;
                newAudio.play().catch(function() {});
                var fadeIn = setInterval(function() {
                    if (newAudio.volume < targetVol - 0.05) {
                        newAudio.volume = Math.min(targetVol, newAudio.volume + 0.05);
                    } else {
                        newAudio.volume = targetVol;
                        clearInterval(fadeIn);
                    }
                }, 50);
                newAudio.onended = function() {
                    layer.currentIndex = (layer.currentIndex + 1) % layer.playlist.length;
                    playLayer(layerName);
                };
            }, 800);
    }

    function stopLayer(layerName) {
        var layer = layers[layerName];
        if (layer && layer.audio) {
            layer.audio.pause();
            layer.audio = null;
        }
    }

    return {
        started: false,

        init: function() {
        },

        start: function() {
            this.started = true;
        },

        mute: function() {
            muted = true;
            for (var name in layers) {
                if (layers[name].audio) layers[name].audio.pause();
            }
        },

        unmute: function() {
            muted = false;
            for (var name in layers) {
                if (layers[name].audio) layers[name].audio.play().catch(function() {});
            }
        },

        isMuted: function() { return muted; },

        skip: function(layerName) {
            var sfxLayer = layers['sfx'];
            if (sfxLayer && sfxLayer.enabled) {
                window.AudioManager.playSongOnce('music/sfx/radio_static.mp3', 'sfx');
            }
            var name = layerName || 'music';
            var layer = layers[name];
            if (layer.audio) {
                var old = layer.audio;
                old.onended = null;
                var fadeOut = setInterval(function() {
                    if (old.volume > 0.05) {
                        old.volume = Math.max(0, old.volume - 0.05);
                    } else {
                        old.pause();
                        clearInterval(fadeOut);
                    }
                }, 50);
            }
            layer.currentIndex = (layer.currentIndex + 1) % layer.playlist.length;
            setTimeout(function() {
                playLayer(name);
            }, 400);
        },

        previous: function(layerName) {
            var sfxLayer = layers['sfx'];
            if (sfxLayer && sfxLayer.enabled) {
                window.AudioManager.playSongOnce('music/sfx/radio_static.mp3', 'sfx');
            }
            var name = layerName || 'music';
            var layer = layers[name];
            if (layer.audio) {
                var old = layer.audio;
                old.onended = null;
                var fadeOut = setInterval(function() {
                    if (old.volume > 0.05) {
                        old.volume = Math.max(0, old.volume - 0.05);
                    } else {
                        old.pause();
                        clearInterval(fadeOut);
                    }
                }, 50);
            }
            layer.currentIndex = (layer.currentIndex - 1 + layer.playlist.length) % layer.playlist.length;
            setTimeout(function() {
                playLayer(name);
            }, 400);
        },

        playSong: function(path, layerName) {
            var name = layerName || 'music';
            var layer = layers[name];
            var targetVol = muted ? 0 : layer.volume;

            if (layer.audio) {
                var old = layer.audio;
                old.onended = null; // remove existing ended listener
                var fadeOut = setInterval(function() {
                    if (old.volume > 0.05) {
                        old.volume = Math.max(0, old.volume - 0.05);
                    } else {
                        old.pause();
                        clearInterval(fadeOut);
                    }
                }, 50);
            }

            setTimeout(function() {
                var newAudio = new Audio(path);
                layer.audio = newAudio;
                newAudio.volume = 0;
                newAudio.play().catch(function() {});
                var fadeIn = setInterval(function() {
                    if (newAudio.volume < targetVol - 0.05) {
                        newAudio.volume = Math.min(targetVol, newAudio.volume + 0.05);
                    } else {
                        newAudio.volume = targetVol;
                        clearInterval(fadeIn);
                    }
                }, 50);
                newAudio.onended = function() {
                    layer.currentIndex = (layer.currentIndex + 1) % layer.playlist.length;
                    playLayer(name);
                };
            }, 400);
        },

        playSongOnce: function(path, layerName) {
            var name = layerName || 'music';
            var layer = layers[name];

            if (name === 'sfx') {
                if (!layer.enabled) return;
                var sfxAudio = new Audio(path);
                sfxAudio.volume = muted ? 0 : layer.volume;
                sfxAudio.play().catch(function() {});
                return;
            }

            var targetVol = muted ? 0 : layer.volume;

            if (layer.audio) {
                var old = layer.audio;
                old.onended = null;
                var fadeOut = setInterval(function() {
                    if (old.volume > 0.05) {
                        old.volume = Math.max(0, old.volume - 0.05);
                    } else {
                        old.pause();
                        clearInterval(fadeOut);
                    }
                }, 50);
            }

            setTimeout(function() {
                var newAudio = new Audio(path);
                layer.audio = newAudio;
                newAudio.volume = 0;
                newAudio.play().catch(function() {});
                var fadeIn = setInterval(function() {
                    if (newAudio.volume < targetVol - 0.05) {
                        newAudio.volume = Math.min(targetVol, newAudio.volume + 0.05);
                    } else {
                        newAudio.volume = targetVol;
                        clearInterval(fadeIn);
                    }
                }, 50);
                newAudio.onended = null;
            }, 800);
        },

        addSong: function(layerName, path) {
            layers[layerName].playlist.push(path);
        },

        removeSong: function(layerName, path) {
            var pl = layers[layerName].playlist;
            var idx = pl.indexOf(path);
            if (idx > -1) pl.splice(idx, 1);
        },

        enableLayer: function(layerName) {
            layers[layerName].enabled = true;
            playLayer(layerName);
        },

        disableLayer: function(layerName) {
            layers[layerName].enabled = false;
            stopLayer(layerName);
        },

        pause: function(layerName) {
            var name = layerName || 'music';
            var layer = layers[name];
            if (layer.audio) layer.audio.pause();
        },

        resume: function(layerName) {
            var name = layerName || 'music';
            var layer = layers[name];
            if (layer.audio) layer.audio.play().catch(function() {});
        },

        stop: function(layerName) {
            var name = layerName || 'music';
            var layer = layers[name];
            if (layer.audio) {
                layer.audio.onended = null;
                layer.audio.pause();
                layer.audio = null;
            }
        },

        setVolume: function(layerName, vol) {
            var names = layerName === 'music' ? ['music', 'ambient', 'sfx'] : [layerName];
            for (var i = 0; i < names.length; i++) {
                layers[names[i]].volume = vol;
                if (layers[names[i]].audio && !muted) {
                    layers[names[i]].audio.volume = vol;
                }
            }
        },
    };
  }());

  window.disableAudio = function() {
    AudioManager.mute();
    window.dendryUI.toggle_audio(false);
  };

  window.enableAudio = function() {
    AudioManager.unmute();
  };

  window.toggleMusicButton = function() {
    var onIcon = document.getElementById('music-on-icon');
    var offIcon = document.getElementById('music-off-icon');
    if (AudioManager.isMuted()) {
        AudioManager.unmute();
        onIcon.style.display = '';
        offIcon.style.display = 'none';
    } else {
        AudioManager.mute();
        onIcon.style.display = 'none';
        offIcon.style.display = '';
    }
  };

  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('music-toggle-btn').onclick = function(e) {
        window.toggleMusicButton();
    };
  });

  window.skipSong = function() {
    AudioManager.skip('music');
  };

  window.updateMusicBtn = function() {
      var disabled = window.dendryUI && window.dendryUI.disable_audio;
      var onIcon = document.getElementById('music-on-icon');
      var offIcon = document.getElementById('music-off-icon');
      if (onIcon && offIcon) {
          onIcon.style.display = disabled ? 'none' : 'inline';
          offIcon.style.display = disabled ? 'inline' : 'none';
      }
  };

  window.initVolumeKnob = function() {
        var knob = document.getElementById('volume-knob');
        if (!knob) return;
        var val = 1.0, dragging = false;
        var lastAngle = null;

        function getAngle(e) {
            var rect = knob.getBoundingClientRect();
            var cx = rect.left + rect.width / 2;
            var cy = rect.top + rect.height / 2;
            return Math.atan2(e.clientY - cy, e.clientX - cx);
        }

        function update() {
            var deg = -130 + val * 260;
            knob.style.transform = 'rotate(' + deg + 'deg)';
            ['music','ambient','sfx'].forEach(function(l) { window.AudioManager.setVolume(l, val); });
        }

        knob.onmousedown = function(e) {
            dragging = true;
            lastAngle = getAngle(e);
            e.preventDefault();
        };

        window.addEventListener('mousemove', function(e) {
            if (!dragging) return;
            var angle = getAngle(e);
            var delta = angle - lastAngle;
            if (delta > Math.PI) delta -= Math.PI * 2;
            if (delta < -Math.PI) delta += Math.PI * 2;
            lastAngle = angle;
            val = Math.min(1, Math.max(0, val + (delta / (Math.PI * 2)) * 2));
            update();
        });

        window.addEventListener('mouseup', function() { dragging = false; });
        update();
    };

  window.enableImages = function() {
      window.dendryUI.show_portraits = true;
      window.dendryUI.saveSettings();
  };

  window.disableImages = function() {
      window.dendryUI.show_portraits = false;
      window.dendryUI.saveSettings();
  };

  window.enableLightMode = function() {
      window.dendryUI.dark_mode = false;
      document.body.classList.remove('dark-mode');
      window.dendryUI.saveSettings();
  };
  window.enableDarkMode = function() {
      window.dendryUI.dark_mode = true;
      document.body.classList.add('dark-mode');
      window.dendryUI.saveSettings();
  };

  //intro sequence code
  window.tutorialActive = false;

  window.startTutorial = function() {
    window.tutorialActive = true;
    document.body.classList.add('tutorial-no-scroll');
    var overlay = document.getElementById('tutorial-overlay');
    var spotlight = document.getElementById('tutorial-spotlight');
    var textBox = document.getElementById('tutorial-text-box');
    window.AudioManager.playSongOnce('music/sfx/lightsout.mp3', 'sfx'); 
    overlay.style.display = 'block';
    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'all';

    window.AudioManager.playSongOnce('special_music/Tutorial_Spook.mp3', 'music');

    var originalState = {
        rightPanelOpen: document.getElementById('page').classList.contains('right-panel-open'),
        activeTab: window.statusTab,
        scrollY: window.scrollY
    };
    
    var tutorialEnded = false;

    function findByText(selector, text) {
        var els = document.querySelectorAll(selector);
        for (var i = 0; i < els.length; i++) {
            if (els[i].textContent.indexOf(text) !== -1) return els[i];
        }
        return null;
    }

    function findFirstCardInDeck(deckLabel) {
        var decks = document.querySelectorAll('.deck');
        for (var i = 0; i < decks.length; i++) {
            if (decks[i].textContent.indexOf(deckLabel) !== -1) {
                return decks[i].querySelector('a.card');
            }
        }
        return null;
    }

    function shiftSpotlight(dx, dy) {
        var currentLeft = parseFloat(spotlight.style.left) || 0;
        var currentTop = parseFloat(spotlight.style.top) || 0;
        spotlight.style.left = (currentLeft + dx) + 'px';
        spotlight.style.top = (currentTop + dy) + 'px';
    }

    function positionSpotlightOnEl(el) {
        if (!el) { spotlight.style.width = '0px'; spotlight.style.height = '0px'; return; }
        var rect = el.getBoundingClientRect();
        var size = Math.max(rect.width, rect.height) + 40;
        spotlight.style.width = size + 'px';
        spotlight.style.height = size + 'px';
        spotlight.style.left = (rect.left + rect.width/2 - size/2) + 'px';
        spotlight.style.top = (rect.top + rect.height/2 - size/2) + 'px';
    }

    function spotlightOnSelector(selector, callback) {
        var el = document.querySelector(selector);
        positionSpotlightOnEl(el);
        setTimeout(callback, 800);
    }

    function resizeSpotlight(newSize) {
        spotlight.style.width = newSize + 'px';
        spotlight.style.height = newSize + 'px';
    }

    function showText(text, duration, callback) {
        textBox.textContent = text;
        textBox.classList.add('visible');
        setTimeout(function() {
            textBox.classList.remove('visible');
            setTimeout(callback, 600);
        }, duration);
    }

    function safeNext(next) {
        setTimeout(next, 100);
    }

    var steps = [
        function(next) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(function() {
                spotlightOnSelector('#music-controls', function() {
                    showText('This is the music control panel. Use it to rewind, pause, skip or by using the knob to change the volume of music.', 4000, next);
                });
            }, 600);
        },
        function(next) {
            window.toggleRightPanel();
            spotlightOnSelector('#right-panel', function() {
                showText('The right panel shows the map of Sri Lanka split among districts. You can click a district and see details on it.', 4000, function() {
                    window.toggleRightPanel();
                    setTimeout(next, 800);
                });
            });
        },
        function(next) {
            window.changeTab('status', 'main_tab');
            spotlightOnSelector('#main_tab', function() {
                showText('This tab shows you the date, party resources, dissent and important details on the government.', 4000, next);
            });
        },
        function(next) {
            window.changeTab('status.politics', 'politics_tab');
            spotlightOnSelector('#politics_tab', function() {
                showText('This tab shows the parties relationship with other parties, current coalitions and party ideologies.', 4000, next);
            });
        },
        function(next) {
            window.changeTab('status.paramilitaries', 'paramilitary_tab');
            spotlightOnSelector('#paramilitary_tab', function() {
                showText('This tab shows info on the paramilitaries, tamil rebels and the security forces.', 4000, next);
            });
        },
        function(next) {
            window.changeTab('status.tamil', 'tamil_tab');
            spotlightOnSelector('#tamil_tab', function() {
                showText('This tab shows details and groups relavent to the Tamil unrest in the northeast.', 4000, next);
            });
        },
        function(next) {
            window.changeTab('status.economy', 'economy_tab');
            spotlightOnSelector('#economy_tab', function() {
                showText('This tab shows statistics on, and the sectors of Sri Lanka\'s economy.', 3500, next);
            });
        },
        function(next) {
            window.changeTab('status.interior', 'interior_tab');
            spotlightOnSelector('#interior_tab', function() {
                showText('This tab gives information on current policies done by the government as well the issues certain groups have.', 4000, next);
            });
        },
        function(next) {
            window.changeTab('status.foreign', 'foreign_tab');
            spotlightOnSelector('#foreign_tab', function() {
                showText('This tab shows Sri Lanka\'s current standing with other nations, in addition to India and its Tamil Nadu state.', 4000, next);
            });
        },
        function(next) {
            window.changeTab('status.polls', 'poll_tab');
            spotlightOnSelector('#poll_tab', function() {
                showText('This tab shows the current level\'s of public support for parties based on both ethnicity and class.', 4000, next);
            });
        },
        function(next) {
            window.changeTab('status.party', 'party_tab');
            spotlightOnSelector('#party_tab', function() {
                showText('This tab shows the internal state of the party including leadership and details on the factional conflict.', 4000, next);
            });
        },
        function(next) {
            window.changeTab('status.news', 'news_tab');
            spotlightOnSelector('#news_tab', function() {
                showText('This tab shows you the "goings on" in the rest of the world, sometimes these events may even effect Sri Lanka.', 4200, next);
            });
        },
        function(next) {
            var btn = findByText('#content a', 'Begin (normal difficulty)');
            positionSpotlightOnEl(btn);
            setTimeout(function() {
                if (btn) btn.click();
                showText('Let\'s pick normal difficulty.', 2000, function() { safeNext(next); });
            }, 800);
        },
        function(next) {
            var skipBtn = findByText('#content a', 'Yes');
            positionSpotlightOnEl(skipBtn);
            setTimeout(function() {
                if (skipBtn) skipBtn.click();
                showText('We will also skip the intro, though it is recomended for new playthroughs.', 4000, function() { safeNext(next); });
            }, 800);
        },
        function(next) {
            setTimeout(function() {
                var card = findFirstCardInDeck('Party Affairs');
                positionSpotlightOnEl(card);
                setTimeout(function() {
                    showText('This deck\'s cards deal with internal and external party matters such as dues, relationships to other parties, etc. Most cards will take a week to do while others do not take any time.', 6000, function() { safeNext(next); });
                }, 800);
            }, 600);
        },
        function(next) {
            setTimeout(function(){
                shiftSpotlight(160, 0); 
                showText('Government Affairs work similarly, its cards deal with government policies and actions. When the party is not in government, the deck is limited. These cards will always take some time to do.', 5000, function() { safeNext(next); });
            },600);
        },
        function(next) {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            shiftSpotlight(-100, 0); 
            setTimeout(function() {
                resizeSpotlight(500);
                showText('Advisors can be used periodically for special actions that are both powerfull, and crucially do not use up your time. Remember that every advisor has an affiliation to a faction', 6000, next);

            }, 800);
            window.changeTab('status', 'main_tab');
        }
    ];

    var i = 0;
    function runStep() {
        if (i >= steps.length) { endTutorial(); return; }
        steps[i](function() {
            i++;
            runStep();
        });
    }
    setTimeout(runStep, 1000);

    function endTutorial() {
        if (tutorialEnded) return;
        tutorialEnded = true;
        window.tutorialActive = false;
        window.scrollTo({ top: originalState.scrollY, behavior: 'smooth' });
        spotlight.style.width = '0px';
        spotlight.style.height = '0px';
        showText('Tutorial completed, ♡♡♡ i hope you enjoy this game :> ♡♡♡', 3000, function() {
            window.dendryUI.dendryEngine.goToScene('root.start');
            window.AudioManager.stop('music');
            window.AudioManager.playSongOnce('music/sfx/lightsout.mp3', 'sfx'); 
            overlay.style.opacity = '0';
            overlay.style.pointerEvents = 'none';
            setTimeout(function() {
                document.body.classList.remove('tutorial-no-scroll');
                overlay.style.display = 'none';
                textBox.classList.remove('visible');
            }, 600);
        });
    }
};

  // populates the checkboxes in the options view
  window.populateOptions = function() {
    var disable_bg = window.dendryUI.disable_bg;
    var animate = window.dendryUI.animate;
    var disable_audio = window.dendryUI.disable_audio;
    var show_portraits = window.dendryUI.show_portraits;
    if (disable_bg) {
        $('#backgrounds_no')[0].checked = true;
    } else {
        $('#backgrounds_yes')[0].checked = true;
    }
    if (animate) {
        $('#animate_yes')[0].checked = true;
    } else {
        $('#animate_no')[0].checked = true;
    }
    if ($('#audio_no')[0]) {
        if (disable_audio) {
            $('#audio_no')[0].checked = true;
        } else {
            $('#audio_yes')[0].checked = true;
        }
    }
    if (show_portraits) {
        $('#images_yes')[0].checked = true;
    } else {
        $('#images_no')[0].checked = true;
    }
    if (window.dendryUI.dark_mode) {
        $('#dark_mode')[0].checked = true;
    } else {
        $('#light_mode')[0].checked = true;
    }
  };

  // POLL DISPLAY GRACIOUSLY PROVIDED BY FRANCOGAMER ON DISCORD and later modified by PUDDLE on discord
  scrollhor = function(tableid) {
        var el = document.getElementById(tableid);

        function scrollHorizontally(e) {
            e = e || window.event;
            var delta = e.deltaY || 0;
            if (!delta && e.wheelDelta) {
                delta = -e.wheelDelta;
            }
            if (!delta && e.detail) {
                delta = e.detail * 40;
            }
            el.scrollLeft += delta * 0.5;
            if (e.preventDefault) {
                e.preventDefault();
            }
            e.returnValue = false;
        }
        if (el.addEventListener) {
            el.addEventListener('wheel', scrollHorizontally, { passive: false });
            el.addEventListener('mousewheel', scrollHorizontally, false);
            el.addEventListener('DOMMouseScroll', scrollHorizontally, false);
        } else if (el.attachEvent) {
            el.attachEvent('onmousewheel', scrollHorizontally);
        }
  };

  
  // This function allows you to modify the text before it's displayed.
  window.displayText = function (text) {
        return applyWholesome(text);
    };
  
    //To get a value 
    function getRelationshipText(value) {
        if (value === undefined || value === null) return '';
        if (value <= 5) return '<span style="color: #FF0000;">Hostile</span>';
        if (value <= 14.9) return '<span style="color: #FF4500;">Frigid</span>';
        if (value <= 29.9) return '<span style="color: #FF8C00;">Cold</span>';
        if (value <= 39.9) return '<span style="color: #FFA500;">Cool</span>';
        if (value <= 54.9) return '<span style="color: #FFD700;">Neutral</span>';
        if (value <= 64.9) return '<span style="color: #9ACD32;">Warm</span>';
        if (value <= 74.9) return '<span style="color: #32CD32;">Friendly</span>';
        return '<span style="color: #008000;">Very friendly</span>';
    }

    function getStatusText(value) {
        if (value === undefined || value === null) return '';
        if (value === 0) return '<span style="color: #9E9E9E;">Not Formed</span>';
        if (value === 1) return '<span style="color: #8B0000;">Active</span>';
        if (value === 2) return '<span style="color: #4F6F8F;">Disbanded</span>';
        if (value === 3) return '<span style="color: #556B2F;">Disarmed</span>';
        if (value === 4) return '<span style="color: #6A0DAD;">Amalgamated into the ENLF</span>';
        return 'Unknown';
    }
  
    function getSizeText(value) {
        if (value === undefined || value === null) return '';
        if (value <= 20) return '<span style="color: #6B7280;">Minimal</span>';
        if (value <= 40) return '<span style="color: #8B6F47;">Weak</span>';
        if (value <= 60) return '<span style="color: #556B2F;">Moderate</span>';
        if (value <= 80) return '<span style="color: #7A0000;">Strong</span>';
        return '<span style="color: #2B0000;">Very Strong</span>';
    }
  
    function getMilitancyText(value) {
        if (value === undefined || value === null) return 'Unknown';
        if (value <= 0.05) return '<span style="color: #008000;">Nonexistent</span>';
        if (value <= 0.14) return '<span style="color: #32CD32;">Very low</span>';
        if (value <= 0.24) return '<span style="color: #9ACD32;">Low</span>';
        if (value <= 0.44) return '<span style="color: #FFD700;">Medium-low</span>';
        if (value <= 0.69) return '<span style="color: #FFA500;">Medium</span>';
        if (value <= 1) return '<span style="color: #FF4500;">High</span>';
        return '<span style="color: #FF0000;">Very high</span>';
    }
    
    function getLoyaltyText(value) {
        if (value === undefined || value === null) return 'Unknown';
        if (value <= 0.06) return '<span style="color: #FF0000;">Completely disloyal</span>';
        if (value <= 0.19) return '<span style="color: #FF4500;">Very disloyal</span>';
        if (value <= 0.31) return '<span style="color: #FF8C00;">Generally disloyal</span>';
        if (value <= 0.41) return '<span style="color: #FFA500;">Mostly disloyal</span>';
        if (value <= 0.54) return '<span style="color: #FFD700;">Divided</span>';
        if (value <= 0.71) return '<span style="color: #9ACD32;">Mostly loyal</span>';
        if (value <= 0.95) return '<span style="color: #32CD32;">Generally loyal</span>';
        return '<span style="color: #008000;">Completely loyal</span>';
    }
  
    function getIdeologyText(value) {
        if (value === undefined || value === null) return 'Unknown';
        if (value == 0) return '<span style="color: #8B0000;">Revolutionary Socialism</span>';
        if (value == 1) return '<span style="color: #FF0000;">Marxism-Leninism</span>';
        if (value == 2) return '<span style="color: #E34234;">Democratic Socialism</span>';
        if (value == 3) return '<span style="color: #CD5C5C;">Left-wing Nationalism</span>';
        if (value == 4) return '<span style="color: #B22222;">Trotskyism</span>';
        if (value == 5) return '<span style="color: #FF8C00;">Sinhalese Buddhist Nationalism</span>';
        if (value == 6) return '<span style="color: #9932CC;">Federalism</span>';
        if (value == 7) return '<span style="color: #DAA520;">Tamil Eelam Separatism</span>';
        if (value == 8) return '<span style="color: #D2691E;">Indian Tamil Rights</span>';
        if (value == 9) return '<span style="color: #20B2AA;">Muslim Minority Politics</span>';
        if (value == 10) return '<span style="color: #FF69B4;">Social Democracy</span>';
        if (value == 11) return '<span style="color: #FFA500;">Tamil Nationalism</span>';
        if (value == 12) return '<span style="color: #ff4747;">Left Wing Populism</span>';
        if (value == 13) return '<span style="color: #228B22;">Conservatism</span>';
        if (value == 14) return '<span style="color: #32CD32;">Neo Liberalism</span>';
        if (value == 15) return '<span style="color: #800080;">Anti-Imperialism</span>';
        if (value == 16) return '<span style="color: #2E0854;">Unitary Stateism</span>';
        return 'Unknown';
    }

    function getStrenghtText(value) {
        if (value === undefined || value === null) return 'Unknown';
        if (value < 10) return '<span style="color: #ADD8E6;">Weak</span>';
        if (value < 25) return '<span style="color: #6495ED;">Moderate</span>';
        if (value < 40) return '<span style="color: #4169E1;">Strong</span>';
        if (value < 60) return '<span style="color: #0000CD;">Very strong</span>';
        return '<span style="color: #00008B;">Dominant</span>';
    }

    function getDissentText(value) {
        if (value === undefined || value === null) return 'Unknown';
        if (value < 4.999) return '<span style="color: #008000;">Very low</span>';
        if (value < 14.999) return '<span style="color: #9ACD32;">Low</span>';
        if (value < 30.999) return '<span style="color: #FFD700;">Medium</span>';
        if (value < 49.999) return '<span style="color: #FF4500;">High</span>';
        return '<span style="color: #FF0000;">Very high</span>';
    }
  
    //To check if extra dynamic or not
    function getDynamicTooltipContent(searchString, baseTooltip) {
        var Q = window.dendryUI && window.dendryUI.dendryEngine && window.dendryUI.dendryEngine.state ? 
                window.dendryUI.dendryEngine.state.qualities : null;
        
        if (!Q) return baseTooltip.explanationText;

        if (searchString === 'Sinhalese' && Q.sinhala_proportion !== undefined) {
            var proptext = Q.sinhala_proportion;
            return baseTooltip.explanationText + '<br>' + proptext + '% of the population';
        }

        if (searchString === 'Sri Lankan Tamil' && Q.sltamil_proportion !== undefined) {
            var proptext = Q.sltamil_proportion;
            return baseTooltip.explanationText + '<br>' + proptext + '% of the population';
        }

        if (searchString === 'Tamil' && Q.sltamil_proportion !== undefined) {
            var proptext = Q.sltamil_proportion;
            return baseTooltip.explanationText + '<br>' + proptext + '% of the population';
        }

        if (searchString === 'Indian Tamil' && Q.itamil_proportion !== undefined) {
            var proptext = Q.itamil_proportion;
            return baseTooltip.explanationText + '<br>' + proptext + '% of the population';
        }

        if (searchString === 'Muslims' && Q.muslim_proportion !== undefined) {
            var proptext = Q.muslim_proportion;
            return baseTooltip.explanationText + '<br>' + proptext + '% of the population';
        }
        
        if (searchString === 'SLPP' && Q.slpp_relation !== undefined) {
            var relationText = getRelationshipText(Q.slpp_relation);
            var ideologyText = getIdeologyText(Q.slpp_ideology);
            return baseTooltip.explanationText + '<br>Ideology: ' + ideologyText + '<br>Relation: ' + relationText;
        }

        if (searchString === 'Left' ) {
            var strenghtText = getStrenghtText(Q.left_strength);
            var dissentText = getDissentText(Q.left_dissent);
            return baseTooltip.explanationText + '<br>Strength: ' + strenghtText + '<br>Dissent: ' + dissentText;
        }

        if (searchString === 'Nationalists' ) {
            var strenghtText = getStrenghtText(Q.nationalist_strength);
            var dissentText = getDissentText(Q.nationalist_dissent);
            return baseTooltip.explanationText + '<br>Strength: ' + strenghtText + '<br>Dissent: ' + dissentText;
        }
      
        if (searchString === 'SLMP' && Q.slmp_relation !== undefined) {
            var relationText = getRelationshipText(Q.slmp_relation);
            var ideologyText = getIdeologyText(Q.slmp_ideology);
            return baseTooltip.explanationText + '<br>Ideology: ' + ideologyText + '<br>Relation: ' + relationText;
        }
      
        if (searchString === 'UNP' && Q.unp_relation !== undefined) {
            var relationText = getRelationshipText(Q.unp_relation);
            var ideologyText = getIdeologyText(Q.unp_ideology);
            return baseTooltip.explanationText + '<br>Ideology: ' + ideologyText + '<br>Relation: ' + relationText;
        }
        
        if (searchString === 'TULF' && Q.tulf_relation !== undefined) {
            var relationText = getRelationshipText(Q.tulf_relation);
            var ideologyText = getIdeologyText(Q.tulf_ideology);
            return baseTooltip.explanationText + '<br>Ideology: ' + ideologyText + '<br>Relation: ' + relationText;
        }
        
        if (searchString === 'PFLT' && Q.pflt_relation !== undefined) {
            var relationText = getRelationshipText(Q.pflt_relation);
            var ideologyText = getIdeologyText(Q.pflt_ideology);
            return baseTooltip.explanationText + '<br>Ideology: ' + ideologyText + '<br>Relation: ' + relationText;
        }
        
        if (searchString === 'ACTC' && Q.actc_relation !== undefined) {
            var relationText = getRelationshipText(Q.actc_relation);
            var ideologyText = getIdeologyText(Q.actc_ideology);
            return baseTooltip.explanationText + '<br>Ideology: ' + ideologyText + '<br>Relation: ' + relationText;
        }
        
        if (searchString === 'DPLF' && Q.dplf_relation !== undefined) {
            var relationText = getRelationshipText(Q.dplf_relation);
            var ideologyText = getIdeologyText(Q.dplf_ideology);
            return baseTooltip.explanationText + '<br>Ideology: ' + ideologyText + '<br>Relation: ' + relationText;
        }
        
        if (searchString === 'JVP' && Q.jvp_relation !== undefined) {
            var relationText = getRelationshipText(Q.jvp_relation);
            var ideologyText = getIdeologyText(Q.jvp_ideology);
            return baseTooltip.explanationText + '<br>Ideology: ' + ideologyText + '<br>Relation: ' + relationText;
        }
        
        if (searchString === 'NPP' && Q.npp_relation !== undefined) {
            var relationText = getRelationshipText(Q.npp_relation);
            var ideologyText = getIdeologyText(Q.npp_ideology);
            return baseTooltip.explanationText + '<br>Ideology: ' + ideologyText + '<br>Relation: ' + relationText;
        }

        if (searchString === 'UCPF' && Q.ucpf_relation !== undefined) {
            var relationText = getRelationshipText(Q.ucpf_relation);
            var ideologyText = getIdeologyText(Q.ucpf_ideology);
            return baseTooltip.explanationText + '<br>Ideology: ' + ideologyText + '<br>Relation: ' + relationText;
        }

        if (searchString === 'ULPP' && Q.ulpp_relation !== undefined) {
            var relationText = getRelationshipText(Q.ulpp_relation);
            var ideologyText = getIdeologyText(Q.ulpp_ideology);
            return baseTooltip.explanationText + '<br>Ideology: ' + ideologyText + '<br>Relation: ' + relationText;
        }

        if (searchString === 'DUNF' && Q.dunf_relation !== undefined) {
            var relationText = getRelationshipText(Q.dunf_relation);
            var ideologyText = getIdeologyText(Q.dunf_ideology);
            return baseTooltip.explanationText + '<br>Ideology: ' + ideologyText + '<br>Relation: ' + relationText;
        }
        
        if (searchString === 'CPSL' && Q.cpsl_relation !== undefined) {
            var relationText = getRelationshipText(Q.cpsl_relation);
            var ideologyText = getIdeologyText(Q.cpsl_ideology);
            return baseTooltip.explanationText + '<br>Ideology: ' + ideologyText + '<br>Relation: ' + relationText;
        }
        
        if (searchString === 'LSSP' && Q.lssp_relation !== undefined) {
            var relationText = getRelationshipText(Q.lssp_relation);
            var ideologyText = getIdeologyText(Q.lssp_ideology);
            return baseTooltip.explanationText + '<br>Ideology: ' + ideologyText + '<br>Relation: ' + relationText;
        }
        
        if (searchString === 'NSSP' && Q.nssp_relation !== undefined) {
            var relationText = getRelationshipText(Q.nssp_relation);
            var ideologyText = getIdeologyText(Q.nssp_ideology);
            return baseTooltip.explanationText + '<br>Ideology: ' + ideologyText + '<br>Relation: ' + relationText;
        }
        
        if (searchString === 'MEP' && Q.mep_relation !== undefined) {
            var relationText = getRelationshipText(Q.mep_relation);
            var ideologyText = getIdeologyText(Q.mep_ideology);
            return baseTooltip.explanationText + '<br>Ideology: ' + ideologyText + '<br>Relation: ' + relationText;
        }
        
        if (searchString === 'CWC' && Q.cwc_relation !== undefined) {
            var relationText = getRelationshipText(Q.cwc_relation);
            var ideologyText = getIdeologyText(Q.cwc_ideology);
            return baseTooltip.explanationText + '<br>Ideology: ' + ideologyText + '<br>Relation: ' + relationText;
        }
        
        if (searchString === 'SLMC' && Q.slmc_relation !== undefined) {
            var relationText = getRelationshipText(Q.slmc_relation);
            var ideologyText = getIdeologyText(Q.slmc_ideology);
            return baseTooltip.explanationText + '<br>Ideology: ' + ideologyText + '<br>Relation: ' + relationText;
        }

        if (searchString === 'JSS' && Q.jss_strength !== undefined) {
            var strength = getSizeText(Q.jss_strength);
            var status = getStatusText(Q.jss_gstatus);
            var militancy = getMilitancyText(Q.jss_militancy);
            return baseTooltip.explanationText + '<br>' + status + '<br>Strength: ' + strength + '<br>Militarization: ' + militancy;
        }
     
        if (searchString === 'LTTE' && Q.ltte_strength !== undefined) {
            var strength = getSizeText(Q.ltte_strength);
            var militancy = getMilitancyText(Q.ltte_militancy);
            var status = getStatusText(Q.ltte_gstatus);
            return baseTooltip.explanationText + '<br>' + status + '<br>Strength: ' + strength + '<br>Militarization: ' + militancy;
        }
        
        if (searchString === 'TELO' && Q.telo_strength !== undefined) {
            var strength = getSizeText(Q.telo_strength);
            var status = getStatusText(Q.telo_gstatus);
            var militancy = getMilitancyText(Q.telo_militancy);
            var content = baseTooltip.explanationText + '<br>' + status + '<br>Strength: ' + strength + '<br>Militarization: ' + militancy;
            if (Q.telo_gstatus === 3) {
                var ideologyText = getIdeologyText(Q.telo_ideology);
                var relationText = getRelationshipText(Q.telo_relation);
                content += '<br>Ideology: ' + ideologyText + '<br>Relation: ' + relationText;
            }
            return content;
        }
        
        if (searchString === 'EPRLF' && Q.eprlf_strength !== undefined) {
            var strength = getSizeText(Q.eprlf_strength);
            var status = getStatusText(Q.eprlf_gstatus);
            var militancy = getMilitancyText(Q.eprlf_militancy);
            var content = baseTooltip.explanationText + '<br>' + status + '<br>Strength: ' + strength + '<br>Militarization: ' + militancy;
            if (Q.eprlf_gstatus === 3) {
                var ideologyText = getIdeologyText(Q.eprlf_ideology);
                var relationText = getRelationshipText(Q.eprlf_relation);
                content += '<br>Ideology: ' + ideologyText + '<br>Relation: ' + relationText;
            }
            return content;
        }

        if (searchString === 'EROS' && Q.eros_relation !== undefined) {
            var strength = getSizeText(Q.eros_strength);
            var status = getStatusText(Q.eros_gstatus);
            var militancy = getMilitancyText(Q.eros_militancy);
            var content = baseTooltip.explanationText + '<br>' + status + '<br>Strength: ' + strength + '<br>Militarization: ' + militancy;
            if (Q.eros_gstatus === 3) {
                var ideologyText = getIdeologyText(Q.eros_ideology);
                var relationText = getRelationshipText(Q.eros_relation);
                content += '<br>Ideology: ' + ideologyText + '<br>Relation: ' + relationText;
            }
            return content;
        }
        
        if (searchString === 'PLOTE' && Q.plote_strength !== undefined) {
            var strength = getSizeText(Q.plote_strength);
            var militancy = getMilitancyText(Q.plote_militancy);
            var status = getStatusText(Q.plote_gstatus);
            return baseTooltip.explanationText + '<br>' + status + '<br>Strength: ' + strength + '<br>Militarization: ' + militancy;
        }
        
       
        if (searchString === 'DJV' && Q.djv_strength !== undefined) {
            var strength = getSizeText(Q.djv_strength);
            var militancy = getMilitancyText(Q.djv_militancy);
            var status = getStatusText(Q.djv_gstatus);
            return baseTooltip.explanationText + '<br>' + status + '<br>Strength: ' + strength + '<br>Militarization: ' + militancy;
        }
      
        if (searchString === 'EPDP' && Q.epdp_strength !== undefined) {
            var strength = getSizeText(Q.epdp_strength);
            var militancy = getMilitancyText(Q.epdp_militancy);
            var status = getStatusText(Q.epdp_gstatus);
            return baseTooltip.explanationText + '<br>' + status + '<br>Strength: ' + strength + '<br>Militarization: ' + militancy;
        }

        if (searchString === 'PRRA' && Q.prra_strength !== undefined) {
            var strength = getSizeText(Q.prra_strength);
            var militancy = getMilitancyText(Q.prra_militancy);
            var status = getStatusText(Q.prra_gstatus);
            return baseTooltip.explanationText + '<br>' + status + '<br>Strength: ' + strength + '<br>Militarization: ' + militancy;
        }

        if (searchString === 'Eagles' && Q.eagles_strength !== undefined) {
            var strength = getSizeText(Q.eagles_strength);
            var militancy = getMilitancyText(Q.eagles_militancy);
            var status = getStatusText(Q.eagles_gstatus);
            return baseTooltip.explanationText + '<br>' + status + '<br>Strength: ' + strength + '<br>Militarization: ' + militancy;
        }

        if (searchString === 'Black Cats' && Q.blackcats_strength !== undefined) {
            var strength = getSizeText(Q.blackcats_strength);
            var militancy = getMilitancyText(Q.blackcats_militancy);
            var status = getStatusText(Q.blackcats_gstatus);
            return baseTooltip.explanationText + '<br>' + status + '<br>Strength: ' + strength + '<br>Militarization: ' + militancy;
        }

       if (searchString === 'ENDLF' && Q.endlf_strength !== undefined) {
            var strength = getSizeText(Q.endlf_strength);
            var status = getStatusText(Q.endlf_gstatus);
            var militancy = getMilitancyText(Q.endlf_militancy);
            var content = baseTooltip.explanationText + '<br>' + status + '<br>Strength: ' + strength + '<br>Militarization: ' + militancy;

            if (Q.endlf_gstatus == 3) {
                var ideologyText = getIdeologyText(Q.endlf_ideology);
                var relationText = getRelationshipText(Q.endlf_relation);
                content += '<br>Ideology: ' + ideologyText + '<br>Relation: ' + relationText;
            }
            return content;
        }

        if (searchString === 'TNA' && Q.tna_strength !== undefined) {
            var strength = getSizeText(Q.tna_strength);
            var militancy = getMilitancyText(Q.tna_militancy);
            var status = getStatusText(Q.tna_gstatus);
            return baseTooltip.explanationText + '<br>' + status + '<br>Strength: ' + strength + '<br>Militarization: ' + militancy;
        }
        
        if (searchString === 'Sri Lanka Armed Forces' && Q.slaf_strength !== undefined) {
            var strength = Q.slaf_strength ? Q.slaf_strength : '0';
            var morale = getLoyaltyText(Q.slaf_morale);
            var readiness = getMilitancyText(Q.slaf_readiness)
            return baseTooltip.explanationText + '<br>Strength: ' + strength + 'k<br>Morale: ' + morale + '<br>Readiness:' + readiness;
        }

        if (searchString === 'Special Task Force' && Q.stf_strength !== undefined) {
            var strength = Q.stf_strength ? Q.stf_strength : '0';
            var morale = getLoyaltyText(Q.stf_morale);
            var status = getStatusText(Q.stf_gstatus);
            var readiness = getMilitancyText(Q.stf_readiness)
            return baseTooltip.explanationText + '<br>' + status + '<br>Strength: ' + strength + 'k<br>Morale: ' + morale + '<br>Readiness: ' + readiness;
        }
      
        if (searchString === 'Sri Lanka Police' && Q.slp_strength !== undefined) {
            var strength = Q.slp_strength ? Q.slp_strength : '0';
            var morale = getLoyaltyText(Q.slp_morale);
            var readiness = getMilitancyText(Q.slp_readiness)
            return baseTooltip.explanationText + '<br>Strength: ' + strength + 'k<br>Morale: ' + morale + '<br>Readiness: ' + readiness;
        }
        
        if (searchString === 'Civil Security' && Q.homeg_civilsec_strength !== undefined) {
            var strength = Q.homeg_civilsec_strength ? Q.homeg_civilsec_strength : '0';
            var morale = getLoyaltyText(Q.homeg_civilsec_morale);
            var readiness = getMilitancyText(Q.homeg_civilsec_readiness)
            return baseTooltip.explanationText + '<br>Strength: ' + strength + 'k<br>Morale: ' + morale + '<br>Readiness: ' + readiness;
        }
        
        if (searchString === 'Home Guard' && Q.homeg_civilsec_strength !== undefined) {
            var strength = Q.homeg_civilsec_strength ? Q.homeg_civilsec_strength : '0';
            var morale = getLoyaltyText(Q.homeg_civilsec_morale);
            var readiness = getMilitancyText(Q.homeg_civilsec_readiness)
            return baseTooltip.explanationText + '<br>Strength: ' + strength + 'k<br>Morale: ' + morale + '<br>Readiness: ' + readiness;
        }

        if (searchString === 'IPKF' && Q.ipkf_size !== undefined) {
            var strength = Q.ipkf_size ? Q.ipkf_morale : '0';
            var morale = getLoyaltyText(Q.ipkf_morale);
            var status = getStatusText(Q.ipkf_gstatus);
            return baseTooltip.explanationText + '<br>' + status + '<br>Strength: ' + strength + 'k<br>Morale: ' + morale;
        }
        
        return baseTooltip.explanationText;
        
    }
    
    window.getDynamicTooltipContent = getDynamicTooltipContent;
  
    function applyWholesome(str) {
        const allWords = new Set([
            ...tooltipList.map(t => t.searchString),
            ...colourList.map(c => c.word)
        ]);
    
        // Escape special regex characters in the words
        const escapedWords = [...allWords].map(word => 
            word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        );
        
        const regex = new RegExp(`\\b(${escapedWords.join('|')})\\b`, 'g');
    
        return str.replace(/(<(?:span|strong)[^>]*>.*?<\/(?:span|strong)>|<[^>]+>|[^<]+)/g, (segment) => {
            if (segment.startsWith('<')) return segment;
    
            return segment.replace(regex, (match) => {
                const tooltip = tooltipList.find(t => t.searchString === match);
                const colour = colourList.find(c => c.word === match);
    
                let style = colour ? colour.style : '';
                let innerText = match;
    
                if (colour && colour.img) {
                    innerText = `<img src="${colour.img}" class="p_icon" alt="">${innerText}`;
                }
    
                if (tooltip) {
                    var tooltipContent = getDynamicTooltipContent(match, tooltip);
                    return `<span class='mytooltip' style='${style}'>${innerText}<span class='mytooltiptext'>${tooltipContent}</span></span>`;
                } else if (colour) {
                    return `<span style='${style}'>${innerText}</span>`;
                }
    
                return match;
            });
        });
    }

  // This function allows you to do something in response to signals.
  window.handleSignal = function(signal, event, scene_id) {
  };
  
  // This function runs on a new page. Right now, this auto-saves.
  window.onNewPage = function() {
    var scene = window.dendryUI.dendryEngine.state.sceneId;
    if (scene != 'root' && !window.justLoaded) {
        window.dendryUI.autosave();
    }
    if (window.justLoaded) {
        window.justLoaded = false;
    }
  };

  // TODO: have some code for tabbed sidebar browsing.
  window.updateSidebar = function() {
    $('#qualities').empty();
    var scene = dendryUI.game.scenes[window.statusTab];
    dendryUI.dendryEngine._runActions(scene.onArrival);
    var displayContent = dendryUI.dendryEngine._makeDisplayContent(scene.content, true);
    var html = dendryUI.contentToHTML.convert(displayContent);
    $('#qualities').html(window.displayText(html));
  };

window.updateSidebarRight = function() {
    $('#qualities_right').empty();
    var scene = dendryUI.game.scenes[window.statusTabRight];
    dendryUI.dendryEngine._runActions(scene.onArrival);
    var displayContent = dendryUI.dendryEngine._makeDisplayContent(scene.content, true);
    var html = dendryUI.contentToHTML.convert(displayContent);
    $('#qualities_right').html(window.displayText(html));
  };

  window.changeTab = function(newTab, tabId) {
      if (tabId == 'poll_tab' && dendryUI.dendryEngine.state.qualities.historical_mode) {
          window.alert('Polls are not available in historical mode.');
          return;
      }
      var tabButton = document.getElementById(tabId);
      var tabButtons = document.getElementsByClassName('tab_button');
      for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(' active', '');
      }
      tabButton.className += ' active';
      window.statusTab = newTab;
      window.updateSidebar();
  };

  window.currentRightTab = null;

  window.changeTabRight = function(newTab, tabId) {
    window.statusTabRight = newTab;
    window.updateSidebarRight();
  };

  window.toggleRightPanel = function() {
    var page = document.getElementById('page');
    if (page.classList.contains('right-panel-open')) {
        page.classList.remove('right-panel-open');
    } else {
        window.changeTabRight('status_right', 'nation_tab');
        page.classList.add('right-panel-open');
    }
  };

  window.switchRightPanel = function(scene, tabId) {
    window.changeTabRight(scene, tabId);
    document.querySelectorAll('#right-panel-nav .tab_button').forEach(function(btn) {
        btn.classList.remove('active');  
    });
    document.getElementById(tabId).classList.add('active');
  };


  /*
   * This function copied from the code for Infinite Space Battle Simulator
   *
   * quality - a number between max and min
   * qualityName - the name of the quality
   * max and min - numbers
   * colors - if true/1, will use some color scheme - green to yellow to red for high to low
   * */
  window.generateBar = function(quality, qualityName, max, min, colors) {
      var bar = document.createElement('div');
      bar.className = 'bar';
      var value = document.createElement('div');
      value.className = 'barValue';
      var width = (quality - min)/(max - min);
      if (width > 1) {
          width = 1;
      } else if (width < 0) {
          width = 0;
      }
      value.style.width = Math.round(width*100) + '%';
      if (colors) {
          value.style.backgroundColor = window.probToColor(width*100);
      }
      bar.textContent = qualityName + ': ' + quality;
      if (colors) {
          bar.textContent += '/' + max;
      }
      bar.appendChild(value);
      return bar;
  };

  window.onDisplayContent = function() {
    window.updateSidebar();
    window.updateSidebarRight();
    setTimeout(function() {
        var els = document.querySelectorAll('#status_parliament');
        var el = els[els.length - 1];
        if (!el || !d3 || !d3.parliament || !window._parliData || window._parliData.length === 0) return;
        var w = el.parentElement.offsetWidth || 450;
        el.setAttribute('width', w);
        el.setAttribute('height', Math.round(w * 0.50));
        var parl = d3.parliament();
        parl.width(w).height(Math.round(w * 0.50)).innerRadiusCoef(0.4);
        parl.enter.fromCenter(false).smallToBig(false);
        parl.exit.toCenter(false).bigToSmall(false);
        d3.select(el).datum(window._parliData).call(parl);
    }, 800);
  };

 window.statusTab = "status";
 window.statusTabRight = "status_right";
  window.justLoaded = true;
  window.dendryModifyUI = main;
  console.log("Modifying stats: see dendryUI.dendryEngine.state.qualities");

  window.onload = function() {
    window.dendryUI.toggle_audio(false);
    AudioManager.init();
    window.dendryUI.loadSettings({show_portraits: false});
    window.statusTab = "status";
    window.statusTabRight = "status_right";
    window.updateSidebar();
    window.updateSidebarRight();
    if (window.dendryUI.dark_mode) {
        document.body.classList.add('dark-mode');
    }
    var observer = new MutationObserver(function() {
        setTimeout(function() {
            var els = document.querySelectorAll('#status_parliament');
            var el = els[els.length - 1];
            if (!el || !window._parliData || window._parliData.length === 0) return;
            var w = el.parentElement.offsetWidth || 450;
            el.setAttribute('width', w);
            el.setAttribute('height', Math.round(w * 0.50));
            var parl = d3.parliament();
            parl.width(w).height(Math.round(w * 0.50)).innerRadiusCoef(0.4);
            parl.enter.fromCenter(false).smallToBig(false);
            parl.exit.toCenter(false).bigToSmall(false);
            d3.select(el).datum(window._parliData).call(parl);
        }, 100);
    });
    observer.observe(document.getElementById('content'), { childList: true, subtree: true });
    window.pinnedCardsDescription = "Advisor cards - actions are only usable once per 6 months.";
    window.initVolumeKnob();
  };

}());

// Western Province
function Colombo_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Colombo";
  Q.district_sinhala = Q.colombo_d_sinhala;
  Q.district_sltamil = Q.colombo_d_sltamil;
  Q.district_itamil = Q.colombo_d_itamil;
  Q.district_muslim = Q.colombo_d_muslim;
  Q.district_others = Q.colombo_d_other;
  Q.district_worker = Q.colombo_d_worker;
  Q.district_middle = Q.colombo_d_middle;
  Q.district_upper = Q.colombo_d_upper;
  Q.district_rural = Q.colombo_d_rural;
  Q.district_control = Q.colombo_d_control;
  Q.district_infastructure = Q.colombo_d_infastructure;
  Q.district_seats = Q.colombo_d_seats;
  Q.district_industries = Q.colombo_d_industries;  
  window.updateSidebarRight(); 
}

function Gampaha_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Gampaha";
  Q.district_sinhala = Q.gampaha_d_sinhala;
  Q.district_sltamil = Q.gampaha_d_sltamil;
  Q.district_itamil = Q.gampaha_d_itamil;
  Q.district_muslim = Q.gampaha_d_muslim;
  Q.district_others = Q.gampaha_d_other;
  Q.district_worker = Q.gampaha_d_worker;
  Q.district_middle = Q.gampaha_d_middle;
  Q.district_upper = Q.gampaha_d_upper;
  Q.district_rural = Q.gampaha_d_rural;
  Q.district_control = Q.gampaha_d_control;
  Q.district_infastructure = Q.gampaha_d_infastructure;
  Q.district_seats = Q.gampaha_d_seats;
  Q.district_industries = Q.gampaha_d_industries;
  window.updateSidebarRight();
}

function Kalutara_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Kalutara";
  Q.district_sinhala = Q.kalutara_d_sinhala;
  Q.district_sltamil = Q.kalutara_d_sltamil;
  Q.district_itamil = Q.kalutara_d_itamil;
  Q.district_muslim = Q.kalutara_d_muslim;
  Q.district_others = Q.kalutara_d_other;
  Q.district_worker = Q.kalutara_d_worker;
  Q.district_middle = Q.kalutara_d_middle;
  Q.district_upper = Q.kalutara_d_upper;
  Q.district_rural = Q.kalutara_d_rural;
  Q.district_control = Q.kalutara_d_control;
  Q.district_infastructure = Q.kalutara_d_infastructure;
  Q.district_seats = Q.kalutara_d_seats;
  Q.district_industries = Q.kalutara_d_industries;
  window.updateSidebarRight();
}

// Central Province
function Kandy_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Kandy";
  Q.district_sinhala = Q.kandy_d_sinhala;
  Q.district_sltamil = Q.kandy_d_sltamil;
  Q.district_itamil = Q.kandy_d_itamil;
  Q.district_muslim = Q.kandy_d_muslim;
  Q.district_others = Q.kandy_d_other;
  Q.district_worker = Q.kandy_d_worker;
  Q.district_middle = Q.kandy_d_middle;
  Q.district_upper = Q.kandy_d_upper;
  Q.district_rural = Q.kandy_d_rural;
  Q.district_control = Q.kandy_d_control;
  Q.district_infastructure = Q.kandy_d_infastructure;
  Q.district_seats = Q.kandy_d_seats;
  Q.district_industries = Q.kandy_d_industries;
  window.updateSidebarRight();
}

function Matale_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Matale";
  Q.district_sinhala = Q.matale_d_sinhala;
  Q.district_sltamil = Q.matale_d_sltamil;
  Q.district_itamil = Q.matale_d_itamil;
  Q.district_muslim = Q.matale_d_muslim;
  Q.district_others = Q.matale_d_other;
  Q.district_worker = Q.matale_d_worker;
  Q.district_middle = Q.matale_d_middle;
  Q.district_upper = Q.matale_d_upper;
  Q.district_rural = Q.matale_d_rural;
  Q.district_control = Q.matale_d_control;
  Q.district_infastructure = Q.matale_d_infastructure;
  Q.district_seats = Q.matale_d_seats;
  Q.district_industries = Q.matale_d_industries;
  window.updateSidebarRight();
}

function NuwaraEliya_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Nuwara Eliya";
  Q.district_sinhala = Q.nuwaraeliya_d_sinhala;
  Q.district_sltamil = Q.nuwaraeliya_d_sltamil;
  Q.district_itamil = Q.nuwaraeliya_d_itamil;
  Q.district_muslim = Q.nuwaraeliya_d_muslim;
  Q.district_others = Q.nuwaraeliya_d_other;
  Q.district_worker = Q.nuwaraeliya_d_worker;
  Q.district_middle = Q.nuwaraeliya_d_middle;
  Q.district_upper = Q.nuwaraeliya_d_upper;
  Q.district_rural = Q.nuwaraeliya_d_rural;
  Q.district_control = Q.nuwaraeliya_d_control;
  Q.district_infastructure = Q.nuwaraeliya_d_infastructure;
  Q.district_seats = Q.nuwaraeliya_d_seats;
  Q.district_industries = Q.nuwaraeliya_d_industries;
  window.updateSidebarRight();
}

// Southern Province
function Galle_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Galle";
  Q.district_sinhala = Q.galle_d_sinhala;
  Q.district_sltamil = Q.galle_d_sltamil;
  Q.district_itamil = Q.galle_d_itamil;
  Q.district_muslim = Q.galle_d_muslim;
  Q.district_others = Q.galle_d_other;
  Q.district_worker = Q.galle_d_worker;
  Q.district_middle = Q.galle_d_middle;
  Q.district_upper = Q.galle_d_upper;
  Q.district_rural = Q.galle_d_rural;
  Q.district_control = Q.galle_d_control;
  Q.district_infastructure = Q.galle_d_infastructure;
  Q.district_seats = Q.galle_d_seats;
  Q.district_industries = Q.galle_d_industries;
  window.updateSidebarRight();
}

function Matara_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Matara";
  Q.district_sinhala = Q.matara_d_sinhala;
  Q.district_sltamil = Q.matara_d_sltamil;
  Q.district_itamil = Q.matara_d_itamil;
  Q.district_muslim = Q.matara_d_muslim;
  Q.district_others = Q.matara_d_other;
  Q.district_worker = Q.matara_d_worker;
  Q.district_middle = Q.matara_d_middle;
  Q.district_upper = Q.matara_d_upper;
  Q.district_rural = Q.matara_d_rural;
  Q.district_control = Q.matara_d_control;
  Q.district_infastructure = Q.matara_d_infastructure;
  Q.district_seats = Q.matara_d_seats;
  Q.district_industries = Q.matara_d_industries;
  window.updateSidebarRight();
}

function Hambantota_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Hambantota";
  Q.district_sinhala = Q.hambantota_d_sinhala;
  Q.district_sltamil = Q.hambantota_d_sltamil;
  Q.district_itamil = Q.hambantota_d_itamil;
  Q.district_muslim = Q.hambantota_d_muslim;
  Q.district_others = Q.hambantota_d_other;
  Q.district_worker = Q.hambantota_d_worker;
  Q.district_middle = Q.hambantota_d_middle;
  Q.district_upper = Q.hambantota_d_upper;
  Q.district_rural = Q.hambantota_d_rural;
  Q.district_control = Q.hambantota_d_control;
  Q.district_infastructure = Q.hambantota_d_infastructure;
  Q.district_seats = Q.hambantota_d_seats;
  Q.district_industries = Q.hambantota_d_industries;
  window.updateSidebarRight();
}

// Northern Province
function Jaffna_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Jaffna";
  Q.district_sinhala = Q.jaffna_d_sinhala;
  Q.district_sltamil = Q.jaffna_d_sltamil;
  Q.district_itamil = Q.jaffna_d_itamil;
  Q.district_muslim = Q.jaffna_d_muslim;
  Q.district_others = Q.jaffna_d_other;
  Q.district_worker = Q.jaffna_d_worker;
  Q.district_middle = Q.jaffna_d_middle;
  Q.district_upper = Q.jaffna_d_upper;
  Q.district_rural = Q.jaffna_d_rural;
  Q.district_control = Q.jaffna_d_control;
  Q.district_infastructure = Q.jaffna_d_infastructure;
  Q.district_seats = Q.jaffna_d_seats;
  Q.district_industries = Q.jaffna_d_industries;
  window.updateSidebarRight();
}

function Kilinochchi_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Kilinochchi";
  Q.district_sinhala = Q.kilinochchi_d_sinhala;
  Q.district_sltamil = Q.kilinochchi_d_sltamil;
  Q.district_itamil = Q.kilinochchi_d_itamil;
  Q.district_muslim = Q.kilinochchi_d_muslim;
  Q.district_others = Q.kilinochchi_d_other;
  Q.district_worker = Q.kilinochchi_d_worker;
  Q.district_middle = Q.kilinochchi_d_middle;
  Q.district_upper = Q.kilinochchi_d_upper;
  Q.district_rural = Q.kilinochchi_d_rural;
  Q.district_control = Q.kilinochchi_d_control;
  Q.district_infastructure = Q.kilinochchi_d_infastructure;
  Q.district_seats = Q.kilinochchi_d_seats;
  Q.district_industries = Q.kilinochchi_d_industries;
  window.updateSidebarRight();
}

function Mannar_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Mannar";
  Q.district_sinhala = Q.mannar_d_sinhala;
  Q.district_sltamil = Q.mannar_d_sltamil;
  Q.district_itamil = Q.mannar_d_itamil;
  Q.district_muslim = Q.mannar_d_muslim;
  Q.district_others = Q.mannar_d_other;
  Q.district_worker = Q.mannar_d_worker;
  Q.district_middle = Q.mannar_d_middle;
  Q.district_upper = Q.mannar_d_upper;
  Q.district_rural = Q.mannar_d_rural;
  Q.district_control = Q.mannar_d_control;
  Q.district_infastructure = Q.mannar_d_infastructure;
  Q.district_seats = Q.mannar_d_seats;
  Q.district_industries = Q.mannar_d_industries;
  window.updateSidebarRight();
}

function Mullaitivu_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Mullaitivu";
  Q.district_sinhala = Q.mullaitivu_d_sinhala;
  Q.district_sltamil = Q.mullaitivu_d_sltamil;
  Q.district_itamil = Q.mullaitivu_d_itamil;
  Q.district_muslim = Q.mullaitivu_d_muslim;
  Q.district_others = Q.mullaitivu_d_other;
  Q.district_worker = Q.mullaitivu_d_worker;
  Q.district_middle = Q.mullaitivu_d_middle;
  Q.district_upper = Q.mullaitivu_d_upper;
  Q.district_rural = Q.mullaitivu_d_rural;
  Q.district_control = Q.mullaitivu_d_control;
  Q.district_infastructure = Q.mullaitivu_d_infastructure;
  Q.district_seats = Q.mullaitivu_d_seats;
  Q.district_industries = Q.mullaitivu_d_industries;
  window.updateSidebarRight();
}

function Vavuniya_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Vavuniya";
  Q.district_sinhala = Q.vavuniya_d_sinhala;
  Q.district_sltamil = Q.vavuniya_d_sltamil;
  Q.district_itamil = Q.vavuniya_d_itamil;
  Q.district_muslim = Q.vavuniya_d_muslim;
  Q.district_others = Q.vavuniya_d_other;
  Q.district_worker = Q.vavuniya_d_worker;
  Q.district_middle = Q.vavuniya_d_middle;
  Q.district_upper = Q.vavuniya_d_upper;
  Q.district_rural = Q.vavuniya_d_rural;
  Q.district_control = Q.vavuniya_d_control;
  Q.district_infastructure = Q.vavuniya_d_infastructure;
  Q.district_seats = Q.vavuniya_d_seats;
  Q.district_industries = Q.vavuniya_d_industries;
  window.updateSidebarRight();
}

// Eastern Province
function Batticaloa_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Batticaloa";
  Q.district_sinhala = Q.batticaloa_d_sinhala;
  Q.district_sltamil = Q.batticaloa_d_sltamil;
  Q.district_itamil = Q.batticaloa_d_itamil;
  Q.district_muslim = Q.batticaloa_d_muslim;
  Q.district_others = Q.batticaloa_d_other;
  Q.district_worker = Q.batticaloa_d_worker;
  Q.district_middle = Q.batticaloa_d_middle;
  Q.district_upper = Q.batticaloa_d_upper;
  Q.district_rural = Q.batticaloa_d_rural;
  Q.district_control = Q.batticaloa_d_control;
  Q.district_infastructure = Q.batticaloa_d_infastructure;
  Q.district_seats = Q.batticaloa_d_seats;
  Q.district_industries = Q.batticaloa_d_industries;
  window.updateSidebarRight();
}

function Ampara_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Ampara";
  Q.district_sinhala = Q.ampara_d_sinhala;
  Q.district_sltamil = Q.ampara_d_sltamil;
  Q.district_itamil = Q.ampara_d_itamil;
  Q.district_muslim = Q.ampara_d_muslim;
  Q.district_others = Q.ampara_d_other;
  Q.district_worker = Q.ampara_d_worker;
  Q.district_middle = Q.ampara_d_middle;
  Q.district_upper = Q.ampara_d_upper;
  Q.district_rural = Q.ampara_d_rural;
  Q.district_control = Q.ampara_d_control;
  Q.district_infastructure = Q.ampara_d_infastructure;
  Q.district_seats = Q.ampara_d_seats;
  Q.district_industries = Q.ampara_d_industries;
  window.updateSidebarRight();
}

function Trincomalee_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Trincomalee";
  Q.district_sinhala = Q.trincomalee_d_sinhala;
  Q.district_sltamil = Q.trincomalee_d_sltamil;
  Q.district_itamil = Q.trincomalee_d_itamil;
  Q.district_muslim = Q.trincomalee_d_muslim;
  Q.district_others = Q.trincomalee_d_other;
  Q.district_worker = Q.trincomalee_d_worker;
  Q.district_middle = Q.trincomalee_d_middle;
  Q.district_upper = Q.trincomalee_d_upper;
  Q.district_rural = Q.trincomalee_d_rural;
  Q.district_control = Q.trincomalee_d_control;
  Q.district_infastructure = Q.trincomalee_d_infastructure;
  Q.district_seats = Q.trincomalee_d_seats;
  Q.district_industries = Q.trincomalee_d_industries;
  window.updateSidebarRight();
}

// North Western Province
function Kurunegala_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Kurunegala";
  Q.district_sinhala = Q.kurunegala_d_sinhala;
  Q.district_sltamil = Q.kurunegala_d_sltamil;
  Q.district_itamil = Q.kurunegala_d_itamil;
  Q.district_muslim = Q.kurunegala_d_muslim;
  Q.district_others = Q.kurunegala_d_other;
  Q.district_worker = Q.kurunegala_d_worker;
  Q.district_middle = Q.kurunegala_d_middle;
  Q.district_upper = Q.kurunegala_d_upper;
  Q.district_rural = Q.kurunegala_d_rural;
  Q.district_control = Q.kurunegala_d_control;
  Q.district_infastructure = Q.kurunegala_d_infastructure;
  Q.district_seats = Q.kurunegala_d_seats;
  Q.district_industries = Q.kurunegala_d_industries;
  window.updateSidebarRight();
}

function Puttalam_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Puttalam";
  Q.district_sinhala = Q.puttalam_d_sinhala;
  Q.district_sltamil = Q.puttalam_d_sltamil;
  Q.district_itamil = Q.puttalam_d_itamil;
  Q.district_muslim = Q.puttalam_d_muslim;
  Q.district_others = Q.puttalam_d_other;
  Q.district_worker = Q.puttalam_d_worker;
  Q.district_middle = Q.puttalam_d_middle;
  Q.district_upper = Q.puttalam_d_upper;
  Q.district_rural = Q.puttalam_d_rural;
  Q.district_control = Q.puttalam_d_control;
  Q.district_infastructure = Q.puttalam_d_infastructure;
  Q.district_seats = Q.puttalam_d_seats;
  Q.district_industries = Q.puttalam_d_industries;
  window.updateSidebarRight();
}

// North Central Province
function Anuradhapura_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Anuradhapura";
  Q.district_sinhala = Q.anuradhapura_d_sinhala;
  Q.district_sltamil = Q.anuradhapura_d_sltamil;
  Q.district_itamil = Q.anuradhapura_d_itamil;
  Q.district_muslim = Q.anuradhapura_d_muslim;
  Q.district_others = Q.anuradhapura_d_other;
  Q.district_worker = Q.anuradhapura_d_worker;
  Q.district_middle = Q.anuradhapura_d_middle;
  Q.district_upper = Q.anuradhapura_d_upper;
  Q.district_rural = Q.anuradhapura_d_rural;
  Q.district_control = Q.anuradhapura_d_control;
  Q.district_infastructure = Q.anuradhapura_d_infastructure;
  Q.district_seats = Q.anuradhapura_d_seats;
  Q.district_industries = Q.anuradhapura_d_industries;
  window.updateSidebarRight();
}

function Polonnaruwa_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Polonnaruwa";
  Q.district_sinhala = Q.polonnaruwa_d_sinhala;
  Q.district_sltamil = Q.polonnaruwa_d_sltamil;
  Q.district_itamil = Q.polonnaruwa_d_itamil;
  Q.district_muslim = Q.polonnaruwa_d_muslim;
  Q.district_others = Q.polonnaruwa_d_other;
  Q.district_worker = Q.polonnaruwa_d_worker;
  Q.district_middle = Q.polonnaruwa_d_middle;
  Q.district_upper = Q.polonnaruwa_d_upper;
  Q.district_rural = Q.polonnaruwa_d_rural;
  Q.district_control = Q.polonnaruwa_d_control;
  Q.district_infastructure = Q.polonnaruwa_d_infastructure;
  Q.district_seats = Q.polonnaruwa_d_seats;
  Q.district_industries = Q.polonnaruwa_d_industries;
  window.updateSidebarRight();
}

// Uva Province
function Badulla_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Badulla";
  Q.district_sinhala = Q.badulla_d_sinhala;
  Q.district_sltamil = Q.badulla_d_sltamil;
  Q.district_itamil = Q.badulla_d_itamil;
  Q.district_muslim = Q.badulla_d_muslim;
  Q.district_others = Q.badulla_d_other;
  Q.district_worker = Q.badulla_d_worker;
  Q.district_middle = Q.badulla_d_middle;
  Q.district_upper = Q.badulla_d_upper;
  Q.district_rural = Q.badulla_d_rural;
  Q.district_control = Q.badulla_d_control;
  Q.district_infastructure = Q.badulla_d_infastructure;
  Q.district_seats = Q.badulla_d_seats;
  Q.district_industries = Q.badulla_d_industries;
  window.updateSidebarRight();
}

function Monaragala_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Monaragala";
  Q.district_sinhala = Q.monaragala_d_sinhala;
  Q.district_sltamil = Q.monaragala_d_sltamil;
  Q.district_itamil = Q.monaragala_d_itamil;
  Q.district_muslim = Q.monaragala_d_muslim;
  Q.district_others = Q.monaragala_d_other;
  Q.district_worker = Q.monaragala_d_worker;
  Q.district_middle = Q.monaragala_d_middle;
  Q.district_upper = Q.monaragala_d_upper;
  Q.district_rural = Q.monaragala_d_rural;
  Q.district_control = Q.monaragala_d_control;
  Q.district_infastructure = Q.monaragala_d_infastructure;
  Q.district_seats = Q.monaragala_d_seats;
  Q.district_industries = Q.monaragala_d_industries;
  window.updateSidebarRight();
}

// Sabaragamuwa Province
function Ratnapura_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Ratnapura";
  Q.district_sinhala = Q.ratnapura_d_sinhala;
  Q.district_sltamil = Q.ratnapura_d_sltamil;
  Q.district_itamil = Q.ratnapura_d_itamil;
  Q.district_muslim = Q.ratnapura_d_muslim;
  Q.district_others = Q.ratnapura_d_other;
  Q.district_worker = Q.ratnapura_d_worker;
  Q.district_middle = Q.ratnapura_d_middle;
  Q.district_upper = Q.ratnapura_d_upper;
  Q.district_rural = Q.ratnapura_d_rural;
  Q.district_control = Q.ratnapura_d_control;
  Q.district_infastructure = Q.ratnapura_d_infastructure;
  Q.district_seats = Q.ratnapura_d_seats;
  Q.district_industries = Q.ratnapura_d_industries;
  window.updateSidebarRight();
}

function Kegalle_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Kegalle";
  Q.district_sinhala = Q.kegalle_d_sinhala;
  Q.district_sltamil = Q.kegalle_d_sltamil;
  Q.district_itamil = Q.kegalle_d_itamil;
  Q.district_muslim = Q.kegalle_d_muslim;
  Q.district_others = Q.kegalle_d_other;
  Q.district_worker = Q.kegalle_d_worker;
  Q.district_middle = Q.kegalle_d_middle;
  Q.district_upper = Q.kegalle_d_upper;
  Q.district_rural = Q.kegalle_d_rural;
  Q.district_control = Q.kegalle_d_control;
  Q.district_infastructure = Q.kegalle_d_infastructure;
  Q.district_seats = Q.kegalle_d_seats;
  Q.district_industries = Q.kegalle_d_industries;
  window.updateSidebarRight();
}

document.addEventListener('mousemove', e => {
    document.querySelectorAll('.mytooltiptext').forEach(el => {
        el.style.setProperty('--mouse-x', e.clientX + 'px');
        el.style.setProperty('--mouse-y', e.clientY + 'px');
    });
});

document.addEventListener('mouseover', e => {
    const tooltip = e.target.closest('.mytooltip');
    if (tooltip) {
        const text = tooltip.querySelector('.mytooltiptext');
        if (text) {
            text.style.setProperty('--mouse-x', e.clientX + 'px');
            text.style.setProperty('--mouse-y', e.clientY + 'px');
        }
    }
});

window.addEventListener('dendryload', function() {
    window.updateMusicBtn();
});



