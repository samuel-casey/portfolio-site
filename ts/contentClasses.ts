class BlogPost {
	title: string;
	tag: string;
	url: string;
	hide: boolean;
	constructor(title: string, tag: string, url: string, hide: boolean) {
		this.title = title;
		this.tag = tag;
		this.url = url;
		this.hide = hide;
	}

	createNewBlogPostElement() {
		// create elements of blog post
		const $blogPost: JQuery = $('<a>')
			.addClass('blogPost')
			.attr('target', 'blank');
		const $blogTitle: JQuery = $('<p>').addClass('blogTitle');
		const $blogTag: JQuery = $('<div>').addClass('blogTag');

		// combine elements of new blog post together
		$blogPost.append($blogTitle).append($blogTag);

		// add data to new blog post

		$blogPost.attr('src', this.url);
		$blogTitle.text(this.title);
		$blogTag.text(this.tag).addClass(this.tag);

		// add a class of hidden if value of 'hide' passed to instance in main.js === true
		this.hide === true ? $blogPost.addClass('hidden') : null;

		// find blogs container on page
		const $blogsContainer: JQuery = $('div.blogElements');

		// append new blog post to page
		$blogsContainer.append($blogPost);
	}
}

class ProjectCard {
	title: string;
	image: string;
	description: string;
	techStack: string;
	siteUrl: string;
	repoUrl: string;
	infoUrl: string;
	hide: boolean;

	constructor(
		title: string,
		image: string,
		description: string,
		techStack: string,
		siteUrl: string,
		repoUrl: string,
		infoUrl: string,
		hide: boolean
	) {
		this.title = title;
		this.image = image;
		this.description = description;
		this.techStack = techStack;
		this.siteUrl = siteUrl;
		this.repoUrl = repoUrl;
		this.infoUrl = infoUrl;
		this.hide = hide;
	}

	createNewProjectCardElement() {
		// create elements of project card
		const $newCardContainer: JQuery = $('<div>').addClass('card');
		const $cardImg: JQuery = $('<img>').addClass('card-img-top');
		const $cardBody: JQuery = $('<div>').addClass('card-body');
		const $cardTitle: JQuery = $('<h5>').addClass('card-title');
		const $cardTechStack: JQuery = $('<p>').addClass('techStack');
		const $cardText: JQuery = $('<p>').addClass('card-text');
		const $cardBodyBtns: JQuery = $('<div>').addClass('card-body-btns');
		const $codeAnchor: JQuery = $('<a>')
			.addClass('btn btn-primary')
			.text('Code');
		const $linkAnchor: JQuery = $('<a>')
			.addClass('btn btn-primary')
			.text('Link');
		const $infoAnchor: JQuery = $('<a>')
			.addClass('btn btn-primary')
			.text('Info');

		// combine elements of project card together
		$newCardContainer.append($cardImg).append($cardBody);
		$cardBody.append($cardTitle);
		$cardBody.append($cardTechStack).append($cardText);
		$cardBody.append($cardBodyBtns);
		$cardBodyBtns.append($codeAnchor).append($linkAnchor).append($infoAnchor);

		// add data to newly created card
		$cardImg.attr('src', this.image);
		$cardTitle.text(this.title);
		$cardTechStack.text(this.techStack);
		$cardText.text(this.description);
		$codeAnchor.attr('href', this.repoUrl).attr('target', 'blank');
		$linkAnchor.attr('href', this.siteUrl).attr('target', 'blank');
		$infoAnchor.attr('href', this.infoUrl).attr('target', 'blank');

		// add a class of hidden if value of 'hide' passed to instance in main.js === true
		this.hide === true ? $newCardContainer.addClass('hidden') : null;

		// find location on page to append newly created card
		const $cardsContainer: JQuery = $('article#projectsContainer').find(
			'div.cardsContainer'
		);

		// append newly created card to proper location
		$cardsContainer.append($newCardContainer);
	}
}

export { BlogPost, ProjectCard };
