"use strict";
exports.__esModule = true;
var contentClasses_1 = require("./contentClasses");
var sheetId = '11ABDt_dPctf9vJJI9LXObufyE9YsFU5nBC0Q-ul1SDs';
var projectsAsJSON = "https://spreadsheets.google.com/feeds/list/" + sheetId + "/1/public/values?alt=json";
var blogsAsJSON = "https://spreadsheets.google.com/feeds/list/" + sheetId + "/2/public/values?alt=json";
// const sheetsURLs: object = {
// 	projects: string = projectsAsJSON,
// 	blogs: string = blogsAsJSON,
// };
$(document).ready(function () {
    // console.log(sheetsURLs);
    var newBlogPost = new contentClasses_1.BlogPost('I kinda understand interfaces better now', 'tag', 'https://google.com', false);
    newBlogPost.createNewBlogPostElement();
    var newProjectCard = new contentClasses_1.ProjectCard('example', '#', 'example description', 'TYPESCRIPT BABY!!!', '#', '#', '#', false);
    newProjectCard.createNewProjectCardElement();
    ///////// GET PROJECT DATA ///////////
    //////// RENDER PAGE ELEMENTS ////////
});
/////////////////////////////////////////////////////////////
/////////////////// DOM MANIPULATION ////////////////////////
/////////////////////////////////////////////////////////////
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
