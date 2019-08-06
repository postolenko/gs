$(window).on("load",function(){
	$(".goods_card_scrollbar").mCustomScrollbar();
});

$(document).ready(function() {

	$(".input_placeholder").each(function() {
		$(this).find("input, textarea").attr("placeholder", "");
	});

	$(".close_good").on("click", function(e) {
		e.preventDefault();
		parentBlock = $(this).closest(".card_good_box");
		parentBlock.remove();
	});

	$(".count_box button").click(function(e) {
        e.preventDefault();
        parentBlock = $(this).closest(".count_box");
        cardRow = parentBlock.closest(".table_row");
        priceValEl = cardRow.find(".price_val");
        // priceVal = parseFloat( priceValEl.text() );
        priceVal = parseFloat(priceValEl.text().replace(',', '.'));
        countInput = parentBlock.find(".count_num input");
        countVal = countInput.val();
        if(countVal == "") {
            countVal = 1;
        }
        if( $(this).hasClass("minus_btn") && countVal > 1 ) {
            countVal--;
        } else if( $(this).hasClass("plus_btn")) {
            countVal++;
        }
        countInput.val(countVal);
        priceVal = priceVal.toFixed(2);
        cardRow.find(".price_total_val").text(priceVal * countVal);
    });

    $(".count_num input").on("keyup", function(e) {
    	cardRow = $(this).closest(".table_row");
    	countVal = $(this).val();
    	priceValEl = cardRow.find(".price_val");
        priceVal = parseFloat(priceValEl.text().replace(',', '.'));
        cardRow.find(".price_total_val").text(priceVal * countVal);
    });

    $(".del_btn_2").on("click", function(e) {
		e.preventDefault();
		parentBlock = $(this).closest(".table_row");
		parentBlock.remove();
	});

	$(".input_placeholder").on("click", function(e) {
		e.preventDefault();
		$(".input_placeholder").each(function() {
			if($(this).find("input, textarea").val() == "") {
				$(this).removeClass("active");
			}
		});		
		$(this).addClass("active");
		$(this).find("input, textarea").focus();
	});

	$(document).mouseup(function (e){
        $(".input_placeholder").each(function() {
			if($(this).find("input, textarea").val() == "") {
				$(this).removeClass("active");
			}
		});
    });

});