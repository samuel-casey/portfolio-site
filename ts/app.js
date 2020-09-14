var $dropdownMenu = $('main ul#dropdownMenu');
$('i.fas.fa-bars').click(function () {
    console.log('clicked Hamburger');
    if ($dropdownMenu.css('opacity') === '0') {
        console.log('hidden');
        $dropdownMenu.css('opacity', '1');
        $dropdownMenu.css('height', 'fit-content');
    }
    else {
        console.log('show');
        $dropdownMenu.css('opacity', '0');
        $dropdownMenu.css('height', '0');
    }
});
