$(function(){

	// Carousel
	$('.owl-carousel').owlCarousel({
	    loop: false,
	    margin: 30,
	    nav: true,
	    navText : ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
	    dots: false,
	    responsive:{
	        0:{
	            items: 2,
	            margin: 16,
	            nav: false
	        },
	        576:{
	            items: 4,
	            margin: 16,
	            nav: false
	        },
	        768:{
	            items: 5,
	            nav: false,
	            autoplay: true
	        },
	        992:{
	            items: 6,
	            nav: false,
	            autoplay: true
	        },
	        1200:{
	            items: 6
	        }
	    }
	});

	// Color options
	$('.color-buttons .btn').click(function(e) {
		var pageWrapper = $('.page-wrapper');
		var color = $(this).data('color');

		pageWrapper.removeClass(function (index, css) {
     		return (css.match (/\bbg-\S+/g) || []).join(' '); // removes anything that starts with "bg-"
		});

		pageWrapper.addClass('bg-'+color);
	});

});