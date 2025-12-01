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

  // the url is a link to game.json
  // test url: https://aucchen.github.io/social_democracy_mods/v0.1.json
  // TODO; 
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

  window.disableAudio = function() {
      window.dendryUI.toggle_audio(false);
      window.dendryUI.saveSettings();
  };

  window.enableAudio = function() {
      window.dendryUI.toggle_audio(true);
      window.dendryUI.saveSettings();
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
    if (disable_audio) {
        $('#audio_no')[0].checked = true;
    } else {
        $('#audio_yes')[0].checked = true;
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
  
    //To get a value 
    function getMilitancyText(value) {
        if (value === undefined || value === null) return 'Unknown';
        if (value <= 0) return 'Unarmed';
        if (value <= 1) return 'Poorly armed';
        if (value <= 2) return 'Armed';
        return 'Heavily armed';
    }
    
    //To get a value 
    function getLoyaltyText(value) {
        if (value === undefined || value === null) return 'Unknown';
        if (value <= 0.25) return 'Abysmal';
        if (value <= 0.5) return 'Low';
        if (value <= 0.75) return 'Medium';
        if (value <= 1) return 'High';
        if (value <= 1.25) return 'Very high';
        return 'Fanatic';
    }

    //To check if extra dynamic or not
    function getDynamicTooltipContent(searchString, baseTooltip) {
        var Q = window.dendryUI && window.dendryUI.dendryEngine && window.dendryUI.dendryEngine.state ? 
                window.dendryUI.dendryEngine.state.qualities : null;
        
        if (!Q) return baseTooltip.explanationText;
        
        if (searchString === 'SLPP' && Q.slpp_relation !== undefined) {
            var relationText = getRelationshipText(Q.slpp_relation);
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }
        
        if (searchString === 'SLMP' && Q.slmp_relation !== undefined) {
            var relationText = getRelationshipText(Q.slmp_relation);
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }
      
        if (searchString === 'UNP' && Q.unp_relation !== undefined) {
            var relationText = getRelationshipText(Q.unp_relation);
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }
        
        if (searchString === 'TULF' && Q.tulf_relation !== undefined) {
            var relationText = getRelationshipText(Q.tulf_relation);
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }
        
        if (searchString === 'PFLT' && Q.pflt_relation !== undefined) {
            var relationText = getRelationshipText(Q.pflt_relation);
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }
        
        if (searchString === 'ACTC' && Q.actc_relation !== undefined) {
            var relationText = getRelationshipText(Q.actc_relation);
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }
        
        if (searchString === 'EROS' && Q.eros_relation !== undefined) {
            var relationText = getRelationshipText(Q.eros_relation);
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }
        
        if (searchString === 'DPLF' && Q.dplf_relation !== undefined) {
            var relationText = getRelationshipText(Q.dplf_relation);
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }
        
        if (searchString === 'JVP' && Q.jvp_relation !== undefined) {
            var relationText = getRelationshipText(Q.jvp_relation);
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }
        
        if (searchString === 'NPP' && Q.npp_relation !== undefined) {
            var relationText = getRelationshipText(Q.npp_relation);
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }
        
        if (searchString === 'CPSL' && Q.cpsl_relation !== undefined) {
            var relationText = getRelationshipText(Q.cpsl_relation);
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }
        
        if (searchString === 'LSSP' && Q.lssp_relation !== undefined) {
            var relationText = getRelationshipText(Q.lssp_relation);
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }
        
        if (searchString === 'NSSP' && Q.nssp_relation !== undefined) {
            var relationText = getRelationshipText(Q.nssp_relation);
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }
        
        if (searchString === 'MEP' && Q.mep_relation !== undefined) {
            var relationText = getRelationshipText(Q.mep_relation);
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }
        
        if (searchString === 'CWC' && Q.cwc_relation !== undefined) {
            var relationText = getRelationshipText(Q.cwc_relation);
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }
        
        if (searchString === 'SLMC' && Q.slmc_relation !== undefined) {
            var relationText = getRelationshipText(Q.slmc_relation);
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }

        if (searchString === 'JSS' && Q.jss_strength !== undefined) {
            var strength = Q.jss_strength ? Q.jss_strength.toFixed(1) : '0';
            var militancy = getMilitancyText(Q.jss_militancy);
            return baseTooltip.explanationText + '<br>Strength: ' + strength + 'k<br>Militarization: ' + militancy;
        }
     
        if (searchString === 'LTTE' && Q.ltte_strength !== undefined) {
            var strength = Q.ltte_strength ? Q.ltte_strength.toFixed(1) : '0';
            var militancy = getMilitancyText(Q.ltte_militancy);
            return baseTooltip.explanationText + '<br>Strength: ' + strength + 'k<br>Militarization: ' + militancy;
        }
        
        if (searchString === 'TELO' && Q.telo_strength !== undefined) {
            var strength = Q.telo_strength ? Q.telo_strength.toFixed(1) : '0';
            var militancy = getMilitancyText(Q.telo_militancy);
            return baseTooltip.explanationText + '<br>Strength: ' + strength + 'k<br>Militarization: ' + militancy;
        }
        
        if (searchString === 'PLOTE' && Q.plote_strength !== undefined) {
            var strength = Q.plote_strength ? Q.plote_strength.toFixed(1) : '0';
            var militancy = getMilitancyText(Q.plote_militancy);
            return baseTooltip.explanationText + '<br>Strength: ' + strength + 'k<br>Militarization: ' + militancy;
        }
        
        if (searchString === 'EPRLF' && Q.eprlf_strength !== undefined) {
            var strength = Q.eprlf_strength ? Q.eprlf_strength.toFixed(1) : '0';
            var militancy = getMilitancyText(Q.eprlf_militancy);
            return baseTooltip.explanationText + '<br>Strength: ' + strength + 'k<br>Militarization: ' + militancy;
        }
        
        if (searchString === 'Sri Lanka Armed Forces' && Q.slaf_strength !== undefined) {
            var strength = Q.slaf_strength ? Q.slaf_strength : '0';
            var morale = getLoyaltyText(Q.slaf_morale);
            return baseTooltip.explanationText + '<br>Strength: ' + strength + 'k<br>Morale: ' + morale;
        }
        
        if (searchString === 'Sri Lanka Police' && Q.slp_strength !== undefined) {
            var strength = Q.slp_strength ? Q.slp_strength : '0';
            var morale = getLoyaltyText(Q.slp_morale);
            return baseTooltip.explanationText + '<br>Strength: ' + strength + 'k<br>Morale: ' + morale;
        }
        
        if (searchString === 'Civil Security' && Q.homeg_civilsec_strength !== undefined) {
            var strength = Q.homeg_civilsec_strength ? Q.homeg_civilsec_strength : '0';
            var morale = getLoyaltyText(Q.homeg_civilsec_morale);
            return baseTooltip.explanationText + '<br>Strength: ' + strength + 'k<br>Morale: ' + morale;
        }
        
        if (searchString === 'Home Guard' && Q.homeg_civilsec_strength !== undefined) {
            var strength = Q.homeg_civilsec_strength ? Q.homeg_civilsec_strength : '0';
            var morale = getLoyaltyText(Q.homeg_civilsec_morale);
            return baseTooltip.explanationText + '<br>Strength: ' + strength + 'k<br>Morale: ' + morale;
        }
        
        return baseTooltip.explanationText;
    }
  
    function applyWholesome(str) {
        const allWords = new Set([
            ...tooltipList.map(t => t.searchString),
            ...colourList.map(c => c.word)
        ]);

        const regex = new RegExp(`\\b(${[...allWords].join('|')})\\b`, 'g');

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
                    return `<span class='mytooltip' style='${style}'>${innerText}<span  class='mytooltiptext'>${tooltipContent}</span></span>`;
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
      $('#qualities').append(dendryUI.contentToHTML.convert(displayContent));
  };

  window.updateSidebarRight = function() {
    $('#qualities_right').empty();
    var scene = dendryUI.game.scenes[window.statusTabRight];
    dendryUI.dendryEngine._runActions(scene.onArrival);
    var displayContent = dendryUI.dendryEngine._makeDisplayContent(scene.content, true);
    $('#qualities_right').append(dendryUI.contentToHTML.convert(displayContent));
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

  window.changeTabRight = function(newTab, tabId) {
    var tabButton = document.getElementById(tabId);
    var tabButtons = document.getElementsByClassName('tab_button');
    
    var rightSidebar = document.getElementById('stats_sidebar_right');
    var rightTabButtons = rightSidebar.getElementsByClassName('tab_button');
    for (i = 0; i < rightTabButtons.length; i++) {
        rightTabButtons[i].className = rightTabButtons[i].className.replace(' active', '');
    }
    tabButton.className += ' active';
    window.statusTabRight = newTab;
    window.updateSidebarRight();
  };
  
  window.onDisplayContent = function() {
      window.updateSidebar();
      window.updateSidebarRight();
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


  window.justLoaded = true;
  window.statusTab = "status";
  window.statusTabRight = "status_right";
  window.dendryModifyUI = main;
  console.log("Modifying stats: see dendryUI.dendryEngine.state.qualities");

  window.onload = function() {
    window.dendryUI.loadSettings({show_portraits: false});
    if (window.dendryUI.dark_mode) {
        document.body.classList.add('dark-mode');
    }
    window.pinnedCardsDescription = "Advisor cards - actions are only usable once per 6 months.";
  };

}());

// Western Province
function Colombo_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Colombo";
  window.updateSidebarRight(); 
}

function Gampaha_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Gampaha";
  window.updateSidebarRight(); 
}

