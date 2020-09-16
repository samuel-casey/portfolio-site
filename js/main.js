import { STATUS_CODES } from 'http';
import { get } from 'jquery';
import { BlogPost, ProjectCard } from './classes';

const sheetId = '11ABDt_dPctf9vJJI9LXObufyE9YsFU5nBC0Q-ul1SDs';
const projectsAsJSON = `https://spreadsheets.google.com/feeds/list/${sheetId}/1/public/values?alt=json`;
const blogsAsJSON = `https://spreadsheets.google.com/feeds/list/${sheetId}/2/public/values?alt=json`;
const $projectCardsArr = $('.card');
const $blogsArr = $('.blogPost');
// const $cardTitle = $projectCardsArr.eq(0).find('h5.card-title');

$(document).ready(() => {
	console.log('main.js');

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
			const newPost = new BlogPost(row.title, row.tags, row.url);

			const $blogPost = $blogsArr.eq(data.indexOf(row));
			const $blogTitle = $blogPost.find('p.blogTitle');
			const $blogTag = $blogPost.find('.blogTag');

			console.log(newPost.url);
			console.log($blogPost.attr('href'));
			$blogPost.attr('href', newPost.url);
			console.log($blogPost.attr('href'));
			$blogTitle.text(newPost.title);
			$blogTag.text(newPost.tag);
			$blogTag.addClass(newPost.tag);

			return newPost;
		});
	} else {
		data.forEach((row) => {
			const newCard = new ProjectCard(
				row.title,
				row.image,
				row.description,
				row.techStack,
				row.siteUrl,
				row.repoUrl,
				row.infoUrl
			);
			const $card = $projectCardsArr.eq(data.indexOf(row));
			const $cardImg = $card.find('img');
			const $cardTitle = $card.find('h5.card-title');
			const $cardTechStack = $card.find('p.techStack');
			const $cardDescription = $card.find('p.card-text');
			const $cardRepoLink = $card.find("a:contains('Code')");
			// .eq(data.indexOf(row));
			const $cardSiteLink = $card.find("a:contains('Link')");
			// .eq(data.indexOf(row));
			const $cardInfoLink = $card.find("a:contains('Info')");
			// .eq(data.indexOf(row));

			$cardImg.attr('src', newCard.image);
			$cardTitle.text(newCard.title);
			$cardTechStack.text(newCard.techStack);
			$cardDescription.text(newCard.description);
			$cardRepoLink.attr('href', newCard.repoUrl);
			$cardSiteLink.attr('href', newCard.siteUrl);
			$cardInfoLink.attr('href', newCard.infoUrl);

			return newCard;
		});
	}
}

/////////////////////////////////////////////////////////////
/////////////////// DOM MANIPULATION ////////////////////////
/////////////////////////////////////////////////////////////

const $dropdownMenu = $('header ul#dropdownMenu');
const $hamburgerButton = $('i.fas.fa-bars');
const $hiddenProjects = $('div.card.hidden');
const $hiddenBlogs = $('a.blogPost.hidden');
const $showMoreProjects = $('#moreProjects');
const $showMoreBlogs = $('#moreBlogs');

console.log($hiddenProjects);

//////// SHOW MORE PROJECTS
$showMoreProjects.on('click', () => {
	for (let proj in $hiddenProjects) {
		$hiddenProjects.eq(proj).removeClass('hidden').addClass('visible');
	}
});

/////// SHOW MORE BLOGS

$showMoreBlogs.on('click', () => {
	for (let proj in $hiddenBlogs) {
		$hiddenBlogs.eq(proj).removeClass('hidden').addClass('visible');
	}
});

/////// TOGGLE HAMBURGER MENU

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
