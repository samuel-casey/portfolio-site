# Project Overview

## Project Schedule

| Day   | Deliverable                                  | Status     |
| ----- | -------------------------------------------- | ---------- |
| Day 1 | Project Description                          | Complete   |
| Day 1 | Wireframes / Priority Matrix / Timeline      | Complete   |
| Day 1 | Core Application Structure (HTML, CSS, etc.) | Complete   |
| Day 2 | Basic JS                                     | Complete   |
| Day 3 | Fancy CSS (carousel, section expansion btns) | Complete   |
| Day 4 | Firebase hosting, DB, etc.                   | Complete   |
| Day 5 | Final Touches                                | Incomplete |
| Day 6 | Present                                      | Incomplete |

---

## Project Description

A portfolio site to house my projects, resume, writing, and a contact form.

## Google Sheets

Projects: https://docs.google.com/spreadsheets/d/11ABDt_dPctf9vJJI9LXObufyE9YsFU5nBC0Q-ul1SDs/edit#gid=0

Code for API call

```

const projectSheetId = '11ABDt_dPctf9vJJI9LXObufyE9YsFU5nBC0Q-ul1SDs';

const projectSheetAsJSON = `https://spreadsheets.google.com/feeds/list/${projectSheetId}/od6/public/values?alt=json`;
```

Writing: https://docs.google.com/spreadsheets/d/1IxBBffPqPIrWtwXES5KIx0Tgmp0pkmVpov-2vShcIKg/edit#gid=0

Code for API call

```
const writingSheetId = '1IxBBffPqPIrWtwXES5KIx0Tgmp0pkmVpov-2vShcIKg'

const writingSheetAsJSON = `https://spreadsheets.google.com/feeds/list/${writingSheetId}/od6/public/values?alt=json`;
```

## Wireframes

[Mobile mockup](https://www.figma.com/file/JB6GqmSZr7pw6Ii8SYEfvl/Sam-Casey-Mobile-Portfolio-Mockup?node-id=0%3A1)

[Tablet/Desktop mockup](https://www.figma.com/file/6IdD6UC5LmnGTkX4Xg9ivB/Sam-Casey-Tablet-Desktop-Portfolio-Mockup?node-id=0%3A1)

## Time/Priority Matrix \*\*

[Time/Priority Matrix](https://res.cloudinary.com/scimgcloud/image/upload/v1600035649/4E277634-FF82-4663-B6BA-161F7F497FBC_fvwhya.jpg)

[Project Board](https://www.notion.so/3e36fb2a464f4f52ac76f4eb817e3169?v=b300bc85d2af455097276496b9893ed0)

### MVP/PostMVP - 5min

#### MVP

- Pull project data using google json api
- Pull writing data using google json api
- Render project data on page
- Render writing data on page
- Contact form that sends emails to me on submit
- Writing section
- Projects section
- About section
- Basic HTML
- Media queries for Tablet & Desktop
- GitHub Pages hosting
- Expand writing section button
- Expand projects section button
- About section carousel to cycle through professional and personal cards

#### PostMVP

- Publish short medium article about learning TypeScript to add to writing section of site
- Form to submit new projects and writing
- Firebase Hosting
- Firebase DB for projects and writing

## Functional Components

_italics = new types of functions for me_

Fetch projects

```
DEFINE project Class
GET projects from API url
FIND title, techstack, description, url
CREATE Project Class instances for projects
```

Render projects

```
COUNT instances of project class
CREATE page elements for projects
RENDER title, techstack, description url to project card templates
```

Fetch writing

```
DEFINE writing Class
GET writing posts from API url
FIND title, url, tag
CREATE Project Class instances for writing posts
```

Render writing

```
COUNT instances of project class
CREATE page elements for projects
RENDER title, url, tag to project card templates
```

Toggle about card

```
CHECK state of about card
SWITCH state of about card
```

_Expand project section_

```
CHECK state of project section
CHANGE css of project section
CALL render function on new projects
```

_Expand writing section_

```
CHECK state of writing section
CHANGE css of writing section
CALL render function on new writing posts
```

_Send email on Contact form submit_

```
GET name, message, email from form
SEND email to my account
```

#### MVP

| Component               | Priority | Estimated Time | Actual Time |
| ----------------------- | :------: | :------------: | :---------: |
| Hamburger               |    H     |      1hr       |     2hr     |
| Projects Section        |    H     |      2hr       |     1hr     |
| Regular Nav             |    M     |      1hr       |     1hr     |
| Contact Form            |    H     |      2hr       |     1hr     |
| About section           |    H     |      3hr       |     3hr     |
| Working with API (tot.) |    H     |      2hr       |     5hr     |
| Media queries           |    H     |      3hr       |     4hr     |
| Social Media Icons      |    M     |      1hr       |    15min    |
| Main CSS                |    H     |      4hr       |     2hr     |
| **Total**               | **N/A**  |   **19hrs**    |  **21hrs**  |

#### PostMVP

| Component            | Priority | Estimated Time | Actual Time |
| -------------------- | :------: | :------------: | :---------: |
| Github Pages         |    H     |      1hr       |     N/A     |
| Refactor to TS       |    H     |      3hr       |     6hr     |
| Firebase hosting     |    M     |      2hr       |   1.5hrs    |
| Firebase DB          |    H     |      3hr       |     N/A     |
| Firebase upload form |    L     |      4hr       |     N/A     |
| Medium Article       |    L     |      1hr       |     N/A     |
| **Total**            | **N/A**  |   **11hrs**    | **7.5hrs**  |

## Additional Libraries

Bootstrap
Sass

## Code Snippet

Below is a BlogPost class that takes properties provided by the AJAX call to my google sheets workbook, and displays renders a new blog post element to the page using the method `createNewBlogPostElement()`. I'm proud of this because it's the first time I've really harnessed the power of Classes in a project, and I have it in a separate module, which makes my `app` file a lot cleaner.

```
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

		$blogPost.attr('href', this.url);
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
```

## Issues and Resolutions

**createNewBlogPost() method works with jQuery elements assigned a type of 'object', but I get an error in the terminal: `Property 'append' does not exist on type 'object'.**`

- instead of defining `jQuery` objects as `jQuery-object: object` i need to assign them a type of **`JQuery`** , which lets TypeScript know it should expect a specific type of object, a JQuery object, which is defined via an **interface**, that I imported when I ran npm install @types/jquery when I first set up the project

**- Ran into error: TS2355: A function whose declared type is neither 'void' nor 'any' must return a value.**

- Used the syntax: return {object} as SheetRow interface, instead of asserting in the function declaration that the function should should return SheetRow interface

**Couldn't use 'this' to refer to the contact form in the EmailJS API call when I refactored it to TS**

- Needed to use a more specific type declaration -- JQuery<HTMLFormElement>
