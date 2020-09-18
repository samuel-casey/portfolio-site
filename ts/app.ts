// ====== IMPORT CLASSES & INTERFACES ====== //
import { BlogPost, ProjectCard } from './classes';
import { ProjectSheetRow, BlogSheetRow, SheetsURLs } from './interfaces';
import emailjs from 'emailjs-com';

const sheetId: string = '11ABDt_dPctf9vJJI9LXObufyE9YsFU5nBC0Q-ul1SDs';
const projectsAsJSON: string = `https://spreadsheets.google.com/feeds/list/${sheetId}/1/public/values?alt=json`;
const blogsAsJSON: string = `https://spreadsheets.google.com/feeds/list/${sheetId}/2/public/values?alt=json`;
const NUM_VISIBLE_PROJECTS_ON_LOAD: number = 2;
const NUM_VISIBLE_BLOGS_ON_LOAD: number = 2;
const $showMoreProjects: JQuery = $('#moreProjects');
const $showMoreBlogs: JQuery = $('#moreBlogs');

const sheetsURLs: SheetsURLs = {
	projects: projectsAsJSON,
	blogs: blogsAsJSON,
};

$(document).ready(() => {
	///////// GET PROJECT DATA ///////////
	getDataFromSheet(sheetsURLs.projects)
		.then((projects): void => {
			return renderData(projects);
		})
		.then((): void => {
			const $hiddenProjects: JQuery = $('div.card.hidden');

			// add click event to 'more projects' button to show hidden projects onClick
			$showMoreProjects.on('click', (): void => {
				for (let i = 0; i < $hiddenProjects.length; i++) {
					const $hiddenProj = $hiddenProjects.eq(i);

					$hiddenProj.removeClass('hidden').addClass('visible');
				}
			});
		});

	getDataFromSheet(sheetsURLs.blogs)
		.then((blogs): void => {
			return renderData(blogs);
		})
		.then((): void => {
			const $hiddenBlogs: JQuery = $('a.blogPost.hidden');

			$showMoreBlogs.on('click', (): void => {
				for (let i = 0; i < $hiddenBlogs.length; i++) {
					const $hiddenBlog = $hiddenBlogs.eq(i);

					$hiddenBlog.removeClass('hidden').addClass('visible');
				}
			});
		});

	// if (menuDown) {
	// 	$dropdownMenu.slideDown(500);
	// } else {
	// 	$dropdownMenu.slideUp(500);
	// }
});

/*==============
DOM MANIPULATION
================*/

// add padding top to show content behind navbar
$('body').css('padding-top', $('.navbar').outerHeight() + 'px');

let menuDown: boolean = false;
const $dropdownMenu = $('header ul#dropdownMenu');
const $hamburgerButton = $('i.fas.fa-bars');



function menuGoDown() {
	// console.log('menuDown- ', menuDown);
	// menuDown = !menuDown;
}

$hamburgerButton.on('click', () => {
	$dropdownMenu.slideToggle(500);
});

// Found this function here: bootstrap-menu.com/detail-smart-hide.html
// it works by checking to see if the window's current height is < the window's last height
//// if current height < last height, user scrolled up --> show navbar
//// if current height > last height, user scrolled down --> hide navbar

// detect scroll top or down

const $navbar = $('.smart-scroll');

// detect scroll top or down
if ($navbar.length > 0) {
	// check if element exists
	let last_scroll_top: number = 0;
	$(window).on('scroll', function () {
		let scroll_top = $(this).scrollTop();
		// if the current height is less than the last height, the user scrolled up and the class scrolled-up should be added
		if (scroll_top < last_scroll_top) {
			$navbar.removeClass('scrolled-down').addClass('scrolled-up');
			// if the current height is greater than the last height, the user scrolled down and the class scrolled-up should be added
		} else {
			$navbar.removeClass('scrolled-up').addClass('scrolled-down');
			// // $dropdownMenu.triggerHandler('click');
			// console.log('tHandler');
		}
		last_scroll_top = scroll_top;
	});
}

/// SUBMIT CONTACT FORM

/*==================================================================================================
FUNCTIONS TO FETCH DATA FROM GOOGLE SHEETS AND RENDER NEW PAGE ELEMENTS BASED ON THE DATA RETRIEVED 
==================================================================================================*/

// RENDER PAGE ELEMENTS
function renderData(data: ProjectSheetRow[] | BlogSheetRow[]) {
	if (data[0].type === 'project') {
		data.forEach((row, index) => {
			let newCard;
			if (index < NUM_VISIBLE_PROJECTS_ON_LOAD) {
				newCard = new ProjectCard(
					row.title,
					row.image,
					row.description,
					row.techStack,
					row.siteUrl,
					row.repoUrl,
					row.infoUrl,
					false
				);
			} else {
				newCard = new ProjectCard(
					row.title,
					row.image,
					row.description,
					row.techStack,
					row.siteUrl,
					row.repoUrl,
					row.infoUrl,
					true
				);
			}

			newCard.createNewProjectCardElement();

			return newCard;
		});
	}

	if (data[0].type === 'blog') {
		data.forEach((row, index) => {
			let newBlogPost;
			if (index < NUM_VISIBLE_BLOGS_ON_LOAD) {
				newBlogPost = new BlogPost(row.title, row.tags, row.url, false);
			} else {
				newBlogPost = new BlogPost(row.title, row.tags, row.url, true);
			}
			newBlogPost.createNewBlogPostElement();

			return newBlogPost;
		});
	}
}

// make an AJAX call to the google sheets API and return a blog or project object
function getDataFromSheet(sheet: string) {
	return $.ajax({ url: sheet }).then((data) => {
		let rows;

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
					infoUrl: item.gsx$infourl.$t,
				} as ProjectSheetRow;
			});
		}

		if (data.feed.title.$t === 'Blogs') {
			rows = data.feed.entry.map(function (item) {
				return {
					type: item.gsx$contenttype.$t,
					title: item.gsx$title.$t,
					tags: item.gsx$tags.$t,
					url: item.gsx$url.$t,
				} as BlogSheetRow;
			});
		}
		return rows;
	});
}

const $contactForm: JQuery<HTMLFormElement> = $('#contactForm');

const serviceID: string = 'service_yvxcdkg';
const templateID: string = 'template_1z4c1oa';
const userID: string = 'user_NEvPQoryWpJOh3UHul6iB';

emailjs.init(userID);

$contactForm.on('submit', function (event) {
	event.preventDefault();

	emailjs.sendForm(serviceID, templateID, this).then(
		function (response) {
			const name = $contactForm.find("input[name='name']").val();
			alert(
				`Thanks for your email, ${name}, I'll do my best to get back to you within 24 hours! \n\nBest, Sam`
			);
		},
		function (error) {
			alert(`FAILED TO SEND EMAIL -- ${error}`);
			console.log('FAILED TO SEND EMAIL --', error);
		}
	);
});
