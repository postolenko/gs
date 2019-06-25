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

var map;
var marker;
// var image = "img/map_marker.png";
var styles;	

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 55.882593, lng: 37.5477503},
		scrollwheel: false,
		scaleControl: false,
		zoom: 16
	});
	marker = new google.maps.Marker({
		map: map,
		draggable: false,
		animation: google.maps.Animation.DROP,
		position: {lat: 55.882593, lng: 37.5477503},
		map: map,
		// icon: image,
		title: ''
	});
	marker.addListener('click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

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

	// if( document.getElementById("map") ) {

	// 	var map;
	// 	var marker;
	// 	// var image = "img/map_marker.png";
	// 	var styles;		

	// }


	$(".tabs").each(function() {
        $(this).find(".tab_link").each(function() {
            if( $(this).hasClass("active") ) {
                indexActiveTab = $(this).index(".tab_link");
                $(this).click();
                return false;
            } else {
                indexActiveTab = 0;
            }
        });
        $(this).find(".tab_link").eq(indexActiveTab).click();
        $(this).find(".tab_link").eq(indexActiveTab).addClass("active");
    });


    $(".tab_link").click(function (e) {
        if( $(this).hasClass("active") ) {
            e.preventDefault();
        } else {
            tabsParent = $(this).closest(".tabs");
            attrForTabLink = $(this).attr("for");
            activeTabRadio = tabsParent.find(".radio_tab[id = '"+ attrForTabLink +"']");
            activeTabRadio.prop("checked", true);
            tabsParent.find(".tab_link").each(function () {                
                if( $(this).hasClass("active") ) {
                    $(this).removeClass("active");
                }
            });
            $(this).addClass("active");
        }
    });

     if($(".promo_slider").length) {
    	$(".promo_slider").not(".slick-initialized").slick({
            dots: true,
            arrows: true,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            fade: true,
            appendArrows: $(".promo_slider_controls"),
            appendDots: $(".promo_slider_controls"),
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/left_arrow_2.svg"></button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="img/right_arrow_2.svg"></button>',
            // responsive: [
            //     {
            //       breakpoint: 900,
            //       settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 1
            //       }
            //     },
            //     {
            //       breakpoint: 620,
            //       settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //       }
            //     }
            // ]
        });
    }

    // -- Card Slider

    if($(".big_slider").length && $(".miniature_slider").length ) {

        $('.big_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            fade: true,
            asNavFor: '.miniature_slider'
        });

        $('.miniature_slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.big_slider',
            dots: false,
            arrows: false,
            vertical: true,
            focusOnSelect: true,
            verticalSwiping: true
        });

    }

    if($(".slider_1").length) {
    	$(".slider_1").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/left_arrow_2.svg"></button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="img/right_arrow_2.svg"></button>',
            // responsive: [
            //     {
            //       breakpoint: 900,
            //       settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 1
            //       }
            //     },
            //     {
            //       breakpoint: 620,
            //       settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //       }
            //     }
            // ]
        });
    }

    if($(".slider_2").length) {
    	$(".slider_2").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/left_arrow_2.svg"></button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="img/right_arrow_2.svg"></button>',
            // responsive: [
            //     {
            //       breakpoint: 900,
            //       settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 1
            //       }
            //     },
            //     {
            //       breakpoint: 620,
            //       settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //       }
            //     }
            // ]
        });
    }

    // -- /Card Slider

});