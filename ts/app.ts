/////////////////////////////////////////////////////////////
/////////////////////////// DATA ////////////////////////////
/////////////////////////////////////////////////////////////

import { BlogPost, ProjectCard } from './contentClasses';

const sheetId: string = '11ABDt_dPctf9vJJI9LXObufyE9YsFU5nBC0Q-ul1SDs';
const projectsAsJSON: string = `https://spreadsheets.google.com/feeds/list/${sheetId}/1/public/values?alt=json`;
const blogsAsJSON: string = `https://spreadsheets.google.com/feeds/list/${sheetId}/2/public/values?alt=json`;

$(document).ready(() => {
	console.log(BlogPost, ProjectCard);
	const $projectCardsArr = $('.card');
	console.log($projectCardsArr);

	const sheetsURLs = {
		projects: projectsAsJSON,
		blogs: blogsAsJSON,
	};

	const workbookData = {};

	// for (let i in sheetsURLs) {
	// 	console.log(sheetsURLs[i]);
	// }

	///////// GET PROJECT DATA ///////////
	let projectObjects: object[] = [];
	let blogObjects: object[] = [];

	// loop through URLS for projects and blogs and do an AJAX request for
	for (let i in sheetsURLs) {
		$.ajax({ url: sheetsURLs[i] })
			.then((sheetData) => {
				workbookData[i] = sheetData;
				return workbookData;
			})
			.then((workbookData) => {
				const dataForPage = {};
				dataForPage[i] = workbookData[i].feed.entry;
				for (let contentItem of dataForPage[i]) {
					let contentType: string = contentItem.gsx$contenttype.$t;

					if (contentType === 'blog') {
						let blogObj = {
							type: contentItem.gsx$contenttype.$t,
							title: contentItem.gsx$title.$t,
							tags: contentItem.gsx$tags.$t,
							url: contentItem.gsx$tags.$t,
						};
						blogObjects.push(blogObj);
					} else if (contentType === 'project') {
						let projectObj = {
							type: contentItem.gsx$contenttype.$t,
							title: contentItem.gsx$title.$t,
							image: contentItem.gsx$image.$t,
							techStack: contentItem.gsx$techstack.$t,
							description: contentItem.gsx$description.$t,
							url: contentItem.gsx$url.$t,
						};
						projectObjects.push(projectObj);
					}
				}
				// console.log('before return - ', projectObjects, blogObjects);
				return populateContentArrays(projectObjects, blogObjects);
			})
			// .then((contentObjects) => {
			// 	console.log(contentObjects);
			// 	$('body').append(
			// 		$(
			// 			"<img src='https://res.cloudinary.com/scimgcloud/image/upload/v1600183447/portfolio-v2/tic-tac-bananas-resized_qhgykg.png' alt='tic-tac-bananas' />"
			// 		)
			// 	);
			// 	$('body').append(
			// 		$(
			// 			"<img src='https://res.cloudinary.com/scimgcloud/image/upload/v1600183437/portfolio-v2/tides-vis-resized_mqduwk.png' alt='tides-vis' />"
			// 		)
			// 	);
			// })
			.catch((error) => {
				console.log(error);
			});
	}
});

const populateContentArrays = function (projectsArr, blogsArr) {
	for (let project of projectsArr) {
		// const $card = ;
	}
};

/* renderContent(content) {
	LOOP THRU contentObjects.projects
	LOOP THRU contentObjects.blogs
	LOOP THRU blogsArray
		FOR EACH blog
			DECLARE new Blog
	
}

*/

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
