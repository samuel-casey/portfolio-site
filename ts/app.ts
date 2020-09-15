/////////////////////////////////////////////////////////////
/////////////////////////// DATA ////////////////////////////
/////////////////////////////////////////////////////////////

import { BlogPost, ProjectCard } from './contentClasses';

const sheetId: string = '11ABDt_dPctf9vJJI9LXObufyE9YsFU5nBC0Q-ul1SDs';
const projectsAsJSON: string = `https://spreadsheets.google.com/feeds/list/${sheetId}/1/public/values?alt=json`;
const blogsAsJSON: string = `https://spreadsheets.google.com/feeds/list/${sheetId}/2/public/values?alt=json`;
const $projectCardsArr = $('.card');

interface WorkbookObject {
	blogs: object;
	projects: object;
}

$(document).ready(() => {
	console.log(BlogPost, ProjectCard);

	const sheetsURLs = {
		projects: projectsAsJSON,
		blogs: blogsAsJSON,
	};

	// const workbookData: { [k: string]: any } = {};
	const workbookData: [{}];

	const testArr: object[] = [{}];

	testArr.push({ test: 'test' });

	console.log('top testArr = ', testArr[1]);

	///////// GET PROJECT DATA ///////////
	let projectObjects: object[] = [];
	let blogObjects: object[] = [];

	const contentArraysObj: { [k: string]: any } = {};
	const projCards = [];
	const blogPosts = [];

	// let workbookData;

	// loop through URLS for projects and blogs sheets and do an AJAX request for each
	for (let i in sheetsURLs) {
		$.ajax({ url: sheetsURLs[i] })
			.then((sheetData) => {
				// create a new property for the object workbookData named 'projects' or 'blogs', and assign the current sheet's data to that property
				workbookData.push({ sheetData });
				return workbookData;
			})
			// .then((workbookData) => {
			// 	console.log(workbookData.blogs);
			// 	// create a new object to house the data to be rendered on the page (the sheet's columns)
			// 	const dataForPage = {};
			// 	// create a new prop in dataForPage titled either 'projects' or 'blogs', and set its value equal to an Array of the table rows
			// 	dataForPage[i] = workbookData[i].feed.entry;
			// 	console.log('dataForPage', dataForPage);
			// 	// loop through each Array item (row in the sheet), check its contentType, and create an object for each item
			// 	for (let contentItem of dataForPage[i]) {
			// 		let contentType: string = contentItem.gsx$contenttype.$t;

			// 		// create new blogObject for each row in the Blogs sheet
			// 		if (contentType === 'blog') {
			// 			let blogObj = {
			// 				type: contentItem.gsx$contenttype.$t,
			// 				title: contentItem.gsx$title.$t,
			// 				tags: contentItem.gsx$tags.$t,
			// 				url: contentItem.gsx$tags.$t,
			// 			};

			// 			// push new blog object to an array of all blogObjects
			// 			blogObjects.push(blogObj);
			// 			console.log('blogObjects - ', blogObjects);

			// 			// push blogObjects to an array called contentArrayObjs
			// 			if (!contentArraysObj.blogs) {
			// 				contentArraysObj.blogs = blogObjects;
			// 			}

			// 			// create new projectObject for each row in the Projects sheet
			// 		} else if (contentType === 'project') {
			// 			let projectObj = {
			// 				type: contentItem.gsx$contenttype.$t,
			// 				title: contentItem.gsx$title.$t,
			// 				image: contentItem.gsx$image.$t,
			// 				techStack: contentItem.gsx$techstack.$t,
			// 				description: contentItem.gsx$description.$t,
			// 				url: contentItem.gsx$url.$t,
			// 			};

			// 			// push new project object to an array of all projectObjects
			// 			projectObjects.push(projectObj);
			// 			console.log('projectObjects - ', projectObjects);

			// 			// push projectObjects to an array called contentArrayObjs
			// 			if (!contentArraysObj.projects) {
			// 				contentArraysObj.projects = projectObjects;
			// 			}
			// 			console.log('cArrsObj - ', contentArraysObj);
			// 		}
			// 	}
			// 	// return contentArraysObj -- which will be used to access each individual list of projects/blogs
			// 	return contentArraysObj;
			// })
			// .then((contentArraysObj) => {
			// 	const projectList = contentArraysObj.projects;
			// 	const blogList = contentArraysObj.blogs;

			// 	console.log('list -', projectList);
			// 	console.log('list - ', blogList);

			// 	// create a new instance of projectClass for each project in the projectList
			// 	for (let projIndex in projectList) {
			// 		const projToRender = new ProjectCard(
			// 			projectList[projIndex].title,
			// 			projectList[projIndex].image,
			// 			projectList[projIndex].description,
			// 			projectList[projIndex].techStack,
			// 			projectList[projIndex].url
			// 		);
			// 		projCards.push(projToRender);
			// 	}

			// 	// create a new instance of objectClass for each project in the objectList
			// 	for (let blogIndex in blogList) {
			// 		const blogToRender = new BlogPost(
			// 			blogList[blogIndex].title,
			// 			blogList[blogIndex].tag,
			// 			blogList[blogIndex].url
			// 		);
			// 		blogPosts.push(blogToRender);
			// 	}
			// })
			.catch((error) => {
				console.log(error);
			});
	}

	console.log('workbookData', workbookData);

	console.log('wbData.blogs', workbookData[2]);

	// testArr.push({ c: 'c' });
	// console.log('testArray', testArr[1]);

	const renderBlogPosts = function (blogsToRender) {
		console.log(blogsToRender);
		console.log('AAAA');
		for (let blog of blogsToRender) {
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

const $dropdownMenu = $('header ul#dropdownMenu');
const $hamburgerButton = $('i.fas.fa-bars');

$hamburgerButton.on('click', () => {
	$dropdownMenu.slideToggle(500);
});

//Found this function here: bootstrap-menu.com/detail-smart-hide.html
// the way it works is by checking for the navbar's height

// add padding top to show content behind navbar
https: $('body').css('padding-top', $('.navbar').outerHeight() + 'px');

const $navbar = $('.smart-scroll');

// detect scroll top or down
if ($navbar.length > 0) {
	// check if element exists
	let last_scroll_top: number = 0;
	$(window).on('scroll', function () {
		let scroll_top = $(this).scrollTop();
		if (scroll_top < last_scroll_top) {
			$navbar.removeClass('scrolled-down').addClass('scrolled-up');
		} else {
			$navbar.removeClass('scrolled-up').addClass('scrolled-down');
		}
		last_scroll_top = scroll_top;
	});
}

/// SUBMIT CONTACT FORM

$('article#contactContainer form').on('click', (event) => {
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
