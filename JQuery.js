$(document).ready(function(){
	console.log("JQuery: Imported!");
	$.getScript("https://dl.dropboxusercontent.com/s/9vtr4n2ytphy0ra/jquery-ui-1.10.4.custom.js",function(){
		console.log("SUCCES!")
		$('head').append('<link id="cssstaffcolors" rel="stylesheet"type="text/css"href="https://dl.dropboxusercontent.com/s/usedz76mi8km5rq/Origem%20Colors.css">');
		$("#Stat").draggable();

		$("#copysong").fadeTo('fast',0);
		$("#copysong").hover(function(){
   		$("#copysong").fadeTo('slow',1);
   		}, function(){
  		$("#copysong").fadeTo('slow',0);
		});

		//Interface

	});
});