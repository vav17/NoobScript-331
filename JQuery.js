$(document).ready(function(){
	console.log("JQuery: Imported!");
	$.getScript("https://code.jquery.com/ui/jquery-ui-git.js",function(){
		console.log("SUCCES!")
		$("#Stat").draggable();

	
		$("#copysong").hover(function(){
   		$("#copysong").fadeTo('fast',1);
   		}, function(){
  		$("#copysong").fadeTo('fast',0);
		});

		//Interface
		$('<div id="InterfaceToggle"></div>').appendTo("#facebook-menu")

	});
});