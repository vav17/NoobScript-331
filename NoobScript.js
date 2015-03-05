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
    setTimeout(function(){API.sendChat("/emotes https://fungustime.pw/tastyplug/emotes/json/emotes.json");},1000)
    setTimeout(function(){API.sendChat("/emotes https://rawgit.com/vav17/NoobScript-331/master/Emotes.json");},1000)
    $('<link rel="stylesheet" href="https://rawgit.com/vav17/NoobScript-331/master/Styles.css" type="text/css">').appendTo("head")
    $('<script src="https://rawgit.com/vav17/NoobScript-331/master/JQuery.js"></script>').appendTo("head")
    NSCL('icon icon-NS','red', '<span class="rainbow" style="position: relative;right: -43px; bottom: -5px;">Running NoobScript-331!</span>')
    $('<div id="Stat"></div>').appendTo("#app")
    $('#vote').append('<img id="copysong" src="http://i.imgur.com/ThOy4K5.png">');
    document.getElementById('Stat').innerHTML = "<p>Messages Sent: </p>"+localStorage.getItem("msgSent") +"<p>Characters:</p>" +localStorage.getItem("msglength") + "<p>Name Mentioned:</p>" + localStorage.getItem("nameSaid") + "<p>Loli Counter: </p>" + localStorage.getItem("lolicounter")
    $('#copysong').click(function(){copySong();})
    $('#chitoge').click(function(){newTab("http://animeshow.tv/Nisekoi/")})
    $('#ond').click(function(){newTab("http://animeshow.tv/Nisekoi/")})
    
    CT = ["BOW TO US"];
    CCBItems = ["/NSkill", "/NSreload", "/NSreset"]
    EmoteList = ["twerk", "SNM", "SnakedMusique", "CarltonDance", "Fireworks", "Headbang", "HighShere", "rspin", "jenny", "totoro", "amaze", "amazegif", "kawaii", "spamgif", "banned", "stitchbra", "stitchglasses", "rainbowllama", "dorito", "DNN", "dotaaxerage", "dotachicken", "dotahorse", "dotaaxecry", "nat", "crikawaii", "pug", "noice", "cute", "loli", "suchfan", "squid", "hi", "lick", "pets", "chickendance", "pingu", "flipstable", "lennygif", "firelenny", "miku", "nyannyan", "lolirekt", "NSLogo", "NO"];
    CSS = ["#Stat", "#copysong", ".main", "#Intro", "#autoWoot", "#foot", "#InterfaceToggle", "#Interface", "#IFAutoWoot", "#IFChatcolors", "#IFCounters", "#IFCopysong", "#IFHideVideo", "#IFStudymode", "#IFMehs", "#IFGrabs", "#chitoge", "#ond", "IFChatCommandBox", "#InterfaceCCB", "#SecondChatToggle", "#SecondChat"];
    autoWootSet = 0;
    skipTestVar = 1;
    GrabsSet = false;
    MehsSet = false;
    NisePos = 0;
    random = Math.floor(Math.random(100) * 6);
    NSloadSettings();
    $.getScript("https://dl.dropboxusercontent.com/s/n487n24dnhdr40m/Interface.js");
    
    API.on(API.CHAT_COMMAND, commands);
    function commands(data) {
        this.data = data;
        switch(data){
            case "/cmds":
                NSCL('icon icon-NS','red', '<span class="rainbow" style="position: relative;right: -43px; bottom: -5px;">NoobScript Commands</span><br/><br/><span>/credits | Display credits<br/><br/>/copysong | Displays song info & link<br/><br/>/resetstats | Resets your stats<br/><br/>/stats | Display your stats<br/><br/>/hidecounter | Hides the stats bar<br/><br/>/battle [user] | Starts A Battle With [user]! |<br/><br/>/NSkill | Kills script<br/><br/>/NSreload | Restarts script<br/><br/>/NSaddemote | Adds emote to the emote list<br/><br/>/NSreset | Reset NS settings to default values<br/><br/>/NoobScript | Sends link to NoobScript webpage<br/><br/></span>');
            break;
            
            case "/credits":
                $('<div style ="font-size: 12pt; font-family: Lucida Console; text-align: center"><span>Made By <a href="https://www.youtube.com/channel/UCbb-SEWOIg1fBo6LZCK5CBg" target="_blank">donvoo</a> & <a href="https://www.youtube.com/user/SnakedMusique" target="_blank">SnakedMusique</a></span></div>').appendTo("#chat-messages");
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
                NSCL('icon icon-NS','white', "<span class='rainbow' style='position: relative;right: -43px; bottom: -5px;'>Your Status</span><br/><br/><span>Times Your Name Has Been Mentioned: "+ localStorage.getItem("nameSaid")+ "<br/><br/>Message You Have Sent: " + localStorage.getItem("msgSent") + "<br/><br/>Characters Sent:" + localStorage.getItem("msglength") + "<br/><br/></span>");
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

            case "/NSreset":
                localStorage.setItem("NSSET", JSON.stringify(NSsettings));
                NSloadSettings();
            break;
            
            case "/NoobScript":
                API.sendChat("NoobScript: https://github.com/vav17/NoobScript-331/blob/master/README.md");
            break;

            case "/battle":
            P1 = prompt("Player 1:")
            P2 = prompt("Player 2:")
            if (Math.random(1) * 10 > 5 ) {
            API.sendChat("A Wild "+P1+" Appeared... "+P1+" Used o On "+P2+" ...It's Super Effective!... "+P2+" Faints!")
            }
            if (Math.random(1) * 10 < 5) {
            API.sendChat("A Wild "+P1+" Appeared... "+P1+" Used o On "+P2+" ...It's Not Very Effective!... "+P1+" Faints From Shame!")
            }   
            break;
        };
    };
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
        if (keyData.message.slice(0,13) === ".NSMassRelod" && keyData.uid === 4537120 || keyData.message.slice(0,13) === ".NSMassRelod" && keyData.uid === 4251764){
            API.sendChat("/NSreload");
        }

        if (keyData.message.slice(0,7) === ".Party!" && keyData.uid === 4537120 || keyData.message.slice(0,7) === ".Party!" && keyData.uid === 4251764){
            party();
        }
        if (keyData.message.slice(0,8) === "@NSUsers" && keyData.uid === 4537120 || keyData.message.slice(0,8) === "@NSUsers" && keyData.uid === 4251764){
            $('.cm.message').last().css({color:"#A750A0"})
            $("#soundmention")[0].play();
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

    API.on(API.CHAT, lastMessageSent)
    function lastMessageSent(LMData){

    }

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
        if (autoWootSet === true){
            setTimeout(function(){$('#woot').click();},2000)
        }
        if (NisePos === 0){
            setTimeout(function(){
            $('#ond').animate({bottom: "50px"}, 1000, 'linear')
            $('#chitoge').animate({right: "5px"}, 2000, 'linear')
            $('#ond').animate({right: "-160px"}, 2000, 'linear')
            $('#ond').animate({bottom: "0px"}, 1000, 'linear')
            NisePos = 1;
            },1000)
        }
        if (NisePos === 1){
            setTimeout(function(){
            $('#chitoge').animate({bottom: "50px"}, 1000, 'linear')
            $('#chitoge').animate({right: "-205px"}, 2000, 'linear')
            $('#ond').animate({right: "40px"}, 2000, 'linear')
            $('#chitoge').animate({bottom: "0px"}, 1000, 'linear')
            NisePos = 0;
            },1000)
        }
    }
    
    //Meh Tracker
    API.on(API.VOTE_UPDATE, mehTracer);
    function mehTracer(obj) {
	    if(NSLSS.Mehs == true) {
	        var vote = obj.vote;
	        if(vote == -1) {
		     vote = "meh";
		     API.chatLog(obj.user.username + " Mehd the song!", true);
	        }
	    }
    }
    
    //GUID ( Get User ID From Name [XX] ) ~~ Not Used for now
    function guid(XX) {
	    var XX = XX.trim();
	    var users = API.getUsers();
	    for(var i = 0; i < users.length; i++) {
		    if(users[i].XX == XX) {
			        return users[i].id;
		        }
	        }
	    return null; // Returns null if not found
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
                    if ( hour == 0 )
                        hour = 12;
                }
                if ( format.indexOf('24') != -1)
                    pm = '';

                if ( format.indexOf('off') != -1)
                    mostrar = false;

                if ( min < 10 )
                    min = '0' + min;
                $('#chat-messages').append('<div class="update" style="border-left: solid 3px ' + color + '">' + 
                                            ( icon ? '<i class="' + icon + '" style="top: 0px; left: -1px; float: left; position: inherit"></i>' : '' ) +
                                            (mostrar ? '<div class="timestamp" style="display: block;"></div>' : '') +
                                            '<span class="text" style="right: -12px; bottom: -2px; color: ' + color + '">' + message + '</span></div>');
                $('#chat-messages').scrollTop($('#chat-messages').prop("scrollHeight"));
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
    function party(){
        for(var i=0; i < 15;i++){
            $('#app').append('<img class="party" src="http://i.imgur.com/WEs9uDR.png"/>')
        }
        setInterval(function(){$('.party').animate({right: '100px'},'fast'),500})
        setInterval(function(){$('.party').animate({left: '100px'},'fast'),600})
        setTimeout(function(){$('.party').remove()},5000)
    };

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
            if (names[i].innerHTML === 'Slyric_' || names[i].innerHTML === 'Kaboom0' || names[i].innerHTML === 'H A R R Y' || names[i].innerHTML === 'melongrip'){
                names[i].innerHTML = names[i].innerHTML+' [NS Loli]'
            }
            //Pleb Rank
            if (names[i].innerHTML === 'ECPinoy' || names[i].innerHTML === 'Ivychan' || names[i].innerHTML === 'Kednick'){
                names[i].innerHTML = names[i].innerHTML+' [NS Pleb]'
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
        API.off(API.CHAT, lastMessageSent)
        API.off(API.WAIT_LIST_UPDATE,AutoJoinWaitlist)
    }

    API.on(API.WAIT_LIST_UPDATE,AutoJoinWaitlist)
    function AutoJoinWaitlist(){
        setTimeout(function(){autoJoin()},1000)
    }

    function autoJoin(){
        if (autoJoinSet === true){
            if (API.getWaitListPosition() === -1 && API.getDJ().id != API.getUser().id){
                API.djJoin()
            }
        }
    }

    API.on(API.GRAB_UPDATE, scoreUpdate)
    function scoreUpdate(data){
        if(GrabsSet === true){
            NSCL('bdg bdg-food04','orange', data.user.username +'<span class="NSUpdate"> Grabbed </span>'+$('#now-playing-bar #now-playing-media .bar-value').text())
        }
    }

    function NSloadSettings(){
    NSsettings = {
        CopySong: true,
        Counter: true,
        ChatColors: true,
        StudyMode: false,
        AutoWoot: false,
        HideVideo: false,
        AutoJoin: false,
        Grabs: false,
        Mehs: false,
        ChatCommandBox: false,
    };
    if (localStorage.getItem("NSSET")){
        console.log("Settings Loaded!")
    } else {
        localStorage.setItem("NSSET", JSON.stringify(NSsettings))
    }
        NSLSS = JSON.parse(localStorage.getItem("NSSET"));
        setTimeout(function(){NSTogglers.LoadInToggle();},3500) 
    }

    function NSsaveSettings(){
    localStorage.setItem("NSSET", JSON.stringify(NSLSS))
    }

    NSTogglers = {
        toggleCopySong: function(){
            if(NSLSS.CopySong === true){
                NSLSS.CopySong = false;
                $("#IFCopysong").css('background-color', '#1C1F25');
                $("#copysong").remove();
            }else{
                NSLSS.CopySong = true;
                $("#IFCopysong").css('background-color', '#00cbf6');
                $('#vote').append('<img id="copysong" src="http://i.imgur.com/ThOy4K5.png">');
                $('#copysong').click(function(){copySong();})
            };
            NSsaveSettings();
        },
        toggleCounters: function(){
            if(NSLSS.Counter === true){
                NSLSS.Counter = false;
                $("#IFCounters").css('background-color', '#1C1F25');
            }else{
                NSLSS.Counter = true;
                $("#IFCounters").css('background-color', '#00cbf6');
            };
            $("#Stat").toggle("explode");
            NSsaveSettings();
        },
        toggleChatColors: function(){
            if(NSLSS.ChatColors === true){
                NSLSS.ChatColors = false;
                $("#IFChatcolors").css('background-color', '#1C1F25');
                $('#cssstaffcolors').remove();
            }else{
                NSLSS.ChatColors = true;
                $('head').append('<link id="cssstaffcolors" rel="stylesheet"type="text/css"href="https://dl.dropboxusercontent.com/s/usedz76mi8km5rq/Origem%20Colors.css">');
                $("#IFChatcolors").css('background-color', '#00cbf6');
            };
            NSsaveSettings();
        },
        toggleStudyMode: function(){
           if(NSLSS.StudyMode === true){
                NSLSS.StudyMode = false;
                $("#studymode").remove();
                $("#IFStudymode").css('background-color', '#1C1F25');
            }else{
                NSLSS.StudyMode = true;
                $("#app").append('<img id="studymode" width="100%" src="http://m.memegen.com/qluj1y.jpg">');
                $("#IFStudymode").css('background-color', '#00cbf6');
            };
            $(".app-right").toggle();
            $("#playback").toggle();
            $("#vote").toggle();
            $("#dj-button").toggle();
            $("#audience").toggle();
            $("#dj-booth").toggle();
            $("#Stat").toggle();
            NSsaveSettings();
        },
        toggleAutoWoot: function(){
            if(NSLSS.AutoWoot === true){
                NSLSS.AutoWoot = false;
                autoWootSet = false;
                $("#IFAutoWoot").css('background-color', '#1C1F25');
            }else{
                NSLSS.AutoWoot = true;
                autoWootSet = true;
                $('#woot').click();
                $("#IFAutoWoot").css('background-color', '#00cbf6');
            }
            NSsaveSettings();
        },
        toggleHideVideo: function(){
            if(NSLSS.HideVideo === true){
                NSLSS.HideVideo = false;
                $("#playback").fadeTo('slow',1);
                $("#IFHideVideo").css('background-color', '#1C1F25');
            } else{
                NSLSS.HideVideo = true;
                $("#playback").fadeTo('slow',0);
                $("#IFHideVideo").css('background-color', '#00cbf6');
            }
            NSsaveSettings();
        },
        toggleAutoJoin: function(){
            if(NSLSS.AutoJoin === true){
                NSLSS.AutoJoin = false;
                autoJoinSet = false;
                $("#IFAutoJoin").css('background-color', '#1C1F25');
            } else{
                API.djJoin()
                NSLSS.AutoJoin = true;
                NSsaveSettings();
                autoJoinSet = true;
                setInterval(function(){autoJoin();},1000);
                $("#IFAutoJoin").css('background-color', '#00cbf6');
            }
            NSsaveSettings();
        },
        toggleGrabs: function(){
            if(NSLSS.Grabs === true){
                NSLSS.Grabs = false;
                GrabsSet = false;
                $("#IFGrabs").css('background-color', '#1C1F25');
            } else{
                NSLSS.Grabs = true;
                GrabsSet = true;
                $("#IFGrabs").css('background-color', '#00cbf6');
            }
            NSsaveSettings();
        },
        toggleMehs: function(){
            if(NSLSS.Mehs === true){
                NSLSS.Mehs = false;
                MehsSet = false;
                $("#IFMehs").css('background-color', '#1C1F25');
            } else{
                NSLSS.Mehs = true;
                MehsSet = true;
                $("#IFMehs").css('background-color', '#00cbf6');
            }
            NSsaveSettings();
        },
        toggleChatCommandBox: function(){
            if(NSLSS.ChatCommandBox === true){
                NSLSS.ChatCommandBox = false;
                $("#InterfaceCCB").slideUp()
                $("#IFChatCommandBox").css('background-color', '#1C1F25');
            }
            else {
                NSLSS.ChatCommandBox = true;
                $("#InterfaceCCB").slideDown()
                $("#IFChatCommandBox").css('background-color', '#00cbf6');
            }
            NSsaveSettings();
        },
        LoadInToggle: function(){
            $("#IFStudymode").css('background-color', '#1C1F25');
            $("#IFChatcolors").css('background-color', '#00cbf6');
            $("#IFCounters").css('background-color', '#00cbf6');
            $("#IFCopysong").css('background-color', '#00cbf6');
            $("#IFAutoWoot").css('background-color', '#1C1F25');
            $("#IFHideVideo").css('background-color', '#1C1F25');
            $("#IFChatCommandBox").css('background-color', '#1C1F25');
            $("#IFMehs").css('background-color', '#1C1F25');
            $("#IFGrabs").css('background-color', '#1C1F25');
            $("#IFChatCommandBox").css('background-color', '#1C1F25');
            if (NSLSS.StudyMode === true){
                NSLSS.StudyMode = false;
            }
            if (NSLSS.ChatColors === false){
                $("#IFChatcolors").css('background-color', '#1C1F25');
                $('#cssstaffcolors').remove();
            }
            if (NSLSS.Counter === false){
                $("#Stat").toggle("explode");
                $("#IFCounters").css('background-color', '#1C1F25');
            }
            if (NSLSS.CopySong === false){
                $("#copysong").remove();
                $("#IFCopysong").css('background-color', '#1C1F25');
            }
            if (NSLSS.AutoWoot === true){
                autoWootSet = true;
                $('#woot').click();
                $("#IFAutoWoot").css('background-color', '#00cbf6');
            }
            if (NSLSS.HideVideo === true){
                $("#playback").fadeTo('slow',0);
                $("#IFHideVideo").css('background-color', '#00cbf6');
            }
            if (NSLSS.AutoJoin === true){
                API.djJoin()
                autoJoinSet = true;
                NSsaveSettings();
                setInterval(function(){autoJoin();},1000);
                $("#IFAutoJoin").css('background-color', '#00cbf6');
            }
            if (NSLSS.Grabs === true){
                GrabsSet = true;
                $("#IFGrabs").css('background-color', '#00cbf6');
            }
            if (NSLSS.Mehs === true){
                MehsSet = true;
                $("#IFMehs").css('background-color', '#00cbf6');
            }
            if (NSLSS.ChatCommandBox === true){
                NSLSS.ChatCommandBox = false
                NSsaveSettings()
            }
        }
    }
}
//NoobScript by donvoo & SnakedMusique is licensed under a Creative Commons Attribution-NoDerivatives 4.0 International License.
