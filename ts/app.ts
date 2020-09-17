import { BlogPost, ProjectCard } from './contentClasses';

const sheetId: string = '11ABDt_dPctf9vJJI9LXObufyE9YsFU5nBC0Q-ul1SDs';
const projectsAsJSON: string = `https://spreadsheets.google.com/feeds/list/${sheetId}/1/public/values?alt=json`;
const blogsAsJSON: string = `https://spreadsheets.google.com/feeds/list/${sheetId}/2/public/values?alt=json`;

// const sheetsURLs: object = {
// 	projects: string = projectsAsJSON,
// 	blogs: string = blogsAsJSON,
// };

$(document).ready(() => {
	console.log(sheetsURLs);

	const newBlogPost = new BlogPost(
		'I kinda understand interfaces better now',
		'tag',
		'https://google.com',
		false
	);

	newBlogPost.createNewBlogPostElement();

	const newProjectCard = new ProjectCard(
		'example',
		'#',
		'example description',
		'TYPESCRIPT BABY!!!',
		'#',
		'#',
		'#',
		false
	);

	newProjectCard.createNewProjectCardElement();

	///////// GET PROJECT DATA ///////////

	//////// RENDER PAGE ELEMENTS ////////
});

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
