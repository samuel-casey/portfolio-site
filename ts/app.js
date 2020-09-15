/////////////////////////////////////////////////////////////
/////////////////////////// DATA ////////////////////////////
/////////////////////////////////////////////////////////////
var sheetId = '11ABDt_dPctf9vJJI9LXObufyE9YsFU5nBC0Q-ul1SDs';
var projectsAsJSON = "https://spreadsheets.google.com/feeds/list/" + sheetId + "/1/public/values?alt=json";
var blogsAsJSON = "https://spreadsheets.google.com/feeds/list/" + sheetId + "/2/public/values?alt=json";
// const apiUrl: string = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values`;
https: $(document).ready(function () {
    var sheetsURLs = {
        projects: projectsAsJSON,
        blogs: blogsAsJSON
    };
    var workbookData = {};
    // for (let i in sheetsURLs) {
    // 	console.log(sheetsURLs[i]);
    // }
    ///////// GET PROJECT DATA ///////////
    var projectObjects = [];
    var blogObjects = [];
    var _loop_1 = function (i) {
        $.ajax({ url: sheetsURLs[i] })
            .then(function (sheetData) {
            workbookData[i] = sheetData;
            return workbookData;
        })
            .then(function (workbookData) {
            var dataForPage = {};
            dataForPage[i] = workbookData[i].feed.entry;
            for (var _i = 0, _a = dataForPage[i]; _i < _a.length; _i++) {
                var contentItem = _a[_i];
                var contentType = contentItem.gsx$contenttype.$t;
                if (contentType === 'blog') {
                    var blogObj = {
                        type: contentItem.gsx$contenttype.$t,
                        title: contentItem.gsx$title.$t,
                        tags: contentItem.gsx$tags.$t,
                        url: contentItem.gsx$tags.$t
                    };
                    blogObjects.push(blogObj);
                }
                else if (contentType === 'project') {
                    var projectObj = {
                        type: contentItem.gsx$contenttype.$t,
                        title: contentItem.gsx$title.$t,
                        image: contentItem.gsx$image.$t,
                        techStack: contentItem.gsx$techstack.$t,
                        description: contentItem.gsx$description.$t,
                        url: contentItem.gsx$url.$t
                    };
                    projectObjects.push(projectObj);
                }
            }
            return { projects: projectObjects, blogs: blogObjects };
        })
            .then(function (contentObjects) {
            console.log(contentObjects);
            $('body').append($('<p>').text(contentObjects.projects[0].title));
        })["catch"](function (error) {
            console.log(error);
        });
    };
    // loop through URLS for projects and blogs and do an AJAX request for
    for (var i in sheetsURLs) {
        _loop_1(i);
    }
});
// let projects = data.feed.entry.map((project) => {
// 	// here we return a new object with keys names of our own choosing and the needed values
// 	return {
// 		title: project.gsx$title.$t,
// 		image: project.gsx$image.$t,
// 		techStack: project.gsx$techstack.$t,
// 		description: project.gsx$description.$t,
// 		url: project.gsx$url.$t,
// 	};
// });
// //  pass the data to the app function
// // return logData(projects);
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