function Kalutara_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Kalutara";
  window.updateSidebarRight(); 
}

// Central Province
function Kandy_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Kandy";
  window.updateSidebarRight(); 
}

function Matale_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Matale";
  window.updateSidebarRight(); 
}

function NuwaraEliya_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Nuwara Eliya";
  window.updateSidebarRight(); 
}

// Southern Province
function Galle_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Galle";
  window.updateSidebarRight(); 
}

function Matara_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Matara";
  window.updateSidebarRight(); 
}

function Hambantota_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Hambantota";
  window.updateSidebarRight(); 
}

// Northern Province
function Jaffna_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Jaffna";
  window.updateSidebarRight(); 
}

function Kilinochchi_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Kilinochchi";
  window.updateSidebarRight(); 
}

function Mannar_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Mannar";
  window.updateSidebarRight(); 
}

function Mullaitivu_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Mullaitivu";
  window.updateSidebarRight(); 
}

function Vavuniya_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Vavuniya";
  window.updateSidebarRight(); 
}

// Eastern Province
function Batticaloa_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Batticaloa";
  window.updateSidebarRight(); 
}

function Ampara_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Ampara";
  window.updateSidebarRight(); 
}

function Trincomalee_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Trincomalee";
  window.updateSidebarRight(); 
}

// North Western Province
function Kurunegala_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Kurunegala";
  window.updateSidebarRight(); 
}

function Puttalam_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Puttalam";
  window.updateSidebarRight(); 
}

// North Central Province
function Anuradhapura_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Anuradhapura";
  window.updateSidebarRight(); 
}

function Polonnaruwa_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Polonnaruwa";
  window.updateSidebarRight(); 
}

// Uva Province
function Badulla_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Badulla";
  window.updateSidebarRight(); 
}

function Monaragala_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Monaragala";
  window.updateSidebarRight(); 
}

// Sabaragamuwa Province
function Ratnapura_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Ratnapura";
  window.updateSidebarRight(); 
}

function Kegalle_info() {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  Q.district_name = "Kegalle";
  window.updateSidebarRight(); 
}

document.addEventListener('mousemove', e => {
    document.querySelectorAll('.mytooltiptext').forEach(el => {
        el.style.setProperty('--mouse-x', e.clientX + 'px');
        el.style.setProperty('--mouse-y', e.clientY + 'px');
    });
});


