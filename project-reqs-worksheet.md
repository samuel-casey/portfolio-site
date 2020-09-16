# Project Overview

## Project Schedule

| Day   | Deliverable                                  | Status     |
| ----- | -------------------------------------------- | ---------- |
| Day 1 | Project Description                          | Complete   |
| Day 1 | Wireframes / Priority Matrix / Timeline      | Complete   |
| Day 1 | Core Application Structure (HTML, CSS, etc.) | Complete   |
| Day 2 | Basic JS                                     | Complete   |
| Day 3 | Fancy CSS (carousel, section expansion btns) | Incomplete |
| Day 4 | Firebase hosting, DB, etc.                   | Incomplete |
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
| Hamburger               |    H     |      1hr       |     hr      |
| Projects Section        |    H     |      2hr       |     hr      |
| Regular Nav             |    M     |      1hr       |     hr      |
| Contact Form            |    H     |      2hr       |     hr      |
| About section           |    H     |      3hr       |     hr      |
| Working with API (tot.) |    H     |      2hr       |     hr      |
| Media queries           |    H     |      3hr       |     hr      |
| Social Media Icons      |    M     |      1hr       |     hr      |
| Main CSS                |    H     |      4hr       |     hr      |
| **Total**               | **N/A**  |   **19hrs**    |   **hrs**   |

#### PostMVP

| Component            | Priority | Estimated Time | Actual Time |
| -------------------- | :------: | :------------: | :---------: |
| Github Pages         |    H     |      1hr       |     -hr     |
| Firebase hosting     |    M     |      2hr       |     hr      |
| Firebase DB          |    H     |      3hr       |     hr      |
| Firebase upload form |    L     |      4hr       |     -hr     |
| Medium Article       |    L     |      1hr       |     hr      |
| **Total**            | **N/A**  |   **11hrs**    |   **hrs**   |

## Additional Libraries

Bootstrap
Sass

## Code Snippet

TBD

## Issues and Resolutions

TBD

#### SAMPLE.....

**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier  
**RESOLUTION**: Missing comma after first object in sources {} object
