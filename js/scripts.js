var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var index, circle_coord;

// function getCirclesPosition() {
// 	$(".main_nav > li").each(function() {
// 		var index = $(this).index("li");
// 		if(index < $(".main_nav > li").length) {
// 			var circle_coord = ( $(".main_nav > li:eq("+index+")").offset().left - $(".main_nav > li:eq("+ (index + 1) +")").offset().left ) / 2 - $(this).find(".circle").width() / 2;
// 			$(this).find(".circle").css({
// 				"left" : -circle_coord + "px"
// 			});
// 		}		
// 	});
// }

$(window).load(function() {

 $(".main_nav").addClass("loaded");

});

$(window).resize(function() {

// getCirclesPosition();

});

$(document).scroll(function() {



});

$(document).ready(function() {

	$(".main_nav > li").each(function() {
		$(this).find("ul").addClass("sub_menu");
		// $(this).append("<span class='circle'></span>");
	});

	// getCirclesPosition();



});