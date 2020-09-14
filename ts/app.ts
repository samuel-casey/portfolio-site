console.log($);

const $dropdownMenu = $('header ul#dropdownMenu');
const $hamburgerButton = $('i.fas.fa-bars');

$hamburgerButton.on('click', () => {
	$dropdownMenu.slideToggle(500);
});

//Found this function here: bootstrap-menu.com/detail-smart-hide.html
// the way it works is by checking for the navbar's height

// add padding top to show content behind navbar
https: $('body').css('padding-top', $('.navbar').outerHeight() + 'px');

// detect scroll top or down
if ($('.smart-scroll').length > 0) {
	// check if element exists
	let last_scroll_top = 0;
	$(window).on('scroll', function () {
		let scroll_top = $(this).scrollTop();
		if (scroll_top < last_scroll_top) {
			$('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
		} else {
			$('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
		}
		last_scroll_top = scroll_top;
	});
} else {
	$hamburgerButton.css('display', 'none');
}
