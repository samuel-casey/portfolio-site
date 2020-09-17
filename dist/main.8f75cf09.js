// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../js/classes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectCard = exports.BlogPost = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BlogPost = /*#__PURE__*/function () {
  function BlogPost(title, tag, url, hide) {
    _classCallCheck(this, BlogPost);

    this.title = title;
    this.tag = tag;
    this.url = url;
    this.hide = hide;
  }

  _createClass(BlogPost, [{
    key: "createNewBlogPostElement",
    value: function createNewBlogPostElement() {
      // create elements of blog post
      var $blogPost = $('<a>').addClass('blogPost').attr('target', 'blank');
      var $blogTitle = $('<p>').addClass('blogTitle');
      var $blogTag = $('<div>').addClass('blogTag'); // combine elements of new blog post together

      $blogPost.append($blogTitle).append($blogTag); // add data to new blog post

      $blogPost.attr('src', this.url);
      $blogTitle.text(this.title);
      $blogTag.text(this.tag).addClass(this.tag); // add a class of hidden if value of 'hide' passed to instance in main.js === true

      this.hide === true ? $blogPost.addClass('hidden') : null; // find blogs container on page

      var $blogsContainer = $('div.blogElements'); // append new blog post to page

      $blogsContainer.append($blogPost);
    }
  }]);

  return BlogPost;
}();

exports.BlogPost = BlogPost;

var ProjectCard = /*#__PURE__*/function () {
  function ProjectCard(title, image, description, techStack, siteUrl, repoUrl, infoUrl, hide) {
    _classCallCheck(this, ProjectCard);

    this.title = title;
    this.image = image;
    this.description = description;
    this.techStack = techStack;
    this.siteUrl = siteUrl;
    this.repoUrl = repoUrl;
    this.infoUrl = infoUrl;
    this.hide = hide;
  }

  _createClass(ProjectCard, [{
    key: "createNewCardElement",
    value: function createNewCardElement() {
      // create elements of project card
      var $newCardContainer = $('<div>').addClass('card');
      var $cardImg = $('<img>').addClass('card-img-top');
      var $cardBody = $('<div>').addClass('card-body');
      var $cardTitle = $('<h5>').addClass('card-title');
      var $cardTechStack = $('<p>').addClass('techStack');
      var $cardText = $('<p>').addClass('card-text');
      var $cardBodyBtns = $('<div>').addClass('card-body-btns');
      var $codeAnchor = $('<a>').addClass('btn btn-primary').text('Code');
      var $linkAnchor = $('<a>').addClass('btn btn-primary').text('Link');
      var $infoAnchor = $('<a>').addClass('btn btn-primary').text('Info'); // combine elements of project card together

      $newCardContainer.append($cardImg).append($cardBody);
      $cardBody.append($cardTitle);
      $cardBody.append($cardTechStack).append($cardText);
      $cardBody.append($cardBodyBtns);
      $cardBodyBtns.append($codeAnchor).append($linkAnchor).append($infoAnchor); // add data to newly created card

      $cardImg.attr('src', this.image);
      $cardTitle.text(this.title);
      $cardTechStack.text(this.techStack);
      $cardText.text(this.description);
      $codeAnchor.attr('href', this.repoUrl).attr('target', 'blank');
      $linkAnchor.attr('href', this.siteUrl).attr('target', 'blank');
      $infoAnchor.attr('href', this.infoUrl).attr('target', 'blank'); // add a class of hidden if value of 'hide' passed to instance in main.js === true

      this.hide === true ? $newCardContainer.addClass('hidden') : null; // find location on page to append newly created card

      var $cardsContainer = $('article#projectsContainer').find('div.cardsContainer'); // append newly created card to proper location

      $cardsContainer.append($newCardContainer);
    }
  }]);

  return ProjectCard;
}();

