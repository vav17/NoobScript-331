$(document).ready(function(){
	console.log("JQuery: Imported!");
	$.getScript("https://code.jquery.com/ui/jquery-ui-git.js",function(){console.log("SUCCES!")})
	$("#Stat").draggable();
});

$("#copysong").fadeTo('slow',0)
$(document).ready(function(){
	$("#copysong").mouseenter(function(){
		$("#copysong").fadeTo('slow',1)
	})
	$("#copysong").mouseleave(function(){
		$("#copysong").fadeTo('slow',0)
	})
})
