class BlogPost {
	title: string;
	tag: string;
	url: string;
	constructor(title, tag, url) {
		this.title = title;
		this.tag = tag;
		this.url = url;
	}
}

class ProjectCard {
	title: string;
	image: string;
	description: string;
	techStack: string;
	url: string;
	constructor(title, image, description, techStack, url) {
		this.title = title;
		this.image = image;
		this.description = description;
		this.techStack = techStack;
		this.url = url;
	}
}

export { BlogPost, ProjectCard };
