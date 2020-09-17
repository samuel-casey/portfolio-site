import { BlogPost, ProjectCard } from './classes';

// CHOOSE HOW MANY BLOGS & PROJECTS SHOULD SHOW ON PAGE LOAD
const NUM_VISIBLE_BLOGS_ON_LOAD = 2;
const NUM_VISIBLE_PROJECTS_ON_LOAD = 2;

const sheetId = '11ABDt_dPctf9vJJI9LXObufyE9YsFU5nBC0Q-ul1SDs';
const projectsAsJSON = `https://spreadsheets.google.com/feeds/list/${sheetId}/1/public/values?alt=json`;
const blogsAsJSON = `https://spreadsheets.google.com/feeds/list/${sheetId}/2/public/values?alt=json`;
const $projectCardsArr = $('.card');
const $blogsArr = $('.blogPost');

////////// LOAD DATA FROM GOOGLE SHEETS WHEN DOCUMENT READY

$(document).ready(() => {
	const sheetsURLs = {
		projects: projectsAsJSON,
		blogs: blogsAsJSON,
	};

	var docWidth = document.documentElement.offsetWidth;

	[].forEach.call(document.querySelectorAll('*'), function (el) {
		if (el.offsetWidth > docWidth) {
			console.log(el);
		}
	});

	getDataFromSheet(sheetsURLs.projects)
		.then((projectData) => {
			return renderData(projectData);
		})
		.then(() => {
			// find cards that were appended with a class of 'hidden'
			const $hiddenProjects = $('div.card.hidden');

			// add click event to 'more projects' button to show hidden projects onClick
			$showMoreProjects.on('click', () => {
				for (let proj in $hiddenProjects) {
					$hiddenProjects.eq(proj).removeClass('hidden').addClass('visible');
				}
			});
		});

	getDataFromSheet(sheetsURLs.blogs)
		.then((blogData) => {
			return renderData(blogData);
		})
		.then(() => {
			// find cards that were appended with a class of 'hidden'
			const $hiddenBlogs = $('a.blogPost.hidden');

			// add click event to 'more projects' button to show hidden projects onClick
			$showMoreBlogs.on('click', () => {
				for (let blog in $hiddenBlogs) {
					$hiddenBlogs.eq(blog).removeClass('hidden').addClass('visible');
				}
			});
		});
});

/////////////////////////////////////////////////////////////
/////////////////// DOM MANIPULATION ////////////////////////
/////////////////////////////////////////////////////////////

const $dropdownMenu = $('header ul#dropdownMenu');
const $dropdownContainer = $('div#dropdownContainer');
const $hamburgerButton = $('i.fas.fa-bars');
const $hiddenBlogs = $('a.blogPost.hidden');
const $showMoreProjects = $('#moreProjects');
const $showMoreBlogs = $('#moreBlogs');

/////// TOGGLE HAMBURGER MENU

let menuDown = false;

$hamburgerButton.on('click', () => {
	console.log('state before toggle - ', menuDown);
	$dropdownMenu.slideToggle(500);
});

// add padding top to show content behind navbar
// $('body').css('padding-top', $('.navbar').outerHeight() + 'px');

const $navbar = $('.smart-scroll');

//Found this function here: bootstrap-menu.com/detail-smart-hide.html
// the way it works is by checking for the navbar's height, seeing if

// detect scroll top or down
if ($navbar.length > 0) {
	// check if element exists
	let last_scroll_top = 0;
	$(window).on('scroll', function () {
		let scroll_top = $(this).scrollTop();
		// if the current height is less than the last height, the user scrolled up and the class scrolled-up should be added
		if (scroll_top < last_scroll_top) {
			$navbar.removeClass('scrolled-down').addClass('scrolled-up');
			// if the current height is greater than the last height, the user scrolled down and the class scrolled-up should be added
		} else if (scroll_top > last_scroll_top) {
			$navbar.removeClass('scrolled-up').addClass('scrolled-down');
		}
		last_scroll_top = scroll_top;
	});
}

/// SUBMIT CONTACT FORM ////

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// FUNCTIONS TO FETCH DATA FROM GOOGLE SHEETS AND RENDER NEW PAGE ELEMENTS BASED ON THE DATA RETRIEVED //
////////////////////////////////////////////////////////////////////////////////////////////////////////

function getDataFromSheet(sheet) {
	return $.ajax({ url: sheet }).then((data) => {
		let rowItems;
		if (data.feed.title.$t === 'Projects') {
			rowItems = data.feed.entry.map((item) => {
				return {
					type: item.gsx$contenttype.$t,
					title: item.gsx$title.$t,
					image: item.gsx$image.$t,
					techStack: item.gsx$techstack.$t,
					description: item.gsx$description.$t,
					siteUrl: item.gsx$siteurl.$t,
					repoUrl: item.gsx$repourl.$t,
					infoUrl: item.gsx$infourl.$t,
				};
			});
		} else if (data.feed.title.$t === 'Blogs') {
			rowItems = data.feed.entry.map((item) => {
				return {
					type: item.gsx$contenttype.$t,
					title: item.gsx$title.$t,
					tags: item.gsx$tags.$t,
					url: item.gsx$url.$t,
				};
			});
		}
		return rowItems;
	});
}

function renderData(data) {
	if (data[0].type === 'blog') {
		data.forEach((row, index) => {
			let newPost = new BlogPost(row.title, row.tags, row.url, false);
			if (index < NUM_VISIBLE_BLOGS_ON_LOAD) {
				newPost = new BlogPost(row.title, row.tags, row.url, false);
			} else {
				newPost = new BlogPost(row.title, row.tags, row.url, true);
			}

			newPost.createNewBlogPostElement();
			return newPost;
		});
	} else {
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

			newCard.createNewCardElement();

			return newCard;
		});
	}
}

////////////// CONTACT FORM //////////////////

const $contactForm = $('#contactForm');

emailjs.init('user_NEvPQoryWpJOh3UHul6iB');

$contactForm.on('submit', function (event) {
	event.preventDefault();

	const serviceID = 'service_yvxcdkg';
	const templateID = 'template_1z4c1oa';

	console.log(this);

	emailjs.sendForm(serviceID, templateID, this).then(
		function (response) {
			const name = $contactForm.find("input[name='name']").val();
			alert(
				`Thanks for your email, ${name}, I'll do my best to get back to you within 24 hours! \n\nBest, Sam`
			);
			console.log('SUCCESS!', response.status, response.text);
		},
		function (error) {
			console.log('FAILED...', error);
		}
	);
});
