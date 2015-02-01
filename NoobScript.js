//Script Created by Snaked and donvoo
function startScript() {
    if (typeof API !== "object" || !API.enabled) {
        setTimeout(startScript, 200);
    } else {
        noobScript();
    }
}
setTimeout(startScript, 200);

var noobScript = function() {
    //onStartup
    $('<link type="text/css" rel="Styles" href="https://rawgit.com/vav17/NoobScript-331/master/Styles.css"/>').appendTo("#app")
    $('<div id="Intro" style ="color: #4169E1; border: 1px solid #D3D3D3; font-size: 14pt; font-family: Lucida Console; text-align: center">Running NoobScript V1.2!</div>').appendTo("#chat-messages")

    $('<a id="Madeby" href="http://sd.keepcalm-o-matic.co.uk/i/we-are-sexy-people.png" target="_blank">Running NoobScript</a></div>').appendTo("#app")
    //$('#Madyby').css('position', 'absolute')
    //$('#Madyby').css('top', 550);
    //('#Madyby').css('left', 0)
    CT = ["BOW TO US"];
    CMDS = ["cmds", "credits", "NSkill"];
    //Chat commands ^
    API.on(API.CHAT_COMMAND, commands);

    function commands(data) {
        this.data = data;
        //cmds
        if (data === "/" + CMDS[0]) {
            API.chatLog("Commands: " + CMDS.toString(), 1)
            //credits
        } else if (data === "/" + CMDS[1]) {
            $('<div class="BasicText" style ="color: #4169E1; border: 1px solid #D3D3D3; font-size: 12pt; font-family: Lucida Console; text-align: center">Made By donvoo & SnakedMusique</div>').appendTo("#chat-messages")
            //kill
        } else if (data === "/" + CMDS[2]) {
            API.chatLog("OH GOD WHY WOULD YOU DO THAT!?!?!");
          API.off()
            noobScript = null
        }
    }

    //Chat Triggers
    API.on(API.CHAT, chatKey);
    function chatKey(keyData) {
        if (keyData.message == CT[0]) {
            if (keyData.un === "donvoo" || keyData.un === "SnakedMusique"){
                API.sendChat("*Bows*");
            }
        }
    }
}

/*
API.on(API.CHAT_COMMAND, function NSkill(data){
    if (data === "/" + CMDS[2]) {
            API.chatLog("OH GOD WHY WOULD YOU DO THAT!?!?!");
            throw new Error("Killing NoobScript-331");
        }
    });
*/
//https://rawgit.com/vav17/NoobScript-331/master/NoobScript.js
//javascript:(function(){$.getScript('https://rawgit.com/vav17/NoobScript-331/master/NoobScript.js');}());