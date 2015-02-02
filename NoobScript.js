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

    //sounds
    $('head').append($('<audio id="SUGOI" src="http://vav17.com/wp-content/uploads/SUGOI.wav" />'));
    $('head').append($('<audio id="KAMI" src="http://k007.kiwi6.com/hotlink/j4qk58007e/smobyp.mp3" />'));
    $('head').append($('<audio id="DONVOO" src="http://puu.sh/6CVzc.wav" />'));
    //onStartup
    console.log("NoobScript-331 Imported!");
    setTimeout(function(){API.sendChat("/emotes https://fungustime.pw/tastyplug/emotes/json/emotes.json");},1000)
    setTimeout(function(){API.sendChat("/emotes https://dl.dropboxusercontent.com/s/e59a3abu8j02sqw/Nightcore-331Emotes.json");},1000)
    setTimeout(function(){API.sendChat("/emotes https://rawgit.com/vav17/NoobScript-331/master/Emotes.json");},1000)

    $('<link rel="stylesheet" href="https://rawgit.com/vav17/NoobScript-331/master/Styles.css" type="text/css">').appendTo("head")
    $('<div id="Intro" style ="color: #FF6600; border: 0px solid #D3D3D3; font-size: 16pt; font-family: Lucida Console; text-align: center">Running NoobScript V1.2!</div>').appendTo("#chat-messages")
    $('<img id="foot" src="http://i.imgur.com/4Ck5ULB.png" style ="height: 30px; width: 30px; cursor: pointer"/>').appendTo("#app")
    $('#foot').click(function() {
        copySong();
    })
    Devs = ["donvoo", "SnakedMusique"];
    CT = ["BOW TO US"];
    CMDS = ["cmds", "credits", "NSkill", "raw", "NSreload", "banned", "api", "noskip", "YES", "dafaq", "EHD", "sowwy", "copysong", "hahano"];

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
            API.off();
            noobScript = null;
            //raw
        } else if (data == "/" + CMDS[3]) {
            newTab("https://rawgit.com/vav17/NoobScript-331/master/NoobScript.js");
            //NSreload
        } else if (data == "/" + CMDS[4]) {
            console.log("NSMain: reloading");
            API.chatLog("Reloading NoobScript-331",true);
            API.off();
            noobScript = null;
            //refreshEmotes
        } else if (data == "/refreshemotes"){
            API.sendChat("/reload");
            API.sendChat("/NSreload")
            setTimeout(function(){API.sendChat("/emotes https://dl.dropboxusercontent.com/s/e59a3abu8j02sqw/Nightcore-331Emotes.json")}, 7500);
            API.sendChat("/emotes https://fungustime.pw/tastyplug/emotes/json/emotes.json");
            setTimeout(function(){API.sendChat("/emotes https://dl.dropboxusercontent.com/s/e59a3abu8j02sqw/Nightcore-331Emotes.json"); API.sendChat("/addemotes https://rawgit.com/vav17/NoobScript-331/master/Emotes.json");}, 7500);
            //banned
        } else if (data == "/" + CMDS[5]) {
            API.sendChat("http://vav17.com/wp-content/uploads/2014/12/Good-luck-being-banned.gif");
            //API
        } else if (data == "/" + CMDS[6]) {
            newTab("http://support.plug.dj/hc/en-us/categories/200123567-API");
            //noskip
        } else if (data == "/" + CMDS[7]) {
            API.sendChat("http://vav17.com/wp-content/uploads/No-skip.png");
            //YES
        } else if (data == "/" + CMDS[8]) {
            API.sendChat("http://vav17.com/wp-content/uploads/YES.gif");
            //dafaq
        } else if (data == "/" + CMDS[9]) {
            API.sendChat("http://vav17.com/wp-content/uploads/Dafaq.png");
            //EHD
        } else if (data == "/" + CMDS[10]) {
            API.sendChat("http://vav17.com/wp-content/uploads/Extreme_Head_Desk.gif");
            //sowwy
        } else if (data == "/" + CMDS[11]) {
            API.sendChat("http://vav17.com/wp-content/uploads/sowwy.jpg");
            //copysong
        } else if (data == "/" + CMDS[12]) {
            copySong();
            //hahano
        } else if (data == "/" + CMDS[13]) {
            API.sendChat("http://vav17.com/wp-content/uploads/hahano.jpg")
        }
    }

    //Chat Triggers
    API.on(API.CHAT, chatKey);
    function chatKey(keyData) {
        if (keyData.message == CT[0]) {
            if (keyData.un === "donvoo" || keyData.un === "SnakedMusique"){
                //API.sendChat("/me *Bows*");
                API.chatLog("/me *Bows*",1);
            }
        }
        if (/snake/i.test(keyData.message) && API.getUser().id === 4251764) {
            $("#SUGOI")[0].play();
        }
        if (/Monkey D kami|Kami|monkey/i.test(keyData.message) && API.getUser().id === 3199479) {
            $("#KAMI")[0].play();
        }
        if (/donv/i.test(keyData.message) && API.getUser().id === 4537120) {
            $("#DONVOO")[0].play();
        }
        if (/Yolo/i.test(keyData.message) && API.getUser().id === 3774105) {
            $("#DONVOO")[0].play();
        }
    }

    function copySong() {
        var cid = API.getMedia().cid;
        var author = API.getMedia().author;
        var title = API.getMedia().title;
        window.prompt("Song Information:", author + " - " + title + " // " + "https://www.youtube.com/watch?v=" + cid);
    }

    function newTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }
}
//https://rawgit.com/vav17/NoobScript-331/master/NoobScript.js
//javascript:(function(){$.getScript('https://rawgit.com/vav17/NoobScript-331/master/NoobScript.js');}());
//javascript:(function(){$.getScript('https://raw.githubusercontent.com/vav17/NoobScript-331/master/NoobScriptLoader.js');}());
