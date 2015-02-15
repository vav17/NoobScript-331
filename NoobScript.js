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
    console.log("NoobScript-331 Imported!");
    setTimeout(function(){API.sendChat("/emotes https://fungustime.pw/tastyplug/emotes/json/emotes.json");},1000)
    setTimeout(function(){API.sendChat("/emotes https://dl.dropboxusercontent.com/s/e59a3abu8j02sqw/Nightcore-331Emotes.json");},1000)
    setTimeout(function(){API.sendChat("/emotes https://rawgit.com/vav17/NoobScript-331/master/Emotes.json");},1000)
    $('<link rel="stylesheet" href="https://rawgit.com/vav17/NoobScript-331/master/Styles.css" type="text/css">').appendTo("head")
    $('<script src="https://rawgit.com/vav17/NoobScript-331/master/JQuery.js"></script>').appendTo("head")
    $('<div id="Intro"><span class="rainbow">Running NoobScript V2.7!</span></div>').appendTo("#chat-messages")
    $('<div id="Stat"></div>').appendTo("#app")
    document.getElementById('Stat').innerHTML = "<p>Messages Sent: </p>"+localStorage.getItem("msgSent") +"<p>Characters:</p>" +localStorage.getItem("msglength") + "<p>Name Mentioned:</p>" + localStorage.getItem("nameSaid") + "<p>Loli Counter: </p>" + localStorage.getItem("lolicounter")
    $('#vote').append('<img id="copysong" src="http://i.imgur.com/ThOy4K5.png">');
    $('#copysong').click(function(){copySong();})
    /*$('#autoWoot').click(function autoWootChecker() {
        if (autoWootSet === 0){
            $('<div class="main">AutoWoot: On</div>').appendTo("#chat-messages")
            $('#woot').click();
            autoWootSet = 1;
        }
        else if (autoWootSet === 1){
            $('<div class="main">AutoWoot: Off</div>').appendTo("#chat-messages")
            autoWootSet = 0;
        }
    })*/
    
    CT = ["BOW TO US"];
    EmoteList = ["twerk", "SNM", "SnakedMusique", "CarltonDance", "Fireworks", "Headbang", "HighShere", "rspin", "jenny", "totoro", "amaze", "amazegif", "kawaii", "spamgif", "banned", "stitchbra", "stitchglasses", "rainbowllama", "dorito", "DNN", "dotaaxerage", "dotachicken", "dotahorse", "dotaaxecry", "nat", "crikawaii", "pug", "noice", "cute", "loli", "suchfan", "squid", "hi", "lick", "pets", "chickendance", "pingu", "flipstable", "lennygif", "firelenny", "miku", "nyannyan", "lolirekt", "NSLogo", "NO"];
    CSS = ["#Stat", "#copysong", ".main", "#Intro", "#autoWoot", "#foot"]
    autoWootSet = 0;
    skipTestVar = 1;
    loadSettings();

    
    API.on(API.CHAT_COMMAND, commands);
    function commands(data) {
        this.data = data;
        switch(data){
            case "/cmds":
                API.chatLog("Command List Comming Soon",true);
            break;
            
            case "/credits":
                $('<div style ="font-size: 12pt; font-family: Lucida Console; text-align: center"><span>Made By <a href="https://www.youtube.com/channel/UCbb-SEWOIg1fBo6LZCK5CBg" target="_blank">donvoo</a> & <a href="https://www.youtube.com/user/SnakedMusique" target="_blank">SnakedMusique</a></span></div>').appendTo("#chat-messages");
            break;
            
            case "/NSkill":
                API.chatLog("Halting NS",true);
                removeCSS();
                APITurnOff();
                noobScript = null;
            break;
            
            case "/NSreload":
                console.log("NSMain: reloading");
                API.chatLog("Reloading NoobScript-331",true);
                removeCSS();
                APITurnOff();
                noobScript = null;
            break;
            
            case "/copysong":
                copySong();
            break;
            
            case "/stats":
                API.chatLog("Times Your Name Has Been Mentioned: "+localStorage.getItem("nameSaid")+" |Messages You Have Sent: "+localStorage.getItem("msgSent")+" | Message Characters: "+localStorage.getItem("msglength"),1);
            break;

            case "/NSaddemote":
                addEmote(data);
            break;

            case "/resetstats":
                localStorage.setItem("msglength",0)
                localStorage.setItem("msgSent",0)
                localStorage.setItem("nameSaid",0)
             localStorage.setItem("lolicounter",0)
            break;

            case "/hidecounter":
                $("#Stat").toggle("explode");
            break;
        }
    }
    $('head').append($('<audio id="DONVOO" src="http://puu.sh/6CVzc.wav" />'));
    $('head').append($('<audio id="KAMI" src="http://k007.kiwi6.com/hotlink/j4qk58007e/smobyp.mp3" />'));
    $('head').append($('<audio id="SUGOI" src="http://vav17.com/wp-content/uploads/SUGOI.wav" />'));
    $('head').append($('<audio id="WATERDRIP" src="http://vav17.com/wp-content/uploads/WaterDrip.mp3" />'));
    //Chat Triggers
    API.on(API.CHAT, chatKey);
    function chatKey(keyData) {
        if (keyData.message == CT[0]) {
            if (keyData.un === "donvoo" || keyData.un === "SnakedMusique"){
                API.chatLog("/me *Bows*",1);
            }
        }
        if (/snake/i.test(keyData.message) && API.getUser().id === 4251764) {
           $("#WATERDRIP")[0].play();
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
        if (/EC/i.test(keyData.message) && API.getUser().id === 3816188) {
            
            $("#DONVOO")[0].play();
        }
        if (keyData.message.slice(0,API.getUser().username.length+1) === "@"+API.getUser().username) {
            if (localStorage.nameSaid){
                localStorage.nameSaid = parseInt(localStorage.nameSaid) + 1
                document.getElementById('Stat').innerHTML = "<p>Messages Sent: </p>"+localStorage.getItem("msgSent") +"<p>Characters:</p>" +localStorage.getItem("msglength") + "<p>Name Mentioned:</p>" + localStorage.getItem("nameSaid") + "<p>Loli Counter: </p>" + localStorage.getItem("lolicounter")
            }
            else {localStorage.setItem("nameSaid", 1)}
            if (localStorage.nameSaid === null){
                localStorage.nameSaid = 0;
            }
        }
        if (keyData.un === API.getUser().username){
            if (localStorage.msgSent){
                localStorage.msgSent = parseInt(localStorage.msgSent) + 1
                document.getElementById('Stat').innerHTML = "<p>Messages Sent: </p>"+localStorage.getItem("msgSent") +"<p>Characters:</p>" +localStorage.getItem("msglength") + "<p>Name Mentioned:</p>" + localStorage.getItem("nameSaid") + "<p>Loli Counter: </p>" + localStorage.getItem("lolicounter")
            }
            else {localStorage.setItem("msgSent", 1)}
            if (localStorage.msgSent === null){
                localStorage.msgSent = 0;
            }
        }
        if (keyData.un === API.getUser().username){
            if (localStorage.msglength){
                localStorage.msglength = parseInt(localStorage.msglength) + keyData.message.length
                document.getElementById('Stat').innerHTML = "<p>Messages Sent: </p>"+localStorage.getItem("msgSent") +"<p>Characters:</p>" +localStorage.getItem("msglength") + "<p>Name Mentioned:</p>" + localStorage.getItem("nameSaid") + "<p>Loli Counter: </p>" + localStorage.getItem("lolicounter")
            }
            else {localStorage.setItem("msglength", 1)}
            if (localStorage.msglength === null){
                localStorage.msglength = 0;
            }
        }
        if (/loli/i.test(keyData.message)) {
            if(keyData.type === "message"){
                if (localStorage.lolicounter){
                localStorage.lolicounter = parseInt(localStorage.lolicounter) + 1
                document.getElementById('Stat').innerHTML = "<p>Messages Sent: </p>"+localStorage.getItem("msgSent") +"<p>Characters:</p>" +localStorage.getItem("msglength") + "<p>Name Mentioned:</p>" + localStorage.getItem("nameSaid") + "<p>Loli Counter: </p>" + localStorage.getItem("lolicounter")
                }
                else {localStorage.setItem("lolicounter", 1)}
                if (localStorage.lolicounter === null){
                localStorage.lolicounter = 0;
                }
            }   
        }
    }

    function removeCSS(){
        for(var i = 0;i < CSS.length; i++){
            $(CSS[i]).remove();
            console.log("Removing: " + CSS[i]);
        };
    };

    function copySong() {
        var cid = API.getMedia().cid;
        var author = API.getMedia().author;
        var title = API.getMedia().title;
        window.prompt("Song Information:", author + " - " + title + " // " + "https://www.youtube.com/watch?v=" + cid);
    };

    API.on(API.SCORE_UPDATE, skipTest);
    function skipTest(score){
        staff = API.getStaff();
        currentPPL = API.getUsers().length;
        manPlusVote = 0;
        var maxMeh = Math.floor((currentPPL - 100) * 0.1);
        if(score.negative >= maxMeh){
            if(maxMeh > score.grabs){
                if (skipTestVar === 1){
                    skipTestVar = 0 
                    API.chatLog("This song exceeds the max amount of mehs, and so it should be skipped",true);
                    $("#WATERDRIP")[0].play();
                }
            }
        }
        for (var i = 0; i < staff.length; i++) {
            if (staff[i].role > 2) {
                if (staff[i].vote === -1) {
                    manPlusVote++;
                    console.log("Manager's mehs amount: " + manPlusVote);
                    if (manPlusVote > 4) {
                        if (skipTestVar === 1){
                            skipTestVar = 0                          
                            API.chatLog("this song was Meh'd by more that 4 managers or above, and so it should be skipped!",true);
                            $("#WATERDRIP")[0].play();
                        }
                    }
                }
            }
        }
    };

    function getId(username) {
        username = username.replace("@", "");
        var users = API.getUsers();
        for (var i = 0; i < users.length; i++) {
            if (username === users[i].username) {
                return users[i].id;
            }
        }
    }


    API.on(API.ADVANCE, getYTData);
    function getYTData(){
        var media = API.getMedia();
        var YTData;
        $.getJSON('https://gdata.youtube.com/feeds/api/videos/' + media.cid + '?v=2&alt=jsonc',function(data,status,xhr){
        YTData = data.data;
        bannedSongAuthors(YTData);
        });
    }

    function bannedSongAuthors(YTdata){
        this.YTdata = YTdata;
        return YTdata;
    }

    function newTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }
    API.on(API.ADVANCE, autoWootDoer);
    function autoWootDoer(AWdata){
        skipTestVar = 1
        if (autoWootSet === 1){
            setTimeout(function(){$('#woot').click();},2000)
        }
    }

    function addEmote(data){
        this.data = data;
        if(data[1] === help){
            API.chatLog("Use: /addemote name width height URL",true);
        }else{
            var emote = "},'" + data[1] + "': {'height': '" + data[3] + "px','url': '" + data[4] + "','width': '" + data[2] + "px'}}"
            API.chatLog(emote);
            console.log(emote);
            window.prompt("New chat Image:",emote);
        }
    }

    API.on(API.CHAT, historyKey);
    function historyKey(historyData){
            document.addEventListener('keydown', function (evt) {
            if (evt.keyCode === 38) {
                 document.getElementById("chat-input-field").value=lastMessage;
            } 
            });
            document.addEventListener('keyup', function (evt) {
                if ($("#chat-input-field").is(":focus")) {
                    if(evt.keyCode === 13 || evt.keyCode === 38 || evt.keyCode === 17 || evt.keyCode === 18 || evt.keyCode === 19 || evt.keyCode === 27 || evt.keyCode === 33 || evt.keyCode === 34 || evt.keyCode === 35 || evt.keyCode === 36 || evt.keyCode === 37 || evt.keyCode === 39 || evt.keyCode === 40 || evt.keyCode === 45 || evt.keyCode === 46 || evt.keyCode === 91 || evt.keyCode === 92 || evt.keyCode === 93 || evt.keyCode === 112 || evt.keyCode === 113 || evt.keyCode === 114 || evt.keyCode === 115 || evt.keyCode === 116 || evt.keyCode === 117 || evt.keyCode === 118 || evt.keyCode === 119 || evt.keyCode === 120 || evt.keyCode === 121 || evt.keyCode === 122 || evt.keyCode === 123 || evt.keyCode === 144 || evt.keyCode === 145 || evt.keyCode === 16 || evt.keyCode === 20) {
                        keypressedandstuff = 1
                    }
                    else{
                        lastMessage = document.getElementById("chat-input-field").value
                    }
                }   
            });

    }

    function RAINBOWZ(data,interval,type){
        var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        if(rainbowvar === true){
            $(data).animate({type:hue},interval);
            RAINBOWZ(data, interval, type);
        };
    };


    API.on(API.CHAT, rankForChat);
    function rankForChat(data){
    var names = document.getElementsByClassName("un clickable")
        for (var i = 0; i < names.length; i++){
            //Dev Rank
            if (names[i].innerHTML === 'donvoo' || names[i].innerHTML === 'SnakedMusique'){
                names[i].innerHTML = names[i].innerHTML+' [NS DEV]'
            }
            //Loli Rank
            if (names[i].innerHTML === 'DaisytjuhhPB' || names[i].innerHTML === 'Nee-chan' || names[i].innerHTML === 'SushiNatilie'){
                names[i].innerHTML = names[i].innerHTML+' [NS Loli]'
            }
        }
    }  

    function APITurnOff(){
        API.off(API.CHAT_COMMAND, commands);
        API.off(API.CHAT, chatKey);
        API.off(API.SCORE_UPDATE, skipTest);
        API.off(API.ADVANCE, getYTData);
        API.off(API.ADVANCE, autoWootDoer);
        API.off(API.CHAT, historyKey);
        API.off(API.CHAT, rankForChat);
    }

    function loadSettings(){
    NSsettings = {
        CopySong: true,
        Counter: true,
        ChatColors: true
    };
    if (localStorage.getItem("NSSET")){
        console.log("Settings Loaded!")
    } else {
        localStorage.setItem("NSSET", JSON.stringify(NSsettings))
        }
        NSLSS = JSON.parse(localStorage.getItem("NSSET")); 
    }

    function saveSettings(){
    localStorage.setItem("NSSET", JSON.stringify(NSLSS))
    }

    togglers = {
        toggleCopySong: function(){
            $("#copysong").toggle("explode");
            saveSettings();
        },
        toggleCounters: function(){
            $("#Stat").toggle("explode");
            saveSettings();
        },
        toggleChatColors: function(){
            if(NSLSS.ChatColors === false){
                $('#cssstaffcolors').remove();
            }else{
               $('head').append('<link id="cssstaffcolors" rel="stylesheet"type="text/css"href="https://dl.dropboxusercontent.com/s/usedz76mi8km5rq/Origem%20Colors.css">');
            };
            saveSettings();
            }   
    }
}
