(function ($) {
"use strict";



// skill
$(".skill-per").each(function() {
  var $this = $(this);
  var id = $this.attr("id");
  $this.css("width", id + "%");
  $({ animatedValue: 0 }).animate(
    { animatedValue: id },
    {
      duration: 1000,
      step: function() {
        $this.attr("id", Math.floor(this.animatedValue) + "%");
      },
      complete: function() {
        $this.attr("id", Math.floor(this.animatedValue) + "%");
      }
    }
  );
});
    
    
// sticky
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 200) {
		$("#header-sticky").removeClass("sticky-menu");
	} else {
		$("#header-sticky").addClass("sticky-menu");
	}
});

// RESPONSIVE MENU
$('.responsive').on('click', function (e) {
	$('#mobile-menu').slideToggle();
});

// meanmenu
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "992"
	});

	$('.info-bar').on('click', function () {
		$('.extra-info').addClass('info-open');
	})

	$('.close-icon').on('click', function () {
		$('.extra-info').removeClass('info-open');
	})

// offcanvas menu
$(".menu-tigger").on("click", function () {
	$(".offcanvas-menu,.offcanvas-overly").addClass("active");
	return false;
});
$(".menu-close,.offcanvas-overly").on("click", function () {
	$(".offcanvas-menu,.offcanvas-overly").removeClass("active");
});
    


// menu toggle
$(".main-menu li a").on('click', function () {
	if ($(window).width() < 700) {
		$("#mobile-menu").slideUp();
	}
});

// smoth scroll
$(function () {
	$('a.smoth-scroll').on('click', function (event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 100
		}, 1000);
		event.preventDefault();
	});
});

// Show menu humbar    
$(function () {
    
  $('.Show').on('click',function() {
    $('#menu-four').show(-200);
    $('.Show').hide(0);
    $('.Hide').show(0);
});
$('.Hide').on('click',function() {
    $('#menu-four').hide(-500);
    $('.Show').show(0);
    $('.Hide').hide(0);
});
$('.toggle').on('click',function() {
    $('#menu-four').toggle('slow');
});
    
    });
    
    
