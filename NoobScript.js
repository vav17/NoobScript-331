//Script Created by Snaked and donvoo
/*Message For last update:
donvoo - I made the /cmd to /cmds so it dosn't interfear with origem's /cmd also updated the chat commands and now its working V1.2 <-update the version when you make a successful update
*/
function startScript() {
    if (typeof API !== "object" || !API.enabled) {
        setTimeout(startScript, 200);
    } else {
        noobScript();
    }
}
setTimeout(startScript, 200);
function noobScript() {
    //onStartup
    $('<link type="text/css" rel="Styles" href="https://rawgit.com/vav17/NoobScript-331/master/Styles.css"/>').appendTo("head")
    $('<div id="Intro" style ="color: #4169E1; border: 1px solid #D3D3D3; font-size: 14pt; font-family: Lucida Console; text-align: center">Running NoobScript V1.2!</div>').appendTo("#chat-messages")
    
    $('<div id="Madyby" style ="width: 120px; height: 27px"><a href="http://sd.keepcalm-o-matic.co.uk/i/we-are-sexy-people.png" target="_blank" style="font-family: Lucida Console; color: #D3D3D3; text-align: center">Running NoobScript</a></div>').appendTo("#app")
    //$('#Madyby').css('position', 'absolute')
    //$('#Madyby').css('top', 550);
    //('#Madyby').css('left', 0)
    //
    CT = ["WhoOurScript"];
    //Chat Triggers ^
    CMDS = ["cmds", "credits"];
    //Chat commands ^
    API.on(API.CHAT_COMMAND, commands);
    function commands(data) {
        this.data = data;
        if (data === "/" + CMDS[0]) {
            API.chatLog("Commands: "+CMDS.toString(),1)
        }
        if (data === "/" + CMDS[1]) {
            $('<div class="BasicText" style ="color: #4169E1; border: 1px solid #D3D3D3; font-size: 12pt; font-family: Lucida Console; text-align: center">Made By donvoo & SnakedMusique</div>').appendTo("#chat-messages")
        }
    }
    //Chat Triggers
    /*API.on(API.CHAT, chatKey);
    function chatKey(data){
        if (data.message.slice(0,12) === CT[0] && data.un === "donvoo" || "SnakedMusique") {
            API.sendChat("I'm Running NoobScript!")
        } 
    }
    */
}


//https://rawgit.com/vav17/NoobScript-331/master/NoobScript.js
//javascript:(function(){$.getScript('https://rawgit.com/vav17/NoobScript-331/master/NoobScript.js');}());
