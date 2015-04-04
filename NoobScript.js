//NoobScript by donvoo & SnakedMusique is licensed under a Creative Commons Attribution-NoDerivatives 4.0 International License.
function startScript() {
    if (typeof API !== "object" || !API.enabled) {
        //setTimeout(startScript, 200);
        $(document).ready(startScript());
    } else {
        noobScript();
    }
}

setTimeout(startScript, 200);

var noobScript = function() {    
    //onStartup
    console.log("NoobScript-331 Imported!");
    setTimeout(function(){API.sendChat("/emotes https://fungustime.pw/tastyplug/emotes/json/emotes.json");},1000);
    setTimeout(function(){API.sendChat("/emotes https://rawgit.com/vav17/NoobScript-331/master/Emotes.json");},1000);
    $('<link rel="stylesheet" href="https://rawgit.com/vav17/NoobScript-331/master/Styles.css" type="text/css">').appendTo("head");
    $('<script src="https://rawgit.com/vav17/NoobScript-331/master/JQuery.js"></script>').appendTo("head");
    NSCL('icon icon-NS','red', '<span class="rainbow" style="position: relative;right: -43px; bottom: -5px;">Running NoobScript-331!</span>');
    $('<div id="Stat"></div>').appendTo("#app");
    //$('#vote').append('<img id="copysong" src="http://i.imgur.com/ThOy4K5.png">');
    //$('#copysong').click(function(){copySong();});
    $('#chitoge').click(function(){newTab("http://animeshow.tv/Nisekoi/");});
    $('#ond').click(function(){newTab("http://animeshow.tv/Nisekoi/");});
    //$('#playback .background img').attr('src','http://i.imgur.com/x1YjQzm.png');

    $('#volume').mouseenter(function(){
            $('#volume').bind('mousewheel',function(e){
                if(e.originalEvent.wheelDelta /120 > 0) {
                    //API.chatLog('Scrolling Up');
                    API.setVolume(API.getVolume() + 1);
                }
                else{
                    //API.chatLog('Scrolling Down');
                    API.setVolume(API.getVolume() - 1);
                }
            });
    });

    $('#volume').mouseleave(function(){
            $('#volume').unbind('mousewheel');
    });
    
    CT = ["BOW TO US"];
    CCBItems = ["/NSkill", "/NSreload", "/NSreset"];
    EmoteList = ["twerk", "SNM", "SnakedMusique", "CarltonDance", "Fireworks", "Headbang", "HighShere", "rspin", "jenny", "totoro", "amaze", "amazegif", "kawaii", "spamgif", "banned", "stitchbra", "stitchglasses", "rainbowllama", "dorito", "DNN", "dotaaxerage", "dotachicken", "dotahorse", "dotaaxecry", "nat", "crikawaii", "pug", "noice", "cute", "loli", "suchfan", "squid", "hi", "lick", "pets", "chickendance", "pingu", "flipstable", "lennygif", "firelenny", "miku", "nyannyan", "lolirekt", "NSLogo", "NO"];
    CSS = ["#Stat", "#copysong", ".main", "#Intro", "#autoWoot", "#foot", "#InterfaceToggle", "#Interface", "#IFAutoWoot", "#IFChatcolors", "#IFCounters", "#IFCopysong", "#IFHideVideo", "#IFStudymode", "#IFMehs", "#IFGrabs", "#chitoge", "#ond", "IFChatCommandBox", "#InterfaceCCB", "#SecondChatToggle", "#SecondChat", "#credits"];
    NSetaNumber = 0;
    NSetaArray = [];
    NSetaLN = 0;
    NSseconds = 0;
    NSminutes = 0;
    autoWootSet = 0;
    skipTestVar = 1;
    GrabsSet = false;
    MehsSet = false;
    emoteSet = false;
    autoJoinSet = false;
    NisePos = 0;
    chat = $('#chat-messages');
    d = chat.scrollTop() > chat[0].scrollHeight - chat.height() - 28;
    NSEmotes = {};
    random = Math.floor(Math.random(100) * 6);
    document.getElementById('Stat').innerHTML = "<p>Messages Sent: </p>"+localStorage.getItem("msgSent") +"<p>Characters:</p>" +localStorage.getItem("msglength") + "<p>Name Mentioned:</p>" + localStorage.getItem("nameSaid") + "<p>Loli Counter: </p>" + localStorage.getItem("lolicounter") + "<p>ETA:</p>"+ NSminutes+":"+NSseconds;
    NSloadSettings();
    $.getScript("https://dl.dropboxusercontent.com/s/iwfau1o2ie5grpl/NewInterface.js");
    API.on(API.CHAT,emoteChat);
    function emoteChat(data){
    reg = /:([^:]*):/igm;
    messageClass = '.msg .cid-'+data.cid;
    message = $(messageClass).html();
    regmessage = reg.exec(message);
    if (emoteSet === true){
    //console.log(regmessage);
        if (regmessage !== null){
            //console.log("BISH IM NOT NULL");
            for (var i = 0; i < Object.keys(NSEmotes).length;i++){
                if (Object.keys(NSEmotes)[i].match(regmessage)){
                    //console.log('IT WOKRS');
                }
            }
                $(messageClass).html(regmessage[1].replace(regmessage[1],'<div class="custom-emote" style="background-image:url(' + NSEmotes[regmessage[1]].url + ');width:' + NSEmotes[regmessage[1]].width + ';height:' + NSEmotes[regmessage[1]].height + ';"></div>'));
                if (d) chat.scrollTop(chat[0].scrollHeight); 
        }
    }
    }

    API.on(API.CHAT_COMMAND, commands);
    function commands(data) {
        this.data = data;
        switch(data){
            case "/cmds":
                $('#chat-messages').append('<table><tr>Commands:<br>/cmds<br>/credits<br>/NSkill<br>/NSreload<br>/copysong</br>/stats<br>/NSaddemote<br>/resetstats<br>/NSreset<br>/NoobScript<br>/battle<br>/bassdrop</tr></table>');
            break;
            
            case "/credits":
                $('body').append('<div id="credits"></div>');
                $('#credits').append('<div class="CTitle">NoobScript-331</div><div class="CSep"></div><div class="CBody">Made By</div><div class="CSep"></div><div class="CBody">SnakedMusique</div><a class="CLink" href="https://www.youtube.com/user/SnakedMusique" target="_blank">YouTube</a><div class="CSep"></div><div class="CBody">&</div><div class="CSep"></div><div class="CBody">donvoo</div><a class="CLink" href="https://www.youtube.com/channel/UCbb-SEWOIg1fBo6LZCK5CBg" target="_blank">YouTube</a><div class="CSep"></div><h3 class="CInfo">Hello!<br>Thank you for using NoobScript... We thank you from the bottom of our hearts! NoobScript was created to make the joys of plug even better! We hope you enjoy our work!</h3><div class="CSep"></div><h3 class="CInfo">Things planned:<br>* Fix Emotes<br>* WebSocket<br>* Custom Overlay</h3><div class="CSep"></div><h3 class="CInfo">Please do not edit our script without our permission... <br>Because that would be like... stealing our work! We do not want that! :P</h3><div class="CSep"></div><div class="CTitle">Thank You!</div><div class="CClose">X</div>');
                $('.CClose').click(function(){$('#credits').remove();});
            break;
            
            case "/NSkill":
                API.chatLog("Halting NS",true);
                removeCSS();
                APITurnOff();
                noobScript = null;
                startScript = null;
                loader = null;
                reload = null;
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
                localStorage.setItem("msglength",0);
                localStorage.setItem("msgSent",0);
                localStorage.setItem("nameSaid",0);
             localStorage.setItem("lolicounter",0);
            break;

            case "/hidecounter":
                $("#Stat").toggle("explode");
            break;

            case "/NSreset":
                localStorage.setItem("NSSET", JSON.stringify(NSsettings));
                NSloadSettings();
            break;
            
            case "/NoobScript":
                API.sendChat("NoobScript: https://github.com/vav17/NoobScript-331/blob/master/README.md");
            break;

            case "/battle":
                P1 = prompt("Player 1:");
                P2 = prompt("Player 2:");
                if (Math.random(1) * 10 > 5 ) {
                API.sendChat("A Wild "+P1+" Appeared... "+P1+" Used o On "+P2+" ...It's Super Effective!... "+P2+" Faints!");
            }
                if (Math.random(1) * 10 < 5) {
                API.sendChat("A Wild "+P1+" Appeared... "+P1+" Used o On "+P2+" ...It's Not Very Effective!... "+P1+" Faints From Shame!");
            }   
            break;

            case "/NSBackgroundReset":
                $('.room-background').css('background','url(https://cdn.plug.dj/_/static/images/community/background.892bc86f530eb3f7a53a2cc60f0c0be481798175.jpg) no-repeat')
            break;
        }
        //For Chat With Slice
            if (this.data.slice(0,9) === '/bassdrop'){
                number = this.data.slice(9,25);
                API.sendChat("Dropping Bass In "+number+" Seconds!!!");
                setTimeout(function(){API.sendChat("Bass Dropped!!!");},JSON.parse(number)*1000);
            }
            if (this.data.slice(0,11) === '/background'){
                theURL = this.data.slice(11,252);
                $('.room-background').css('background','url('+theURL+') no-repeat')
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
        if (keyData.message.slice(0,API.getUser().username.length+1) === "@"+API.getUser().username) {
            if (localStorage.nameSaid){
                localStorage.nameSaid = parseInt(localStorage.nameSaid) + 1;
                document.getElementById('Stat').innerHTML = "<p>Messages Sent: </p>"+localStorage.getItem("msgSent") +"<p>Characters:</p>" +localStorage.getItem("msglength") + "<p>Name Mentioned:</p>" + localStorage.getItem("nameSaid") + "<p>Loli Counter: </p>" + localStorage.getItem("lolicounter") + "<p>ETA:</p>"+ NSminutes+":"+NSseconds;
            }
            else {localStorage.setItem("nameSaid", 1);}
            if (localStorage.nameSaid === null){
                localStorage.nameSaid = 0;
            }
        }
        if (keyData.un === API.getUser().username){
            if (localStorage.msgSent){
                localStorage.msgSent = parseInt(localStorage.msgSent) + 1;
                document.getElementById('Stat').innerHTML = "<p>Messages Sent: </p>"+localStorage.getItem("msgSent") +"<p>Characters:</p>" +localStorage.getItem("msglength") + "<p>Name Mentioned:</p>" + localStorage.getItem("nameSaid") + "<p>Loli Counter: </p>" + localStorage.getItem("lolicounter") + "<p>ETA:</p>"+ NSminutes+":"+NSseconds;
            }
            else {localStorage.setItem("msgSent", 1);}
            if (localStorage.msgSent === null){
                localStorage.msgSent = 0;
            }
        }
        if (keyData.un === API.getUser().username){
            if (localStorage.msglength){
                localStorage.msglength = parseInt(localStorage.msglength) + keyData.message.length;
                document.getElementById('Stat').innerHTML = "<p>Messages Sent: </p>"+localStorage.getItem("msgSent") +"<p>Characters:</p>" +localStorage.getItem("msglength") + "<p>Name Mentioned:</p>" + localStorage.getItem("nameSaid") + "<p>Loli Counter: </p>" + localStorage.getItem("lolicounter") + "<p>ETA:</p>"+ NSminutes+":"+NSseconds;
            }
            else {localStorage.setItem("msglength", 1);}
            if (localStorage.msglength === null){
                localStorage.msglength = 0;
            }
        }
        if (/loli/i.test(keyData.message)) {
            if(keyData.type === "message"){
                if (localStorage.lolicounter){
                localStorage.lolicounter = parseInt(localStorage.lolicounter) + 1;
                document.getElementById('Stat').innerHTML = "<p>Messages Sent: </p>"+localStorage.getItem("msgSent") +"<p>Characters:</p>" +localStorage.getItem("msglength") + "<p>Name Mentioned:</p>" + localStorage.getItem("nameSaid") + "<p>Loli Counter: </p>" + localStorage.getItem("lolicounter") + "<p>ETA:</p>"+ NSminutes+":"+NSseconds;
                }
                else {localStorage.setItem("lolicounter", 1);}
                if (localStorage.lolicounter === null){
                localStorage.lolicounter = 0;
                }
            }
        }
        if (keyData.message.slice(0,13) === ".NSMassRelod" && keyData.uid === 4537120 || keyData.message.slice(0,13) === ".NSMassRelod" && keyData.uid === 4251764){
            API.sendChat("/NSreload");
        }

        if (keyData.message.slice(0,7) === ".Party!" && keyData.uid === 4537120 || keyData.message.slice(0,7) === ".Party!" && keyData.uid === 4251764){
            party();
        }
        if (keyData.message.slice(0,8) === "@NSUsers" && keyData.uid === 4537120 || keyData.message.slice(0,8) === "@NSUsers" && keyData.uid === 4251764){
            $('.cm.message').last().css({color:"#A750A0"});
            $("#soundmention")[0].play();
        }
        if (keyData.message.slice(0,9) === "!RickRoll" && keyData.uid === 4537120 || keyData.message.slice(0,9) === "@NSUsers" && keyData.uid === 4251764){
            $('.cm.message').last().css({color:"#A750A0"});
            $("#soundmention")[0].play();
        }
    }

    function removeCSS(){
        for(var i = 0;i < CSS.length; i++){
            $(CSS[i]).remove();
            console.log("Removing: " + CSS[i]);
        }
        $('#playback .background img').attr('src','https://cdn.plug.dj/_/static/images/community/custom/2014winter/videoframe.9315d245fd149d1b8bc62d371a80f3664bbe348e.png')
    }

    function copySong() {
        var cid = API.getMedia().cid;
        var author = API.getMedia().author;
        var title = API.getMedia().title;
        window.prompt("Song Information:", author + " - " + title + " // " + "https://www.youtube.com/watch?v=" + cid);
    }

    API.on(API.ADVANCE,NSETA);
    function NSETA(){
        NSetaArray.push(API.getMedia().duration);
        NSetaNumber++;
        NSetaLN = NSetaLN+NSetaArray[NSetaArray.length  - 1];
        NSetaForm = JSON.parse(NSetaLN) / NSetaNumber;
        NSwaitList = API.getWaitListPosition() + 1;
        NStotalSeconds = NSetaForm * NSwaitList;
        NSminutes = Math.floor(NStotalSeconds/ 60);
        NSseconds = Math.floor(NStotalSeconds- NSminutes * 60);
        document.getElementById('Stat').innerHTML = "<p>Messages Sent: </p>"+localStorage.getItem("msgSent") +"<p>Characters:</p>" +localStorage.getItem("msglength") + "<p>Name Mentioned:</p>" + localStorage.getItem("nameSaid") + "<p>Loli Counter: </p>" + localStorage.getItem("lolicounter") + "<p>ETA:</p>"+ NSminutes+":"+NSseconds;
    }

    API.on(API.CHAT, lastMessageSent);
    function lastMessageSent(LMData){

    }

    API.on(API.SCORE_UPDATE, skipTest);
    function skipTest(score){
        staff = API.getStaff();
        currentPPL = API.getUsers().length;
        manPlusVote = 0;
        var maxMeh = Math.floor((currentPPL - 100) * 0.1) +1;
        if(score.negative >= maxMeh){
            if(maxMeh > score.grabs){
                if (skipTestVar === 1){
                    skipTestVar = 0;
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
                            skipTestVar = 0;                        
                            API.chatLog("this song was Meh'd by more that 4 managers or above, and so it should be skipped!",true);
                            $("#WATERDRIP")[0].play();
                        }
                    }
                }
            }
        }
    }

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
        SecondNSCL('bdg bdg-music04','#00cbf6', '<span class="NSUpdate">Song Ended... Score: </span>'+AWdata.lastPlay.media.title+'<span class="NSUpdate"> : W: </span>'+AWdata.lastPlay.score.positive+'<span class="NSUpdate"> G: </span>'+AWdata.lastPlay.score.grabs+'<span class="NSUpdate"> M: </span>'+AWdata.lastPlay.score.negative);
        skipTestVar = 1;
        if (autoWootSet === true){
            setTimeout(function(){$('#woot').click();},2000);
        }
        if (NisePos === 0){
            setTimeout(function(){
            $('#ond').animate({bottom: "50px"}, 1000, 'linear');
            $('#chitoge').animate({right: "5px"}, 2000, 'linear');
            $('#ond').animate({right: "-160px"}, 2000, 'linear');
            $('#ond').animate({bottom: "0px"}, 1000, 'linear');
            NisePos = 1;
            },1000);
        }
        if (NisePos === 1){
            setTimeout(function(){
            $('#chitoge').animate({bottom: "50px"}, 1000, 'linear');
            $('#chitoge').animate({right: "-205px"}, 2000, 'linear');
            $('#ond').animate({right: "40px"}, 2000, 'linear');
            $('#chitoge').animate({bottom: "0px"}, 1000, 'linear');
            NisePos = 0;
            },1000);
        }
    }

    function addEmote(data){
        this.data = data;
        if(data[1] === help){
            API.chatLog("Use: /addemote name width height URL",true);
        }else{
            var emote = "},'" + data[1] + "': {'height': '" + data[3] + "px','url': '" + data[4] + "','width': '" + data[2] + "px'}}";
            API.chatLog(emote);
            console.log(emote);
            window.prompt("New chat Image:",emote);
        }
    }

    function NSCL(icon, color, message) {
                var date = new Date(),
                    hour = date.getHours(),
                    min = date.getMinutes(),
                    pm = 'am',
                    mostrar = true,
                    format = $('#chat-timestamp-button').children(0).attr('class');
                    
                if ( format.indexOf('12') != -1){                   
                    if ( hour >= 12 ){
                        hour -= 12;
                        pm = 'pm';
                    }
                    if ( hour === 0 )
                        hour = 12;
                }
                if ( format.indexOf('24') != -1)
                    pm = '';

                if ( format.indexOf('off') != -1)
                    mostrar = false;

                if ( min < 10 )
                    min = '0' + min;
                $('#chat-messages').append('<div class="update" style="height: 35px; border-left: solid 3px ' + color + '">' + 
                                            ( icon ? '<i class="' + icon + '" style="top: 0px; left: -1px; float: left; position: relative"></i>' : '' ) +
                                            (mostrar ? '<div class="timestamp" style="display: block;"></div>' : '') +
                                            '<span class="text" style="position: relative; right: -12px; bottom: -2px; color: ' + color + '">' + message + '</span><br></div>');
                $('#chat-messages').scrollTop($('#chat-messages').prop("scrollHeight"));
    }

    function SecondNSCL(icon, color, message) {
                var date = new Date(),
                    hour = date.getHours(),
                    min = date.getMinutes(),
                    pm = 'am',
                    mostrar = true,
                    format = $('#chat-timestamp-button').children(0).attr('class');
                    
                if ( format.indexOf('12') != -1){                   
                    if ( hour >= 12 ){
                        hour -= 12;
                        pm = 'pm';
                    }
                    if ( hour == 0 )
                        hour = 12;
                }
                if ( format.indexOf('24') != -1)
                    pm = '';

                if ( format.indexOf('off') != -1)
                    mostrar = false;

                if ( min < 10 )
                    min = '0' + min;
                $('#SecondChat').append('<div class="update" style="height: 50px; border: solid 1px ' + color + '">' + 
                                            ( icon ? '<i class="' + icon + '" style="top: 0px; left: -1px; float: left; position: relative"></i>' : '' ) +
                                            (mostrar ? '<div class="timestamp" style="display: block;"></div>' : '') +
                                            '<span class="text" style="position: relative; bottom: -2px; color: ' + color + '">' + message + '</span><br></div>');
                $('#SecondChat').scrollTop($('#SecondChat').prop("scrollHeight"));
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
                        keypressedandstuff = 1;
                    }
                    else{
                        lastMessage = document.getElementById("chat-input-field").value;
                    }
                }   
            });

    }
    function party(){
        for(var i=0; i < 15;i++){
            $('body').append('<img class="party" src="http://i.imgur.com/Dj7Azzm.gif"/>');
        }
        setInterval(function(){$('.party').animate({right: '100px'},'fast'),500;});
        setInterval(function(){$('.party').animate({left: '100px'},'fast'),600;});
        setTimeout(function(){$('.party').remove();},5000);
    }

    function RAINBOWZ(data,interval,type){
        var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        if(rainbowvar === true){
            $(data).animate({type:hue},interval);
            RAINBOWZ(data, interval, type);
        }
    }
