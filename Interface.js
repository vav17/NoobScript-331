///*CSS*/              $('head').append('<link type="text/css" rel="stylesheet" href="https://dl.dropboxusercontent.com/s/oicl64wgbkoirgs/stylesheettest.css" />');
/*JQUERY UI*/        $('<script src="https://dl.dropboxusercontent.com/s/y90bayahpfh4odh/jquery-ui-1.10.4.custom.min.js"></script>');
/*RUNNING MESSAGE  $('<div><span class="rainbow" style="text-size:25px">Interface Loaded!</span></div>').appendTo("#chat-messages") */
/*INTERFACE BUTTON*/ $("#app").append('<img src="http://i.imgur.com/PesbBBj.png" id="InterfaceToggle" />');
/*Second Chat*/ $("#chat-header").append('<img src="http://i.imgur.com/6Hq4ngL.png" id="SecondChatToggle" />');

//2nd Chat
$("#SecondChatToggle").hover(function(){
    $("#SecondChatToggle").fadeTo('fast',1);
    }, function(){
    $("#SecondChatToggle").fadeTo('fast',0.5);
});

$("#SecondChatToggle").on("click", function() {
    $("#SecondChat").slideToggle();
});

$(".app-right").append('<div id="SecondChat"></div>');
$("#SecondChat").slideToggle();

//Main Interface
$("#InterfaceToggle").hover(function(){
    $("#InterfaceToggle").fadeTo('fast',1);
    }, function(){
    $("#InterfaceToggle").fadeTo('fast',0.5);
});

$("#InterfaceToggle").on("click", function() {
    $("#Interface").slideToggle();
    if (NSLSS.ChatCommandBox === true){
    	$("#InterfaceCCB").slideToggle();
    }
});

$(".app-right").append('<div id="Interface" class="ChatMenu"></div>');
$("#Interface").slideToggle();

//For Hiding The Toggle

$("#playlist-meta").on("click", function() {
    setTimeout(function(){
        if ($("#playlist-button .icon-playlist").attr('class') === "icon icon-playlist"){
            $("#InterfaceToggle").show();
        }
        if ($("#playlist-button .icon-arrow-down").attr('class') === "icon icon-arrow-down"){
            $("#InterfaceToggle").hide();
        }
},200);
});

//For ChatCommandBox
$("#footer-user").append('<div id="InterfaceCCB"></div>');
$('#InterfaceCCB').append('<div id="Kill" class="CCB" onclick="API.sendChat(CCBItems[0])">Kill Script</div>');
$('#InterfaceCCB').append('<div id="Reload" class="CCB" onclick="API.sendChat(CCBItems[1])">Reload Script</div>');
$('#InterfaceCCB').append('<div id="Reset" class="CCB" onclick="API.sendChat(CCBItems[2])">Reset Settings</div>');
$("#InterfaceCCB").slideToggle();

/*--------------functions for Interface------------------*/
//Interface welcome
$("#Interface").append('<div id="IFM">Interface Menu<div id="IFI">Info/Credits</div></div>');
$('#IFI').click(function(){
    $('body').append('<div id="credits"></div>');
    $('#credits').append('<div class="CTitle">NoobScript-331</div><div class="CSep"></div><div class="CBody">Made By</div><div class="CSep"></div><div class="CBody">SnakedMusique</div><a class="CLink" href="https://www.youtube.com/user/SnakedMusique" target="_blank">YouTube</a><div class="CSep"></div><div class="CBody">&</div><div class="CSep"></div><div class="CBody">donvoo</div><a class="CLink" href="https://www.youtube.com/channel/UCbb-SEWOIg1fBo6LZCK5CBg" target="_blank">YouTube</a><div class="CSep"></div><h3 class="CInfo">Hello!<br>Thank you for using NoobScript... We thank you from the bottom of our hearts! NoobScropt was created to make the joys of plug even better! We hope you enjoy our work!</h3><div class="CSep"></div><h3 class="CInfo">Things planned:<br>* Fix Emotes<br>* WebSocket<br>* Custom Overlay</h3><div class="CSep"></div><h3 class="CInfo">Please do not edit our script without our permission... <br>Because that would be like... stealing our work! We do not want that! :P</h3><div class="CSep"></div><div class="CTitle">Thank You!</div><div class="CClose">X</div>');
    $('.CClose').click(function(){$('#credits').remove();});
});

//Autojoin
$("#Interface").append('<div class="IFFunction" id="IFAutoJoin">Autojoin</div>');
$("#IFAutoJoin").on("click", NSTogglers.toggleAutoJoin);
//AutoWoot
$("#Interface").append('<div class="IFFunction" id="IFAutoWoot">Autowoot</div>');
$("#IFAutoWoot").on("click", NSTogglers.toggleAutoWoot);
//Chat colors
$("#Interface").append('<div class="IFFunction" id="IFChatcolors">Chat Colors</div>');
$("#IFChatcolors").on("click", NSTogglers.toggleChatColors);
//Counters
$("#Interface").append('<div class="IFFunction" id="IFCounters">Counters</div>');
$("#IFCounters").on("click", NSTogglers.toggleCounters);
//Copysong
$("#Interface").append('<div class="IFFunction" id="IFCopysong">Copysong</div>');
$("#IFCopysong").on("click", NSTogglers.toggleCopySong);
//Hide Video
$("#Interface").append('<div class="IFFunction" id="IFHideVideo">Hide Video</div>');
$("#IFHideVideo").on("click", NSTogglers.toggleHideVideo);
//Who Grabs
$("#Interface").append('<div class="IFFunction" id="IFGrabs">Show Grabs</div>');
$("#IFGrabs").on("click", NSTogglers.toggleGrabs);
//Who Mehs
$("#Interface").append('<div class="IFFunction" id="IFMehs">Show Mehs</div>');
$("#IFMehs").on("click", NSTogglers.toggleMehs);
//ChatCommandBox
$("#Interface").append('<div class="IFFunction" id="IFChatCommandBox">Open Chat Command Box</div>');
$("#IFChatCommandBox").on("click", NSTogglers.toggleChatCommandBox);


/*--------------Second Chat------------------*/
$("#SecondChat").append('<div id="Welcome" class="main" style="text-align: center">Update Page</div>');
