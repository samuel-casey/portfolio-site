const $dropdownMenu = $('main ul#dropdownMenu');

$('i.fas.fa-bars').on('click', () => {
	console.log('clicked Hamburglar');
	$dropdownMenu.slideToggle(500);
});
