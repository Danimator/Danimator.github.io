delete Hammer.defaults.cssProps.userSelect;
function unshift(){
	document.getElementById("content").classList.remove("shift");
	document.getElementById("menu").classList.remove("shift");
	document.getElementById("menuButton").classList.remove("change");
}

function shift(){
	document.getElementById("content").classList.add("shift");
	document.getElementById("menu").classList.add("shift");
	document.getElementById("menuButton").classList.add("change");
}

function toggle(x) {
	x.classList.toggle("change");
	document.getElementById("content").classList.toggle("shift");
	document.getElementById("menu").classList.toggle("shift");
}

function link(linkto){
	unshift();
	document.body.classList.toggle('fade');
	setTimeout(function(){window.location.href = linkto;}, 620);
}

var hammer = new Hammer(document.body);

hammer.on('swipeleft', function(ev) {
	shift();
});

hammer.on('swiperight', function(ev) {
	unshift();
});

$(document).scroll(function() {
	document.getElementById("menu").style.top = $(document).scrollTop() + "px";
});