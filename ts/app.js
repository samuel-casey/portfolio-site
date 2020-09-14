var $dropdownMenu = $('main ul#dropdownMenu');
$('i.fas.fa-bars').on('click', function () {
    console.log('clicked Hamburglar');
    $dropdownMenu.slideToggle(500);
});
