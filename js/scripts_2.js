$(window).on("load",function(){
	$(".goods_card_scrollbar").mCustomScrollbar();
});

$(document).ready(function() {

	$(".close_good").on("click", function(e) {
		e.preventDefault();
		parentBlock = $(this).closest(".card_good_box");
		parentBlock.remove();
	});
	
});