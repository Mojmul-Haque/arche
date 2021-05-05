$(function () {
	"use stricts"
	//////
	//banner slider 

	$('.banne_slider_1').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.banner_slider_2',
		speed: 1500,
		autoplay: false,

	});
	$('.banner_slider_2').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.banne_slider_1',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		arrows: false,
		speed: 1500,
		centerPadding: 0,
		autoplay: false,
	});

	// counter up js
	$('.counter_up').counterUp({
		delay: 10,
		time: 1000
	});

	//service slider
	$('.service_slider').slick({
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding: 0,
		arrows: false,
		responsive: [
			{
				breakpoint: 993,
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
					slidesToShow: 2,
					slidesToScroll: 1
				}
	    },
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});


	//testi slider
	$('.testi_slider').slick({
		dots: true,
		infinite: true,
		autoplay: false,
		autoplaySpeed: 2000,
		slidesToShow: 2,
		slidesToScroll: 1,
		centerPadding: 0,
		arrows: false,
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
				breakpoint: 993,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
	    },
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});

	//	 menu fix
	var nav_fix = $('.main_menu').offset().top;
	$(window).on('scroll', function () {
		var nav_scroll = $(this).scrollTop();
		if (nav_scroll > nav_fix) {
			$('.main_menu').addClass('menu_fix');
		} else {
			$('.main_menu').removeClass('menu_fix');
		}
	});


	// back to top button
	$('.back_to_top').on('click', function () {
		$('html,body').animate({
				scrollTop: 0,
			},
			500);
	});
	$(window).scroll(function () {
		var back_top = $(this).scrollTop();
		console.log(back_top);
		if (back_top > 105) {
			$('.back_to_top').fadeIn();
		} else {
			$('.back_to_top').fadeOut();
		}
	});


	// preloader
	$(window).on("load", function(){
        $('.pre_loader').delay(500).fadeOut(500);
    });


	// Or Via JavaScript
	jarallax(document.querySelectorAll('.jarallax'), {
		//		videoSrc: 'VIDEO SOURCE HERE'
		speed: .8,
		imgWidth: 1366,
		//		imgHeight: 768
	});

	// Or Via jQuery
	$('.jarallax').jarallax({
		//		videoSrc: 'VIDEO SOURCE HERE'
	});

	// aos start 
	AOS.init();

	// progressbar start 
	$('#bar1').barfiller({
		barColor: '#d9b257',
		tooltip: true,
		duration: 1000,
		animateOnResize: true,
		symbol: "%"
	});

	$('#bar2').barfiller({
		barColor: '#d9b257',
		tooltip: true,
		duration: 1000,
		animateOnResize: true,
		symbol: "%"
	});

	$('#bar3').barfiller({
		barColor: '#d9b257',
		tooltip: true,
		duration: 1000,
		animateOnResize: true,
		symbol: "%"
	});

	$('#bar4').barfiller({
		barColor: '#d9b257',
		tooltip: true,
		duration: 1000,
		animateOnResize: true,
		symbol: "%"
	});




})
