const sheetId: string = '11ABDt_dPctf9vJJI9LXObufyE9YsFU5nBC0Q-ul1SDs';

const sheetAsJSON: string = `https://spreadsheets.google.com/feeds/list/${sheetId}/od6/public/values?alt=json`;

$(document).ready(() => {
	console.log('ready!');
	$.ajax({ url: sheetAsJSON })
		.then((data) => {
			// data.feed.entry is the array that contains our objects so we can use .map()
			// to iterate over the array
			console.log(data.feed.entry);

			let projects = data.feed.entry.map((project) => {
				// here we return a new object with keys names of our own choosing and the needed values
				return {
					title: project.gsx$title.$t,
					image: project.gsx$image.$t,
					techStack: project.gsx$techstack.$t,
					description: project.gsx$description.$t,
					url: project.gsx$url.$t,
				};
			});

			let projects = data.feed.entry.map((project) => {
				// here we return a new object with keys names of our own choosing and the needed values
				return {
					title: project.gsx$title.$t,
					image: project.gsx$image.$t,
					techStack: project.gsx$techstack.$t,
					description: project.gsx$description.$t,
					url: project.gsx$url.$t,
				};
			});

			//  pass the data to the app function
			return logData(projects);
		})
		// .then((projects) => {
		// 	for (let i in projects) {
		// 		console.log(`project${i}`, projects[i]);
		// 		$(`#title${i}`).text(`TITLE: ${projects[i].title}`);
		// 		$(`#img${i}`).text(`IMG: ${projects[i].image}`);
		// 		$(`#description${i}`).text(`DESCRIPTION: ${projects[i].description}`);
		// 		$(`#url${i}`).text(`URL: ${projects[i].url}`);
		// 	}
		// })
		.catch((error) => {
			console.log(error);
		});
});

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
function logData(projects, blogs) {
	console.log('app - projects', projects);
	console.log('app - blog', blogs);
	return [projects, blogs];
	// the rest of your app goes here
}

// function logBlogs(blogs) {
// 	return blogs;
// }
