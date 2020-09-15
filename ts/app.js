"use strict";
/////////////////////////////////////////////////////////////
/////////////////////////// DATA ////////////////////////////
/////////////////////////////////////////////////////////////
exports.__esModule = true;
var contentClasses_1 = require("./contentClasses");
var sheetId = '11ABDt_dPctf9vJJI9LXObufyE9YsFU5nBC0Q-ul1SDs';
var projectsAsJSON = "https://spreadsheets.google.com/feeds/list/" + sheetId + "/1/public/values?alt=json";
var blogsAsJSON = "https://spreadsheets.google.com/feeds/list/" + sheetId + "/2/public/values?alt=json";
var $projectCardsArr = $('.card');
$(document).ready(function () {
    console.log(contentClasses_1.BlogPost, contentClasses_1.ProjectCard);
    var sheetsURLs = {
        projects: projectsAsJSON,
        blogs: blogsAsJSON
    };
    // const workbookData: { [k: string]: any } = {};
    var workbookData = [{}];
    var testArr = [{}];
    testArr.push({ test: 'test' });
    console.log('top testARr = ', testArr[1]);
    ///////// GET PROJECT DATA ///////////
    var projectObjects = [];
    var blogObjects = [];
    var contentArraysObj = {};
    var projCards = [];
    var blogPosts = [];
    // let workbookData;
    // loop through URLS for projects and blogs sheets and do an AJAX request for each
    for (var i in sheetsURLs) {
        $.ajax({ url: sheetsURLs[i] })
            .then(function (sheetData) {
            // create a new property for the object workbookData named 'projects' or 'blogs', and assign the current sheet's data to that property
            workbookData.push({ sheetData: sheetData });
            return workbookData;
        })["catch"](function (error) {
            console.log(error);
        });
    }
    console.log('workbookData', workbookData);
    console.log('wbData.blogs', workbookData[2]);
    // testArr.push({ c: 'c' });
    // console.log('testArray', testArr[1]);
    var renderBlogPosts = function (blogsToRender) {
        console.log(blogsToRender);
        console.log('AAAA');
        for (var _i = 0, blogsToRender_1 = blogsToRender; _i < blogsToRender_1.length; _i++) {
            var blog = blogsToRender_1[_i];
            console.log(blog.title);
        }
    };
    // console.log(projCards, blogPosts);
    // renderBlogPosts(blogPosts);
    // const populateContentArrays = function (contentObjects) {
    // 	console.log(contentObjects);
    // 	for (let idx = 0; idx < $projectCardsArr.length; idx++) {
    // 		console.log($projectCardsArr.eq(idx));
    // 	}
    // };
    // populateContentArrays(contentArraysObj);
});
/* renderContent(content) {
    LOOP THRU contentObjects.projects
    LOOP THRU contentObjects.blogs
    LOOP THRU blogsArray
        FOR EACH blog
            DECLARE new Blog
    
}

*/
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
$('article#contactContainer form').on('click', function (event) {
    event.preventDefault();
});
/// FUNCTIONS
function logData(projects) {
    console.log('app - projects', projects);
    // console.log('app - blog', blogs);
    return projects;
    // the rest of your app goes here
}
// function logBlogs(blogs) {
// 	return blogs;
// }
