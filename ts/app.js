"use strict";
exports.__esModule = true;
var contentClasses_1 = require("./contentClasses");
var sheetId = '11ABDt_dPctf9vJJI9LXObufyE9YsFU5nBC0Q-ul1SDs';
var projectsAsJSON = "https://spreadsheets.google.com/feeds/list/" + sheetId + "/1/public/values?alt=json";
var blogsAsJSON = "https://spreadsheets.google.com/feeds/list/" + sheetId + "/2/public/values?alt=json";
var NUM_VISIBLE_PROJECTS_ON_LOAD = 2;
var $showMoreProjects = $('#moreProjects');
var $showMoreBlogs = $('#moreBlogs');
var sheetsURLs = {
    projects: projectsAsJSON,
    blogs: blogsAsJSON
};
$(document).ready(function () {
    ///////// GET PROJECT DATA ///////////
    getDataFromSheet(sheetsURLs.projects)
        .then(function (projects) {
        return renderData(projects);
    })
        .then(function () {
        var $hiddenProjects = $('div.card.hidden');
        // add click event to 'more projects' button to show hidden projects onClick
        $showMoreProjects.on('click', function () {
            for (var i = 0; i < $hiddenProjects.length; i++) {
                var $hiddenProj = $hiddenProjects.eq(i);
                $hiddenProj.removeClass('hidden').addClass('visible');
            }
        });
        // getDataFromSheet(sheetsURLs.)
    });
});
//////// RENDER PAGE ELEMENTS ////////
function renderData(data) {
    if (data[0].type === 'project') {
        data.forEach(function (row, index) {
            var newCard;
            if (index < NUM_VISIBLE_PROJECTS_ON_LOAD) {
                newCard = new contentClasses_1.ProjectCard(row.title, row.image, row.description, row.techStack, row.siteUrl, row.repoUrl, row.infoUrl, false);
            }
            else {
                newCard = new contentClasses_1.ProjectCard(row.title, row.image, row.description, row.techStack, row.siteUrl, row.repoUrl, row.infoUrl, true);
            }
            newCard.createNewProjectCardElement();
            return newCard;
        });
    }
}
function getDataFromSheet(sheet) {
    return $.ajax({ url: sheet }).then(function (data) {
        var rows;
        if (data.feed.title.$t === 'Projects') {
            rows = data.feed.entry.map(function (item) {
                return {
                    type: item.gsx$contenttype.$t,
                    title: item.gsx$title.$t,
                    image: item.gsx$image.$t,
                    techStack: item.gsx$techstack.$t,
                    description: item.gsx$description.$t,
                    siteUrl: item.gsx$siteurl.$t,
                    repoUrl: item.gsx$repourl.$t,
                    infoUrl: item.gsx$infourl.$t
                };
            });
        }
        return rows;
    });
}
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
// // add padding top to show content behind navbar
// https: $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// FUNCTIONS TO FETCH DATA FROM GOOGLE SHEETS AND RENDER NEW PAGE ELEMENTS BASED ON THE DATA RETRIEVED //
////////////////////////////////////////////////////////////////////////////////////////////////////////
