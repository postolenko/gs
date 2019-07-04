var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var index, circle_coord;

function getCirclesPosition() {
	var circle, circle_coord, nextItem;
	$(".main_nav > li").each(function() {
		var index = $(this).index();
		if($(this).find(".circle").length > 0) {
			circle = $(this).find(".circle");
			nextItem = $(".main_nav > li:eq("+( index + 1 )+")");
			circle_coord = ( $(this).offset().left + $(this).width() - nextItem.offset().left ) / 2 - 4;
			circle.css({
				"right" : circle_coord + "px"
			});
		}		
	});
}

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 55.9326812, lng:   37.7428077},
    zoom: 16,
    zoomControl: false,
    scaleControl: false,
    fullscreenControl: false,
    mapTypeControl: false,
    streetViewControl: false
  });

  Popup = createPopupClass();
  popup = new Popup(
      new google.maps.LatLng(55.9326812, 37.7428077),
      document.getElementById('content'));
  popup.setMap(map);
}

function createPopupClass() {
  function Popup(position, content) {
    this.position = position;
    content.classList.add('popup-bubble');
    var bubbleAnchor = document.createElement('div');
    bubbleAnchor.classList.add('popup-bubble-anchor');
    bubbleAnchor.appendChild(content);
    this.containerDiv = document.createElement('div');
    this.containerDiv.classList.add('popup-container');
    this.containerDiv.appendChild(bubbleAnchor);
    google.maps.OverlayView.preventMapHitsAndGesturesFrom(this.containerDiv);
  }

  Popup.prototype = Object.create(google.maps.OverlayView.prototype);

  Popup.prototype.onAdd = function() {
    this.getPanes().floatPane.appendChild(this.containerDiv);
  };

  Popup.prototype.onRemove = function() {
    if (this.containerDiv.parentElement) {
      this.containerDiv.parentElement.removeChild(this.containerDiv);
    }
  };

  Popup.prototype.draw = function() {
    var divPosition = this.getProjection().fromLatLngToDivPixel(this.position);
    var display =
        Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000 ?
        'block' :
        'none';
    if (display === 'block') {
      this.containerDiv.style.left = divPosition.x + 'px';
      this.containerDiv.style.top = divPosition.y + 'px';
    }
    if (this.containerDiv.style.display !== display) {
      this.containerDiv.style.display = display;
    }
  };

  return Popup;
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
    getCirclesPosition();
    $(".promo_slider_wrapp").addClass("loaded");

});

$(window).resize(function() {
    setTimeout(function() {
        getCirclesPosition();
    }, 200);
});

$(document).scroll(function() {



});

$(document).ready(function() {

	$(".main_nav > li").each(function() {
		$(this).find("ul").addClass("sub_menu");
		if($(this).index() < $(".main_nav > li").length - 1) {
			$(this).append("<span class='circle'></span>");
		}
        if($(this).find(".sub_menu").length > 0) {
            $(this).append("<button type='button' class='menu_btn'></button>");
        }        
	});

    // -------------------

    $(".menu_btn").on("click", function(e) {
        e.preventDefault();
        var menuItem = $(this).closest("li").find(".sub_menu");
        if(menuItem.is(":hidden")) {
            menuItem.slideDown(300);
            $(this).addClass("active");
        } else {
            menuItem.slideUp(300);
            $(this).removeClass("active");
        }
    });

    $(".respmenubtn").click(function() {
        if( $("#resp_nav").is(":hidden") ) {
            $("#resp_nav").fadeIn(300);
            $(this).addClass("active");
        } else {
            $("#resp_nav").fadeOut(300);
            $(this).removeClass("active");
        }
    });

    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $("#resp_nav").is(":visible") ) {
                $("#resp_nav").fadeOut(300);
                $(".respmenubtn").removeClass("active");
        }
    });


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
            verticalSwiping: true,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/left_arrow_2.svg"></button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="img/right_arrow_2.svg"></button>',
            responsive: [
                {
                  breakpoint: 900,
                  settings: {
                    slidesToShow: 10,
                    slidesToScroll: 1,
                    vertical: false,
                    verticalSwiping: false,
                    arrows: true
                  }
                }
                // {
                //   breakpoint: 620,
                //   settings: {
                //     slidesToShow: 1,
                //     slidesToScroll: 1
                //   }
                // }
            ]
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
            responsive: [
                {
                  breakpoint: 1240,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 967,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 580,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
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
            responsive: [
                {
                  breakpoint: 900,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 570,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
        });
    }

    // -- /Card Slider

    $(".scroll_btn").click(function(e) {
        e.preventDefault();
        parentBlock = $(this).closest("section");
        // var bottomCoord = parentBlock.offset().top + parentBlock.outerHeight();
        var bottomCoord =  parentBlock.next("section").offset().top;

        $('html, body').stop().animate({
            'scrollTop': bottomCoord
        }, 500);
    });

    // ----------

    $("[data-popup-link]").on("click", function(e) {
    	e.preventDefault();
    	var popupName = $(this).attr("data-popup-link");
    	$("body").css({
            "position" : "fixed",
            "top" :  -$(document).scrollTop() + "px",
            "overflow" : "hidden",
            "right" : 0,
            "left" : 0,
            "bottom" : 0
        });
        $("body").addClass("fixed");
        $("[data-popup]").fadeIn(300);
    });

    $(".close_btn").on("click", function(e) {
    	e.preventDefault();
    	curTop = $("body").css("top");
        curTop = Math.abs(parseInt(curTop, 10));
        $("body").attr("style", "")
        if (curTop !== 0) {
            $("html").scrollTop(curTop);
        }
        $("body").removeClass("fixed");
        $(this).closest("[data-popup]").fadeOut(300);
    });

    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 ) {
        	curTop = $("body").css("top");
	        curTop = Math.abs(parseInt(curTop, 10));
	        $("body").attr("style", "")
	        if (curTop !== 0) {
	            $("html").scrollTop(curTop);
	        }
	        $("body").removeClass("fixed");
			$("[data-popup]").fadeOut(300);
        }
    });

    // $(document).mouseup(function (e){
    //     hide_element = $(".popup_wrapp");
    //     if (!hide_element.is(e.target)
    //         && hide_element.has(e.target).length === 0) {
    //         curTop = $("body").css("top");
    //         curTop = Math.abs(parseInt(curTop, 10));
    //         $("body").attr("style", "")
    //         if (curTop !== 0) {
    //             $("html").scrollTop(curTop);
    //         }
    //         $("body").removeClass("fixed");
    //         $("[data-popup]").fadeOut(300);
    //     }
    // });

});