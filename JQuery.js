$(document).ready(function(){
	console.log("JQuery: Imported!");
		console.log("SUCCES!")
		$('head').append('<link id="cssstaffcolors" rel="stylesheet"type="text/css"href="https://dl.dropboxusercontent.com/s/usedz76mi8km5rq/Origem%20Colors.css">');
		$("#Stat").draggable();

		$("#copysong").fadeTo('fast',0);
		$("#copysong").hover(function(){
   		$("#copysong").fadeTo('slow',1);
   		}, function(){
  		$("#copysong").fadeTo('slow',0);
		});

		//Interfac
});