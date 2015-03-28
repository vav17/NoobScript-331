$(document).ready(function(){
	console.log("JQuery: Imported!");
		console.log("SUCCES!");
		$('.icon-room').remove();
		$('<img id="chitoge" src="http://i.imgur.com/IB9X9FT.png"/>').appendTo('#room-bar');
		$('<img id="ond" src="http://i.imgur.com/OWLqIvV.png"/>').appendTo('#room-bar');
		$('head').append('<link id="cssstaffcolors" rel="stylesheet"type="text/css"href="https://dl.dropboxusercontent.com/s/usedz76mi8km5rq/Origem%20Colors.css">');
		$("#Stat").draggable();
		$('#chat-messages').append('<div class="NSalert">Heyo! Thanks For Using This Script <3 !</div>');
		$('#volume').hover(function(){
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
});