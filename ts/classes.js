"use strict";
exports.__esModule = true;
exports.ProjectCard = exports.BlogPost = void 0;
var BlogPost = /** @class */ (function () {
    function BlogPost(title, tag, url, hide) {
        this.title = title;
        this.tag = tag;
        this.url = url;
        this.hide = hide;
    }
    BlogPost.prototype.createNewBlogPostElement = function () {
        // create elements of blog post
        var $blogPost = $('<a>')
            .addClass('blogPost')
            .attr('target', 'blank');
        var $blogTitle = $('<p>').addClass('blogTitle');
        var $blogTag = $('<div>').addClass('blogTag');
        // combine elements of new blog post together
        $blogPost.append($blogTitle).append($blogTag);
        // add data to new blog post
        $blogPost.attr('href', this.url);
        $blogTitle.text(this.title);
        $blogTag.text(this.tag).addClass(this.tag);
        // add a class of hidden if value of 'hide' passed to instance in main.js === true
        this.hide === true ? $blogPost.addClass('hidden') : null;
        // find blogs container on page
        var $blogsContainer = $('div.blogElements');
        // append new blog post to page
        $blogsContainer.append($blogPost);
    };
    return BlogPost;
}());
exports.BlogPost = BlogPost;
var ProjectCard = /** @class */ (function () {
    function ProjectCard(title, image, description, techStack, siteUrl, repoUrl, infoUrl, hide) {
        this.title = title;
        this.image = image;
        this.description = description;
        this.techStack = techStack;
        this.siteUrl = siteUrl;
        this.repoUrl = repoUrl;
        this.infoUrl = infoUrl;
        this.hide = hide;
    }
    ProjectCard.prototype.createNewProjectCardElement = function () {
        // create elements of project card
        var $newCardContainer = $('<div>').addClass('card');
        var $cardImg = $('<img>').addClass('card-img-top');
        var $cardBody = $('<div>').addClass('card-body');
        var $cardTitle = $('<h5>').addClass('card-title');
        var $cardTechStack = $('<p>').addClass('techStack');
        var $cardText = $('<p>').addClass('card-text');
        var $cardBodyBtns = $('<div>').addClass('card-body-btns');
        var $codeAnchor = $('<a>')
            .addClass('btn btn-primary')
            .text('Code');
        var $linkAnchor = $('<a>')
            .addClass('btn btn-primary')
            .text('Link');
        var $infoAnchor = $('<a>')
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
        var $cardsContainer = $('article#projectsContainer').find('div.cardsContainer');
        // append newly created card to proper location
        $cardsContainer.append($newCardContainer);
    };
    return ProjectCard;
}());
exports.ProjectCard = ProjectCard;
