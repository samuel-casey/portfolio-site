var sheetId = '11ABDt_dPctf9vJJI9LXObufyE9YsFU5nBC0Q-ul1SDs';
var sheetAsJSON = "https://spreadsheets.google.com/feeds/list/" + sheetId + "/od6/public/values?alt=json";
$(document).ready(function () {
    console.log('ready!');
    $.ajax({ url: sheetAsJSON })
        .then(function (data) {
        // data.feed.entry is the array that contains our objects so we can use .map()
        // to iterate over the array
        console.log(data.feed.entry);
        var projects = data.feed.entry.map(function (project) {
            // here we return a new object with keys names of our own choosing and the needed values
            return {
                title: project.gsx$title.$t,
                image: project.gsx$image.$t,
                techStack: project.gsx$techstack.$t,
                description: project.gsx$description.$t,
                url: project.gsx$url.$t
            };
        });
        //  pass the data to the app function
        return logProjects(projects);
    })["catch"](function (error) {
        console.log(error);
    });
});
var $dropdownMenu = $('header ul#dropdownMenu');
var $hamburgerButton = $('i.fas.fa-bars');
$hamburgerButton.on('click', function () {
    $dropdownMenu.slideToggle(500);
});
//Found this function here: bootstrap-menu.com/detail-smart-hide.html
// the way it works is by checking for the navbar's height
// add padding top to show content behind navbar
https: $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
var $navbar = $('.smart-scroll');
// detect scroll top or down
if ($navbar.length > 0) {
    // check if element exists
    var last_scroll_top_1 = 0;
    $(window).on('scroll', function () {
        var scroll_top = $(this).scrollTop();
        if (scroll_top < last_scroll_top_1) {
            $navbar.removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            $navbar.removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top_1 = scroll_top;
    });
}
/// SUBMIT CONTACT FORM
$('article#contactContainer form').on('click', function (event) {
    event.preventDefault();
});
/// FUNCTIONS
function logProjects(projects) {
    console.log('app - projects', projects);
    return projects;
    // the rest of your app goes here
}
