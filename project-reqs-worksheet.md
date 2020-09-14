# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

| Day   | Deliverable                                  | Status     |
| ----- | -------------------------------------------- | ---------- |
| Day 1 | Project Description                          | Incomplete |
| Day 1 | Wireframes / Priority Matrix / Timeline      | Incomplete |
| Day 3 | Core Application Structure (HTML, CSS, etc.) | Incomplete |
| Day 4 | MVP & Bug Fixes                              | Incomplete |
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

- [Mobile](https://www.figma.com/file/JB6GqmSZr7pw6Ii8SYEfvl/Sam-Casey-Mobile-Portfolio-Mockup?node-id=0%3A1)
- [Tablet/Desktop](https://www.figma.com/file/6IdD6UC5LmnGTkX4Xg9ivB/Sam-Casey-Tablet-Desktop-Portfolio-Mockup?node-id=0%3A1)

## Time/Priority Matrix \*\*

[Link](https://res.cloudinary.com/jkeohan/image/upload/a_270/v1591621734/project1_matrix_ocy5gc_h1kg0m.jpg)

[Time/Priority Matrix](https://res.cloudinary.com/scimgcloud/image/upload/v1600035649/4E277634-FF82-4663-B6BA-161F7F497FBC_fvwhya.jpg)

[Project Board](https://www.notion.so/3e36fb2a464f4f52ac76f4eb817e3169?v=b300bc85d2af455097276496b9893ed0)

### MVP/PostMVP - 5min

#### MVP (examples)

- Pull project data using google json api
- Pull writing data using google json api
- Render project data on page
- Render writing data on page

#### PostMVP

- Anything else that is not MVP

## Functional Components

Fetch projects

Render projects

Fetch writing

Render writing

Toggle about card

Expand project section

Expand writing section

Send email/capture email

#### MVP

| Component               | Priority | Estimated Time | Actual Time |
| ----------------------- | :------: | :------------: | :---------: |
| Hamburger               |   LOW    |      1hr       |     hr      |
| Project Previews        |    H     |      3hr       |     hr      |
| Regular Nav             |    H     |      1hr       |     hr      |
| Adding Form             |    H     |     1.5hr      |     hr      |
| Other sections and flex |    M     |      3hr       |     hr      |
| Working with API        |    H     |      3hrs      |     hr      |
| Responsive              |    H     |      3hr       |     hr      | hr |
| Social Media Icons      |    L     |      1hr       |     hr      |
| Total                   |    H     |    15.5hrs     |     hrs     |

#### PostMVP

| Component             | Priority | Estimated Time | Actual Time |
| --------------------- | :------: | :------------: | :---------: |
| Project Hover         |    L     |      3hr       |     -hr     | hr |
| Banner letters wiggle |    L     |      1hr       |     hr      |
| Interactive Banner    |    M     |      4hr       |     hr      |
| Materialize           |    H     |      4hr       |     -hr     | hr |
| Bootstrap             |    H     |      4hr       |     hr      |
| Make own icon         |    L     |      4hr       |     hr      |
| Total                 |    H     |     20hrs      |     hrs     |

## Additional Libraries

Use this section to list all supporting libraries and thier role in the project.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions

Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....

**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier  
**RESOLUTION**: Missing comma after first object in sources {} object
