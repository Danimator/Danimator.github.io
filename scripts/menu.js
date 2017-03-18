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

$("#content").on("swipeleft",function(){
	shift();
});

$("#content").on("swiperight",function(){
	unshift();
});