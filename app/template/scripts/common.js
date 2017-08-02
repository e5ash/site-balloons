$(document).ready(function($) {

	/* Mask for phones */ 
	$('.input_phone').mask('+7 (999) 999-99-99');
	

	/* Slider */
	$('.slider').slick({
		prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="icon icon-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="icon icon-arrow-right"></i></button>'
	});


	/* Mobile */
	var mobileBtn = $('.mobile-btn'),
		mobilePanel = $('.nav'),
		mobileNav = $('.nav-panel');
	mobileBtn.click(function() {
		$(this).toggleClass('mobile-btn_toggle');
		mobilePanel.toggle()
		mobileNav.toggle()
	});
	$(window).resize(function() {
		var windowWidth = $(window).width();
		if (windowWidth > 803) {
			mobileBtn.removeClass('mobile-btn_toggle');
			mobilePanel.removeAttr('style');
			mobileNav.removeAttr('style');
		}
	});
});