/*
    function rankedPerson(username,prefix) {
    this.username = username;
    this.prefix = prefix;
    }

    var rankedUsers = new Array();

    rankedUsers[0] = new rankedPerson("SnakedMusique", "donvoo [NS DEV]");
    rankedUsers[1] = new rankedPerson("donvoo", "SnakedMusique [NS DEV]");
    rankedUsers[2] = new rankedPerson("# ๖ۣۜEɴʏxx", "# ๖ۣۜEɴʏxx [NS GOD]");

    API.on(API.CHAT, rankForChat);
    function rankForChat(user){
        var names = document.getElementsByClassName("un clickable");
        for (var i = 0; i < names.length; i++) {
            if (names[i].innerHTML === rankedUsers[i].username) {
                names[i].innerHTML = rankedUsers[i].prefix;
            }
        }
    }
*/



    API.on(API.CHAT, rankForChat);
    function rankForChat(data){
    var names = document.getElementsByClassName("un clickable");
        for (var i = 0; i < names.length; i++){
            //Dev Rank
            if (names[i].innerHTML === 'donvoo' || names[i].innerHTML === 'SnakedMusique'){
                names[i].innerHTML = names[i].innerHTML+' [NS DEV]';
            }
            //Loli Rank
            if (names[i].innerHTML === 'DaisytjuhhPB' || names[i].innerHTML === 'Nee-chan' || names[i].innerHTML === 'Monkey D Kami' || names[i].innerHTML === 'SushiNatilie' || names[i].innerHTML === 'Sil3ntN1ght' || names[i].innerHTML === 'Slyric_' || names[i].innerHTML === 'Kaboom0' || names[i].innerHTML === 'H A R R Y' || names[i].innerHTML === 'melongrip'){
                names[i].innerHTML = names[i].innerHTML+' [NS Loli]';
            }
            //Pleb Rank
            if (names[i].innerHTML === 'ECPinoy' || names[i].innerHTML === 'Ivychan' || names[i].innerHTML === 'Kednick' || names[i].innerHTML === 'Tylerw3629'){
                names[i].innerHTML = names[i].innerHTML+' [NS Pleb]';
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
        API.off(API.GRAB_UPDATE, scoreUpdate);
        API.off(API.CHAT, lastMessageSent);
        API.off(API.WAIT_LIST_UPDATE,AutoJoinWaitlist);
        API.off(API.VOTE_UPDATE,scoreUpdateMeh);
    }

    API.on(API.WAIT_LIST_UPDATE,AutoJoinWaitlist);
    function AutoJoinWaitlist(){
            setTimeout(function(){autoJoin();},800);
    }

    function autoJoin(){
        if (autoJoinSet === true && $('#waitlist .header .title').text() === "DJ Wait List"){
            if (API.getWaitListPosition() === -1 && API.getDJ().id != API.getUser().id){
                API.djJoin();
            }
        }
    }

    API.on(API.GRAB_UPDATE, scoreUpdate);
    function scoreUpdate(data){
        SecondNSCL('bdg bdg-food04','#FF00FF', data.user.username +'<span class="NSUpdate"> Grabbed </span>'+$('#now-playing-bar #now-playing-media .bar-value').text());
        if(GrabsSet === true){
            NSCL('bdg bdg-food04','#FF00FF', data.user.username +'<span class="NSUpdate"> Grabbed </span>'+$('#now-playing-bar #now-playing-media .bar-value').text());
        }
    }

    API.on(API.VOTE_UPDATE,scoreUpdateMeh);
    function scoreUpdateMeh(mehData){
        if (mehData.vote == -1){
            SecondNSCL('icon icon-skip','red', mehData.user.username +'<span class="NSUpdate"> Used Meh! </span>');
            if (MehsSet === true){
                NSCL('icon icon-skip','red', mehData.user.username +'<span class="NSUpdate"> Used Meh! </span>');
            }
        }
    }

    function theButtonTest(){
        if (openButton === true){
            openButton = false;
            $('#InterfaceButton').css('background-color','#0A0A0A');
        }
        if (openButton === false){
            openButton = true;
            $('#chat-button').removeClass('selected');
            $('#users-button').removeClass('selected');
            $('#waitlist-button').removeClass('selected');
            $('#friends-button').removeClass('selected');
        }
    }

    function NSloadSettings(){
    NSsettings = {
        //CopySong: true,
        Counter: true,
        ChatColors: true,
        StudyMode: false,
        AutoWoot: false,
        HideVideo: false,
        AutoJoin: false,
        Grabs: false,
        Mehs: false,
        ChatCommandBox: false,
        TheEmotes: false
    };
    if (localStorage.getItem("NSSET")){
        console.log("Settings Loaded!");
    } else {
        localStorage.setItem("NSSET", JSON.stringify(NSsettings));
    }
        NSLSS = JSON.parse(localStorage.getItem("NSSET"));
        setTimeout(function(){NSTogglers.LoadInToggle();},3500) ;
    }

    function NSsaveSettings(){
    localStorage.setItem("NSSET", JSON.stringify(NSLSS));
    }

    NSTogglers = {
        /*toggleCopySong: function(){
            if(NSLSS.CopySong === true){
                NSLSS.CopySong = false;
                $('#IFCopysong .checkMark').hide();
                $("#copysong").remove();
            }else{
                NSLSS.CopySong = true;
                $('#IFCopysong .checkMark').show();
                $('#vote').append('<img id="copysong" src="http://i.imgur.com/ThOy4K5.png">');
                $('#copysong').click(function(){copySong();});
            }
            NSsaveSettings();
        },*/
        toggleCounters: function(){
            if(NSLSS.Counter === true){
                NSLSS.Counter = false;
                $('#IFCounters .checkMark').hide();
            }else{
                NSLSS.Counter = true;
                $('#IFCounters .checkMark').show();
            }
            $("#Stat").toggle("explode");
            NSsaveSettings();
        },
        toggleChatColors: function(){
            if(NSLSS.ChatColors === true){
                NSLSS.ChatColors = false;
                $('#IFChatcolors .checkMark').hide();
                $('#cssstaffcolors').remove();
            }else{
                NSLSS.ChatColors = true;
                $('head').append('<link id="cssstaffcolors" rel="stylesheet"type="text/css"href="https://dl.dropboxusercontent.com/s/usedz76mi8km5rq/Origem%20Colors.css">');
                $('#IFChatcolors .checkMark').show();
            }
            NSsaveSettings();
        },
        /*toggleStudyMode: function(){
           if(NSLSS.StudyMode === true){
                NSLSS.StudyMode = false;
                $("#studymode").remove();
                $('#IFStudymode .checkMark').hide();
            }else{
                NSLSS.StudyMode = true;
                $("#app").append('<img id="studymode" width="100%" src="http://m.memegen.com/qluj1y.jpg">');
                $('#IFStudymode .checkMark').show();
            }
            $(".app-right").toggle();
            $("#playback").toggle();
            $("#vote").toggle();
            $("#dj-button").toggle();
            $("#audience").toggle();
            $("#dj-booth").toggle();
            $("#Stat").toggle();
            NSsaveSettings();
        },*/
        toggleAutoWoot: function(){
            if(NSLSS.AutoWoot === true){
                NSLSS.AutoWoot = false;
                autoWootSet = false;
                $('#IFAutoWoot .checkMark').hide();
            }else{
                NSLSS.AutoWoot = true;
                autoWootSet = true;
                $('#woot').click();
               $('#IFAutoWoot .checkMark').show();
            }
            NSsaveSettings();
        },
        toggleHideVideo: function(){
            if(NSLSS.HideVideo === true){
                NSLSS.HideVideo = false;
                $("#playback").fadeTo('slow',1);
                $('#IFHideVideo .checkMark').hide();
            } else{
                NSLSS.HideVideo = true;
                $("#playback").fadeTo('slow',0);
                $('#IFHideVideo .checkMark').show();
            }
            NSsaveSettings();
        },
        toggleAutoJoin: function(){
            if(NSLSS.AutoJoin === true){
                NSLSS.AutoJoin = false;
                autoJoinSet = false;
                $('#IFAutoJoin .checkMark').hide();
            } else{
                API.djJoin();
                NSLSS.AutoJoin = true;
                NSsaveSettings();
                autoJoinSet = true;
                setInterval(function(){autoJoin();},1000);
                $('#IFAutoJoin .checkMark').show();
            }
            NSsaveSettings();
        },
        toggleGrabs: function(){
            if(NSLSS.Grabs === true){
                NSLSS.Grabs = false;
                GrabsSet = false;
                $('#IFGrabs .checkMark').hide();
            } else{
                NSLSS.Grabs = true;
                GrabsSet = true;
                $('#IFGrabs .checkMark').show();
            }
            NSsaveSettings();
        },
        toggleMehs: function(){
            if(NSLSS.Mehs === true){
                NSLSS.Mehs = false;
                MehsSet = false;
                $('#IFMehs .checkMark').hide();
            } else{
                NSLSS.Mehs = true;
                MehsSet = true;
                $('#IFMehs .checkMark').show();
            }
            NSsaveSettings();
        },
        toggleChatCommandBox: function(){
            if(NSLSS.ChatCommandBox === true){
                NSLSS.ChatCommandBox = false;
                $("#InterfaceCCB").slideUp();
                $('#IFChatCommandBox .checkMark').hide();
            }
            else {
                NSLSS.ChatCommandBox = true;
                $("#InterfaceCCB").slideDown();
                $('#IFChatCommandBox .checkMark').show();
            }
            NSsaveSettings();
        },
        toggleEmotes: function(){
            if(NSLSS.TheEmotes=== true){
                NSLSS.TheEmotes = false;
                emoteSet = false;
                $('#IFEmotes .checkMark').hide();
                NSEmotes = null;
            }
            else {
                NSLSS.TheEmotes = true;
                emoteSet = true;
                $('#IFEmotes .checkMark').show();
                $.ajax({
                    cache: false,
                    url: "https://rawgit.com/vav17/NoobScript-331/master/Emotes.json",
                    dataType: "json",
                    success: function(a){
                        for (var i in a) {
                            for (var j in a[i]) {
                                NSEmotes[j] = a[i][j];
                            }
                        }
                    }
                });
            }
            NSsaveSettings();
        },
        LoadInToggle: function(){
            $('#IFChatcolors .checkMark').show();
            $('#IFCounters .checkMark').show();
            //$('#IFCopysong .checkMark').show();
            $('#IFAutoWoot .checkMark').hide();
            $('#IFHideVideo .checkMark').hide();
            $('#IFAutoJoin .checkMark').hide();
            $('#IFMehs .checkMark').hide();
            $('#IFGrabs .checkMark').hide();
            $('#IFChatCommandBox .checkMark').hide();
            $('#IFEmotes .checkMark').hide();
            if (NSLSS.ChatColors === false){
                $('#cssstaffcolors').remove();
                $('#IFChatcolors .checkMark').hide();
            }
            if (NSLSS.Counter === false){
                $("#Stat").toggle("explode");
                $('#IFCounters .checkMark').hide();
            }
            /*if (NSLSS.CopySong === false){
                $("#copysong").remove();
                $('#IFCopysong .checkMark').hide();
            }*/
            if (NSLSS.AutoWoot === true){
                autoWootSet = true;
                $('#woot').click();
                $('#IFAutoWoot .checkMark').show();
            }
            if (NSLSS.HideVideo === true){
                $("#playback").fadeTo('slow',0);
                $('#IFHideVideo .checkMark').show();
            }
            if (NSLSS.AutoJoin === true){
                API.djJoin();
                autoJoinSet = true;
                NSsaveSettings();
                setInterval(function(){autoJoin();},1000);
                $('#IFAutoJoin .checkMark').show();

            }
            if (NSLSS.Grabs === true){
                GrabsSet = true;
                $('#IFGrabs .checkMark').show();
            }
            if (NSLSS.Mehs === true){
                MehsSet = true;
                $('#IFMehs .checkMark').show();
            }
            if (NSLSS.ChatCommandBox === true){
                NSLSS.ChatCommandBox = false;
                NSsaveSettings();
            }
            if (NSLSS.TheEmotes === true){
                emoteSet = true;
                $('#IFEmotes .checkMark').show();
                $.ajax({
                    cache: false,
                    url: "https://rawgit.com/vav17/NoobScript-331/master/Emotes.json",
                    dataType: "json",
                    success: function(a){
                    for (var i in a) {
                        for (var j in a[i]) {
                            NSEmotes[j] = a[i][j];
                        }
                    }
                }
                });
            }
        }
    };
};
//NoobScript by donvoo & SnakedMusique is licensed under a Creative Commons Attribution-NoDerivatives 4.0 International License.