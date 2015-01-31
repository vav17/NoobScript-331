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
    $('<link type="text/css" rel="Styles" href="https://rawgit.com/vav17/NoobScript-331/master/Styles.css"/>').appendTo("#app")
    $('<div id="Intro" style ="color: #4169E1; border: 1px solid #D3D3D3; font-size: 14pt; font-family: Lucida Console; text-align: center">Running NoobScript V1.2!</div>').appendTo("#chat-messages")
    
    $('<a id="Madeby" href="http://sd.keepcalm-o-matic.co.uk/i/we-are-sexy-people.png" target="_blank">Running NoobScript</a></div>').appendTo("#app")
    //$('#Madyby').css('position', 'absolute')
    //$('#Madyby').css('top', 550);
    //('#Madyby').css('left', 0)
<<<<<<< HEAD
    CT = ["BOW TO US"];
=======
    //
    CT = ["WhoOurScript"];
>>>>>>> origin/master
    //Chat Triggers ^
    CMDS = ["cmds", "credits", "kill"];
    //Chat commands ^
    API.on(API.CHAT_COMMAND, commands);
    function commands(data) {
        this.data = data;
        	//cmds
        if (data === "/" + CMDS[0]) {
            API.chatLog("Commands: " + CMDS.toString(),1)
            //credits
        }else if(data === "/" + CMDS[1]) {
            $('<div class="BasicText" style ="color: #4169E1; border: 1px solid #D3D3D3; font-size: 12pt; font-family: Lucida Console; text-align: center">Made By donvoo & SnakedMusique</div>').appendTo("#chat-messages")
            //kill
        }else if(data === "/" + CMDS[2]) {
        	API.chatLog("OH GOD WHY WOULD YOU DO THAT!?!?!");
        	throw "Killing NoobScript";
        }
    }

    //Chat Triggers
<<<<<<< HEAD
    API.on(API.CHAT, chatKey);
    function chatKey(keyData){
        if (/BOW TO US/i.test(keyData.message) && API.getUser().id === 4251764 || API.getUser().id ===  4537120) {
            API.sendChat("*Bows*");
=======
    /*API.on(API.CHAT, chatKey);
    function chatKey(data){
        if (data.message.slice(0,12) === CT[0] && data.un === "donvoo" || "SnakedMusique") {
            API.sendChat("I'm Running NoobScript!")
>>>>>>> origin/master
        } 
    }
    */
}

//https://rawgit.com/vav17/NoobScript-331/master/NoobScript.js
//javascript:(function(){$.getScript('https://rawgit.com/vav17/NoobScript-331/master/NoobScript.js');}());
