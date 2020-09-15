import { get } from 'jquery';
import { BlogPost, ProjectCard } from './classes';

const sheetId = '11ABDt_dPctf9vJJI9LXObufyE9YsFU5nBC0Q-ul1SDs';
const projectsAsJSON = `https://spreadsheets.google.com/feeds/list/${sheetId}/1/public/values?alt=json`;
const blogsAsJSON = `https://spreadsheets.google.com/feeds/list/${sheetId}/2/public/values?alt=json`;
const $projectCardsArr = $('.card');

$(document).ready(() => {
	console.log('main.js');
	console.log($projectCardsArr);
	console.log($projectCardsArr.eq(0)[0]);
	console.log($projectCardsArr.eq(1)[0]);

	const sheetsURLs = {
		projects: projectsAsJSON,
		blogs: blogsAsJSON,
	};

	const getDataFromSheet = (sheet) => {
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
						url: item.gsx$url.$t,
					};
				});
			} else if (data.feed.title.$t === 'Blogs') {
				rowItems = data.feed.entry.map((item) => {
					return {
						type: item.gsx$contenttype.$t,
						title: item.gsx$title.$t,
						tags: item.gsx$tags.$t,
						url: item.gsx$tags.$t,
					};
				});
			}
			return logData(rowItems);
		});
	};

	getDataFromSheet(sheetsURLs.projects).then((data) => {
		renderData(data);
	});

	getDataFromSheet(sheetsURLs.blogs).then((data) => {
		renderData(data);
	});
});

function logData(rows) {
	// console.log(`${rows[0].type} rows -`, rows);
	return rows;
}

function renderData(data) {
	if (data[0].type === 'blog') {
		data.forEach((row) => {
			const newPost = new BlogPost(row.title, row.tag, row.url);
			console.log(newPost);
			return newPost;
		});
	} else {
		data.forEach((row) => {
			const newCard = new ProjectCard(
				row.title,
				row.image,
				row.description,
				row.techStack,
				row.url
			);
			console.log(newCard);
			return newCard;
		});
	}
}

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
	let last_scroll_top = 0;
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
// function logData(data) {
// 	console.log(`app - ${data[0].type}`, data);
// 	return data;
// }
