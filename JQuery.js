$(document).ready(function(){
	console.log("JQuery: Imported!");
	$.getScript("https://code.jquery.com/ui/jquery-ui-git.js",function(){
		console.log("SUCCES!")
		$('head').append('<link id="cssstaffcolors" rel="stylesheet"type="text/css"href="https://dl.dropboxusercontent.com/s/usedz76mi8km5rq/Origem%20Colors.css">');
		//$("#Stat").draggable();

		$("#copysong").fadeTo('fast',0);
		$("#copysong").hover(function(){
   		$("#copysong").fadeTo('slow',1);
   		}, function(){
  		$("#copysong").fadeTo('slow',0);
		});

		//Interface
		$('<div id="InterfaceToggle"></div>').appendTo("#facebook-menu")

	});
});