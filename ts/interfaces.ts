// template for project objects
interface ProjectSheetRow {
	type: string;
	title: string;
	image: string;
	techStack: string;
	description: string;
	siteUrl: string;
	repoUrl: string;
	infoUrl: string;
}

// template for blog objects
interface BlogSheetRow {
	type: string;
	title: string;
	tags: string;
	url: string;
}

interface SheetsURLs {
	projects: string;
	blogs: string;
}

export { ProjectSheetRow, BlogSheetRow, SheetsURLs };
