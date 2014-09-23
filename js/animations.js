$(document).ready(bindEvents);

function bindEvents() {
	$("#flash").click(flashTrever);
	$("#slide").click(slideTrever);
	$("#color").click(colorTrever);
}

function flashTrever() {
	$("#trever")
		.stop()
		.fadeToggle("fast")
		.fadeToggle("fast")
		.fadeToggle("fast")
		.fadeToggle("fast");
	$("#img_color")
		.stop()
		.fadeToggle("fast")
		.fadeToggle("fast")
		.fadeToggle("fast")
		.fadeToggle("fast");
}

function slideTrever() {
	$("#trever").stop().animate({"top": "100px"})
		.animate({"top": "0px"});
	$("#img_color").stop().animate({"top": "-167px"})
		.animate({"top": "-267px"});
}

function colorTrever() {
	$("#img_color").css({backgroundColor: "rgb("+(Math.floor(Math.random()*256))+","+(Math.floor(Math.random()*256))+","+(Math.floor(Math.random()*256))+")"});
	$("#img_color").stop().animate({"opacity": "0.3"},500)
		.animate({"opacity": "0"},500);
}