// mainSlider
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: true,
		autoplaySpeed: 10000,
		dots:false ,
		fade: true,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="icon dripicons-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="icon dripicons-chevron-right"></i></button>',
		responsive: [
			{ breakpoint: 1200, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();

//wheel-scroll-home-four 
    $(function () {
        
        const slider = $(".slider-item");
        slider
          .slick({
          vertical: true,
          infinite: false,
          arrows:false,
          dots: true
          });

        slider.on('wheel', (function(e) {
          e.preventDefault();

          if (e.originalEvent.deltaY > 0) {
            $(this).slick('slickNext');
          } else {
            $(this).slick('slickPrev');
          }
        }));
        
    });
    
// services-active
$('.services-active').slick({
	dots: false,
	infinite: true,
	arrows: false,
	speed: 1000,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});
    
    // team-active
$('.team-active').slick({
	dots: true,
	infinite: true,
	arrows: true,
	prevArrow: '<button type="button" class="slick-prev"><i class="icon dripicons-arrow-thin-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="icon dripicons-arrow-thin-right"></i></button>',
	speed: 1000,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});
// portfolio-active
$('.portfolio-active').slick({
	dots: false,
	infinite: true,
    arrows: true,
	prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
	speed: 1000,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

$('.portfolio-active2').slick({
	dots: false,
	infinite: true,
    arrows: false,
	prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
	speed: 1000,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

$('.slider-active2').slick({
	dots: true,
	infinite: true,
    arrows: false,
    autoplay: true,
		autoplaySpeed: 5000,
	prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
	slidesToShow: 1,
	slidesToScroll: 1,
    fade: !0,
        cssEase: 'linear',
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

$('.slider-active3').slick({
	dots: true,
	infinite: true,
    arrows: true,
    autoplay: true,
		autoplaySpeed: 5000,
	prevArrow: '<button type="button" class="slick-prev">prev</button>',
	nextArrow: '<button type="button" class="slick-next">next</button>',
	slidesToShow: 3,
	slidesToScroll: 1,

	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

    
// brand-active
$('.brand-active').slick({
	dots: false,
	infinite: true,
    autoplay:true,
  autoplaySpeed:1500,
	arrows: false,
	speed: 1000,
	slidesToShow:6,
	slidesToScroll: 2,
	responsive: [
		{
			breakpoint: 1500,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 3,
				infinite: true,
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

// testimonial-active
$('.testimonial-active').slick({
	dots: true,
	infinite: true,
	arrows: false,
	speed: 1000,
	slidesToShow: 1,
	slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-chevron-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="fal fa-chevron-right"></i></button>',
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});
    // testimonial-active
$('.testimonial-active2').slick({
	dots: false,
    autoplay:false,
	infinite: true,
	arrows: true,
     prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-chevron-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="fal fa-chevron-right"></i></button>',
	speed: 1000,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});
// testimonial-active2

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots:false,
  arrows:true,
  centerMode: true,
  focusOnSelect: true, 
  variableWidth:true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
});
// home-blog-active
$('.home-blog-active').slick({
	dots: false,
	infinite: true,
	arrows: true,
	speed: 1000,
	slidesToShow:3,
	slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-chevron-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="fal fa-chevron-right"></i></button>',
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

    // home-blog-active
$('.home-blog-active2').slick({
	dots: false,
	infinite: true,
	arrows: true,
	speed: 1000,
	slidesToShow: 3,
	slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="far fa-chevron-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="far fa-chevron-right"></i></button>',
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

// blog
$('.blog-active').slick({
	dots: false,
	infinite: true,
	arrows: true,
	speed: 1500,
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
});

// counterUp

$('.count').counterUp({
	delay: 100,
	time: 1000
});

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});

// paroller
if ($('.paroller').length) {
	$('.paroller').paroller();
}

//* Parallaxmouse js
function parallaxMouse() {
	if ($('#parallax').length) {
		var scene = document.getElementById('parallax');
		var parallax = new Parallax(scene);
	};
};
parallaxMouse();

// service active
$('.s-single-services').on('mouseenter', function () {
	$(this).addClass('active').parent().siblings().find('.s-single-services').removeClass('active');
})

// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp',
	topDistance: '300',
	topSpeed: 300,
	animation: 'fade',
	animationInSpeed: 200,
	animationOutSpeed: 200,
	scrollText: 'Back To Top',
	activeOverlay: false,
});


// isotop
	$('.grid').imagesLoaded(function () {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: 1
	  }
	});

	// filter items on button click
	$('.button-group').on('click', 'button', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });		
	});

});
// isotop
$(".element").each(function() {
    var a = $(this);
    a.typed({
        strings: a.attr("data-elements").split(","),
        typeSpeed: 100,
        backDelay: 3e3
    })
}),
//for menu active class
$('.button-group > button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});

// WOW active
new WOW().init();
    
//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
				$(target).fadeIn(300);
				$(target).addClass('active-tab animated fadeIn');
			}
		});
	}
//circle
$(function () {
    const cursor = document.querySelector('.cursor');
    const circle = document.querySelector('.circle');
    const links = document.querySelectorAll('.link');
    const editPosCursor = (e) => {
        const { clientX: x, clientY: y } = e;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
        circle.style.left = x + 'px';
        circle.style.top = y + 'px';
    }
    const animateit = function(e) {
        const span = this.querySelector('span');
        const { offsetX: x, offsetY: y } = e,
            { offsetWidth: width, offsetHeight: height } = this,
            move = 25,
            xMove = x / width * (move * 2) - move,
            yMove = y / height * (move * 2) - move;

        span.style.transform = `translate(${xMove}px, ${yMove}px)`;
        circle.classList.add('hover');
        if (e.type === 'mouseleave') {
            circle.classList.remove('hover');
            span.style.transform = '';
        }
    }
    window.addEventListener('mousemove', editPosCursor);
    links.forEach(link => link.addEventListener('mousemove', animateit));
    links.forEach(link => link.addEventListener('mouseleave', animateit));
});


})(jQuery);
