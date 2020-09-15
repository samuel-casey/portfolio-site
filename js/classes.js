class BlogPost {
	// title: string;
	// tag: string;
	// url: string;
	constructor(title, tag, url) {
		this.title = title;
		this.tag = tag;
		this.url = url;
	}
}

class ProjectCard {
	// title: string;
	// image: string;
	// description: string;
	// techStack: string;
	// url: string;
	constructor(title, image, description, techStack, siteUrl, repoUrl, infoUrl) {
		this.title = title;
		this.image = image;
		this.description = description;
		this.techStack = techStack;
		this.siteUrl = siteUrl;
		this.repoUrl = repoUrl;
		this.infoUrl = infoUrl;
	}
}

export { BlogPost, ProjectCard };
