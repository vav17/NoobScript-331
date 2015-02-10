$(document).ready(function(){
	console.log("JQuery: Imported!");
	$.getScript("https://code.jquery.com/ui/jquery-ui-git.js",function(){console.log("SUCCES!")})
	$("#Stat").draggable();
});
