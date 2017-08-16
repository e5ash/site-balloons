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
		mobilePanel.toggle();
		mobileNav.toggle();
	});
	$(window).resize(function() {
		var windowWidth = $(window).width();
		if (windowWidth > 803) {
			mobileBtn.removeClass('mobile-btn_toggle');
			mobilePanel.removeAttr('style');
			mobileNav.removeAttr('style');
		}
	});



	/* Increment */
	function increment(button, operation) {
		var parent = button.parents('.increment'),
			input = parent.find('.increment__input'),
			inputValue = Number(input.val()),
			operation;

		if (operation == 'minus' && inputValue > 1) {
			input.val(inputValue-1);
		} else if (operation == 'plus' && inputValue < 9999){
			input.val(inputValue+1);
		}
		
	}

	$('.increment__plus').click(function() {
		increment($(this), 'plus');
	});

	$('.increment__minus').click(function() {
		increment($(this), 'minus');
	});

	$(".increment__input").keydown(function(event) {
		if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || (event.keyCode == 65 && event.ctrlKey === true) || (event.keyCode >= 35 && event.keyCode <= 39)) {
			return;
		}
		else {
			if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
				event.preventDefault();
			}
		}
	});


	/* Callback */
	function callback() {
		event.preventDefault();
		$('.callback').toggle(0);
	}
	$('[data-callback-open], [data-callback-close]').click(function(event) {
		callback();
	});

	/* Date */
	$(".date input").datepicker({
		altFormat: "dd-mm-yy"
	});


	/* Sliders */
	$('.image').slick({
		arrows: false,
		asNavFor: $('.images')
	})

	$('.images').slick({
		arrows: false,
		slidesToShow: 3,
		focusOnSelect: true,
		asNavFor: $('.image')
	})
});