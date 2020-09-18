"use strict";
exports.__esModule = true;
// ====== IMPORT CLASSES & INTERFACES ====== //
var classes_1 = require("./classes");
var emailjs_com_1 = require("emailjs-com");
var sheetId = '11ABDt_dPctf9vJJI9LXObufyE9YsFU5nBC0Q-ul1SDs';
var projectsAsJSON = "https://spreadsheets.google.com/feeds/list/" + sheetId + "/1/public/values?alt=json";
var blogsAsJSON = "https://spreadsheets.google.com/feeds/list/" + sheetId + "/2/public/values?alt=json";
var NUM_VISIBLE_PROJECTS_ON_LOAD = 2;
var NUM_VISIBLE_BLOGS_ON_LOAD = 2;
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
    });
    getDataFromSheet(sheetsURLs.blogs)
        .then(function (blogs) {
        return renderData(blogs);
    })
        .then(function () {
        var $hiddenBlogs = $('a.blogPost.hidden');
        $showMoreBlogs.on('click', function () {
            for (var i = 0; i < $hiddenBlogs.length; i++) {
                var $hiddenBlog = $hiddenBlogs.eq(i);
                $hiddenBlog.removeClass('hidden').addClass('visible');
            }
        });
    });
});
/*==============
DOM MANIPULATION
================*/
var $dropdownMenu = $('header ul#dropdownMenu');
var $hamburgerButton = $('i.fas.fa-bars');
$hamburgerButton.on('click', function () {
    $dropdownMenu.slideToggle(500);
});
// Found this function here: bootstrap-menu.com/detail-smart-hide.html
// it works by checking to see if the window's current height is < the window's last height
//// if current height < last height, user scrolled up --> show navbar
//// if current height > last height, user scrolled down --> hide navbar
// detect scroll top or down
var $navbar = $('.smart-scroll');
// detect scroll top or down
if ($navbar.length > 0) {
    // check if element exists
    var last_scroll_top_1 = 0;
    $(window).on('scroll', function () {
        var scroll_top = $(this).scrollTop();
        // if the current height is less than the last height, the user scrolled up and the class scrolled-up should be added
        if (scroll_top < last_scroll_top_1) {
            $navbar.removeClass('scrolled-down').addClass('scrolled-up');
            // if the current height is greater than the last height, the user scrolled down and the class scrolled-up should be added
        }
        else {
            $navbar.removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top_1 = scroll_top;
    });
}
/// SUBMIT CONTACT FORM
/*==================================================================================================
FUNCTIONS TO FETCH DATA FROM GOOGLE SHEETS AND RENDER NEW PAGE ELEMENTS BASED ON THE DATA RETRIEVED
==================================================================================================*/
// RENDER PAGE ELEMENTS
function renderData(data) {
    if (data[0].type === 'project') {
        data.forEach(function (row, index) {
            var newCard;
            if (index < NUM_VISIBLE_PROJECTS_ON_LOAD) {
                newCard = new classes_1.ProjectCard(row.title, row.image, row.description, row.techStack, row.siteUrl, row.repoUrl, row.infoUrl, false);
            }
            else {
                newCard = new classes_1.ProjectCard(row.title, row.image, row.description, row.techStack, row.siteUrl, row.repoUrl, row.infoUrl, true);
            }
            newCard.createNewProjectCardElement();
            return newCard;
        });
    }
    if (data[0].type === 'blog') {
        data.forEach(function (row, index) {
            var newBlogPost;
            if (index < NUM_VISIBLE_BLOGS_ON_LOAD) {
                newBlogPost = new classes_1.BlogPost(row.title, row.tags, row.url, false);
            }
            else {
                newBlogPost = new classes_1.BlogPost(row.title, row.tags, row.url, true);
            }
            newBlogPost.createNewBlogPostElement();
            return newBlogPost;
        });
    }
}
// make an AJAX call to the google sheets API and return a blog or project object
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
        if (data.feed.title.$t === 'Blogs') {
            rows = data.feed.entry.map(function (item) {
                return {
                    type: item.gsx$contenttype.$t,
                    title: item.gsx$title.$t,
                    tags: item.gsx$tags.$t,
                    url: item.gsx$url.$t
                };
            });
        }
        return rows;
    });
}
var $contactForm = $('#contactForm');
var serviceID = 'service_yvxcdkg';
var templateID = 'template_1z4c1oa';
var userID = 'user_NEvPQoryWpJOh3UHul6iB';
emailjs_com_1["default"].init(userID);
$contactForm.on('submit', function (event) {
    event.preventDefault();
    emailjs_com_1["default"].sendForm(serviceID, templateID, this).then(function (response) {
        var name = $contactForm.find("input[name='name']").val();
        alert("Thanks for your email, " + name + ", I'll do my best to get back to you within 24 hours! \n\nBest, Sam");
    }, function (error) {
        alert("FAILED TO SEND EMAIL -- " + error);
        console.log('FAILED TO SEND EMAIL --', error);
    });
});