exports.ProjectCard = ProjectCard;
},{}],"../js/main.js":[function(require,module,exports) {
"use strict";

var _classes = require("./classes");

// CHOOSE HOW MANY BLOGS & PROJECTS SHOULD SHOW ON PAGE LOAD
var NUM_VISIBLE_BLOGS_ON_LOAD = 2;
var NUM_VISIBLE_PROJECTS_ON_LOAD = 2;
var sheetId = '11ABDt_dPctf9vJJI9LXObufyE9YsFU5nBC0Q-ul1SDs';
var projectsAsJSON = "https://spreadsheets.google.com/feeds/list/".concat(sheetId, "/1/public/values?alt=json");
var blogsAsJSON = "https://spreadsheets.google.com/feeds/list/".concat(sheetId, "/2/public/values?alt=json");
var $projectCardsArr = $('.card');
var $blogsArr = $('.blogPost'); ////////// LOAD DATA FROM GOOGLE SHEETS WHEN DOCUMENT READY

$(document).ready(function () {
  var docWidth = document.documentElement.offsetWidth;
  [].forEach.call(document.querySelectorAll('*'), function (el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  });
  var sheetsURLs = {
    projects: projectsAsJSON,
    blogs: blogsAsJSON
  };
  getDataFromSheet(sheetsURLs.projects).then(function (projectData) {
    return renderData(projectData);
  }).then(function () {
    // find cards that were appended with a class of 'hidden'
    var $hiddenProjects = $('div.card.hidden');
    console.log('hidden projects - ', $hiddenProjects); // add click event to 'more projects' button to show hidden projects onClick

    $showMoreProjects.on('click', function () {
      for (var proj in $hiddenProjects) {
        $hiddenProjects.eq(proj).removeClass('hidden').addClass('visible');
      }
    });
  });
  getDataFromSheet(sheetsURLs.blogs).then(function (blogData) {
    return renderData(blogData);
  }).then(function () {
    // find cards that were appended with a class of 'hidden'
    var $hiddenBlogs = $('a.blogPost.hidden');
    console.log('hidden blogs - ', $hiddenBlogs); // add click event to 'more projects' button to show hidden projects onClick

    $showMoreBlogs.on('click', function () {
      for (var blog in $hiddenBlogs) {
        $hiddenBlogs.eq(blog).removeClass('hidden').addClass('visible');
      }
    });
  });
}); /////////////////////////////////////////////////////////////
/////////////////// DOM MANIPULATION ////////////////////////
/////////////////////////////////////////////////////////////

var $dropdownMenu = $('header ul#dropdownMenu');
var $hamburgerButton = $('i.fas.fa-bars');
var $hiddenBlogs = $('a.blogPost.hidden');
var $showMoreProjects = $('#moreProjects');
var $showMoreBlogs = $('#moreBlogs'); /////// TOGGLE HAMBURGER MENU

$hamburgerButton.on('click', function () {
  $dropdownMenu.slideToggle(500);
}); // add padding top to show content behind navbar
// $('body').css('padding-top', $('.navbar').outerHeight() + 'px');

var $navbar = $('.smart-scroll'); //Found this function here: bootstrap-menu.com/detail-smart-hide.html
// the way it works is by checking for the navbar's height, seeing if
// detect scroll top or down

if ($navbar.length > 0) {
  // check if element exists
  var last_scroll_top = 0;
  $(window).on('scroll', function () {
    var scroll_top = $(this).scrollTop(); // if the current height is less than the last height, the user scrolled up and the class scrolled-up should be added

    if (scroll_top < last_scroll_top) {
      $navbar.removeClass('scrolled-down').addClass('scrolled-up'); // if the current height is greater than the last height, the user scrolled down and the class scrolled-up should be added
    } else {
      $navbar.removeClass('scrolled-up').addClass('scrolled-down');
    }

    last_scroll_top = scroll_top;
  });
} /// SUBMIT CONTACT FORM ////


$('article#contactContainer form').on('click', function (event) {
  event.preventDefault();
}); //////////////////////////////////////////////////////////////////////////////////////////////////////////
// FUNCTIONS TO FETCH DATA FROM GOOGLE SHEETS AND RENDER NEW PAGE ELEMENTS BASED ON THE DATA RETRIEVED //
////////////////////////////////////////////////////////////////////////////////////////////////////////
// function logData(data) {
// 	console.log(`app - ${data[0].type}`, data);
// 	return data;
// }

function getDataFromSheet(sheet) {
  return $.ajax({
    url: sheet
  }).then(function (data) {
    var rowItems;

    if (data.feed.title.$t === 'Projects') {
      rowItems = data.feed.entry.map(function (item) {
        return {
          type: item.gsx$contenttype.$t,
          title: item.gsx$title.$t,
          image: item.gsx$image.$t,
          techStack: item.gsx$techstack.$t,
          description: item.gsx$description.$t,
          siteUrl: item.gsx$siteurl.$t,
          repoUrl: item.gsx$repourl.$t,
          infoUrl: item.gsx$infourl.$t
        };
      });
    } else if (data.feed.title.$t === 'Blogs') {
      rowItems = data.feed.entry.map(function (item) {
        return {
          type: item.gsx$contenttype.$t,
          title: item.gsx$title.$t,
          tags: item.gsx$tags.$t,
          url: item.gsx$url.$t
        };
      });
    }

    return rowItems;
  });
}

function renderData(data) {
  if (data[0].type === 'blog') {
    data.forEach(function (row, index) {
      var newPost = new _classes.BlogPost(row.title, row.tags, row.url, false);

      if (index < NUM_VISIBLE_BLOGS_ON_LOAD) {
        newPost = new _classes.BlogPost(row.title, row.tags, row.url, false);
      } else {
        newPost = new _classes.BlogPost(row.title, row.tags, row.url, true);
      }

      newPost.createNewBlogPostElement();
      return newPost;
    });
  } else {
    data.forEach(function (row, index) {
      var newCard;

      if (index < NUM_VISIBLE_PROJECTS_ON_LOAD) {
        newCard = new _classes.ProjectCard(row.title, row.image, row.description, row.techStack, row.siteUrl, row.repoUrl, row.infoUrl, false);
      } else {
        newCard = new _classes.ProjectCard(row.title, row.image, row.description, row.techStack, row.siteUrl, row.repoUrl, row.infoUrl, true);
      }

      newCard.createNewCardElement();
      return newCard;
    });
  }
}
},{"./classes":"../js/classes.js"}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62852" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../js/main.js"], null)
//# sourceMappingURL=/main.8f75cf09.js.map