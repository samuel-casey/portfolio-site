"use strict";
exports.__esModule = true;
exports.ProjectCard = exports.BlogPost = void 0;
var BlogPost = /** @class */ (function () {
    function BlogPost(title, tag, url) {
        this.title = title;
        this.tag = tag;
        this.url = url;
    }
    return BlogPost;
}());
exports.BlogPost = BlogPost;
var ProjectCard = /** @class */ (function () {
    function ProjectCard(title, image, description, techStack, url) {
        this.title = title;
        this.image = image;
        this.description = description;
        this.techStack = techStack;
        this.url = url;
    }
    return ProjectCard;
}());
exports.ProjectCard = ProjectCard;
