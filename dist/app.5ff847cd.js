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
})({"ts/classes.js":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.ProjectCard = exports.BlogPost = void 0;

var BlogPost =
/** @class */
function () {
  function BlogPost(title, tag, url, hide) {
    this.title = title;
    this.tag = tag;
    this.url = url;
    this.hide = hide;
  }

  BlogPost.prototype.createNewBlogPostElement = function () {
    // create elements of blog post
    var $blogPost = $('<a>').addClass('blogPost').attr('target', 'blank');
    var $blogTitle = $('<p>').addClass('blogTitle');
    var $blogTag = $('<div>').addClass('blogTag'); // combine elements of new blog post together

    $blogPost.append($blogTitle).append($blogTag); // add data to new blog post

    $blogPost.attr('href', this.url);
    $blogTitle.text(this.title);
    $blogTag.text(this.tag).addClass(this.tag); // add a class of hidden if value of 'hide' passed to instance in main.js === true

    this.hide === true ? $blogPost.addClass('hidden') : null; // find blogs container on page

    var $blogsContainer = $('div.blogElements'); // append new blog post to page

    $blogsContainer.append($blogPost);
  };

  return BlogPost;
}();

exports.BlogPost = BlogPost;

var ProjectCard =
/** @class */
function () {
  function ProjectCard(title, image, description, techStack, siteUrl, repoUrl, infoUrl, hide, category) {
    this.title = title;
    this.image = image;
    this.description = description;
    this.techStack = techStack;
    this.siteUrl = siteUrl;
    this.repoUrl = repoUrl;
    this.infoUrl = infoUrl;
    this.hide = hide;
    this.category = category;
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
    var $codeAnchor = $('<a>').addClass('btn btn-primary').text('Code');
    var $linkAnchor = $('<a>').addClass('btn btn-primary').text('Link');
    var $infoAnchor = $('<a>').addClass('btn btn-primary').text('Info');
    var $cardCategory = $('<p>').addClass('projCategory'); // combine elements of project card together

    $newCardContainer.append($cardImg).append($cardBody);
    $cardBody.append($cardTitle);
    $cardBody.append($cardCategory);
    $cardBody.append($cardTechStack);
    $cardBody.append($cardText);
    $cardBody.append($cardBodyBtns);
    $cardBodyBtns.append($codeAnchor).append($linkAnchor).append($infoAnchor); // add data to newly created card

    $cardImg.attr('src', this.image);
    $cardTitle.text(this.title);
    $cardTechStack.text(this.techStack);
    $cardText.text(this.description);
    $cardCategory.text(this.category);
    $codeAnchor.attr('href', this.repoUrl).attr('target', 'blank');
    $linkAnchor.attr('href', this.siteUrl).attr('target', 'blank');
    $infoAnchor.attr('href', this.infoUrl).attr('target', 'blank'); // add a class of hidden if value of 'hide' passed to instance in main.js === true

    this.hide === true ? $newCardContainer.addClass('hidden') : null; // find location on page to append newly created card

    var $cardsContainer = $('article#projectsContainer').find('div.cardsContainer'); // append newly created card to proper location

    $cardsContainer.append($newCardContainer);
  };

  return ProjectCard;
}();

exports.ProjectCard = ProjectCard;
},{}],"node_modules/emailjs-com/source/models/EmailJSResponseStatus.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailJSResponseStatus = void 0;
var EmailJSResponseStatus = /** @class */ (function () {
    function EmailJSResponseStatus(httpResponse) {
        this.status = httpResponse.status;
        this.text = httpResponse.responseText;
    }
    return EmailJSResponseStatus;
}());
exports.EmailJSResponseStatus = EmailJSResponseStatus;

},{}],"node_modules/emailjs-com/source/services/ui/UI.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UI = void 0;
var UI = /** @class */ (function () {
    function UI() {
    }
    UI.clearAll = function (form) {
        form.classList.remove(this.PROGRESS);
        form.classList.remove(this.DONE);
        form.classList.remove(this.ERROR);
    };
    UI.progressState = function (form) {
        this.clearAll(form);
        form.classList.add(this.PROGRESS);
    };
    UI.successState = function (form) {
        form.classList.remove(this.PROGRESS);
        form.classList.add(this.DONE);
    };
    UI.errorState = function (form) {
        form.classList.remove(this.PROGRESS);
        form.classList.add(this.ERROR);
    };
    UI.PROGRESS = 'emailjs-sending';
    UI.DONE = 'emailjs-success';
    UI.ERROR = 'emailjs-error';
    return UI;
}());
exports.UI = UI;

},{}],"node_modules/emailjs-com/source/index.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailJSResponseStatus = exports.sendForm = exports.send = exports.init = void 0;
var EmailJSResponseStatus_1 = require("./models/EmailJSResponseStatus");
Object.defineProperty(exports, "EmailJSResponseStatus", { enumerable: true, get: function () { return EmailJSResponseStatus_1.EmailJSResponseStatus; } });
var UI_1 = require("./services/ui/UI");
var _userID = null;
var _origin = 'https://api.emailjs.com';
function sendPost(url, data, headers) {
    if (headers === void 0) { headers = {}; }
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load', function (event) {
            var responseStatus = new EmailJSResponseStatus_1.EmailJSResponseStatus(event.target);
            if (responseStatus.status === 200 || responseStatus.text === 'OK') {
                resolve(responseStatus);
            }
            else {
                reject(responseStatus);
            }
        });
        xhr.addEventListener('error', function (event) {
            reject(new EmailJSResponseStatus_1.EmailJSResponseStatus(event.target));
        });
        xhr.open('POST', url, true);
        for (var key in headers) {
            xhr.setRequestHeader(key, headers[key]);
        }
        xhr.send(data);
    });
}
function appendGoogleCaptcha(templatePrams) {
    var element = document && document.getElementById('g-recaptcha-response');
    if (element && element.value) {
        templatePrams['g-recaptcha-response'] = element.value;
    }
    element = null;
    return templatePrams;
}
function fixIdSelector(selector) {
    if (selector[0] !== '#') {
        return '#' + selector;
    }
    return selector;
}
/**
 * Initiation
 * @param {string} userID - set the EmailJS user ID
 * @param {string} origin - set the EmailJS origin
 */
function init(userID, origin) {
    _userID = userID;
    _origin = origin || 'https://api.emailjs.com';
}
exports.init = init;
/**
 * Send a template to the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {Object} templatePrams - the template params, what will be set to the EmailJS template
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
function send(serviceID, templateID, templatePrams, userID) {
    var params = {
        lib_version: '2.6.3',
        user_id: userID || _userID,
        service_id: serviceID,
        template_id: templateID,
        template_params: appendGoogleCaptcha(templatePrams)
    };
    return sendPost(_origin + '/api/v1.0/email/send', JSON.stringify(params), {
        'Content-type': 'application/json'
    });
}
exports.send = send;
/**
 * Send a form the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {string | HTMLFormElement} form - the form element or selector
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
function sendForm(serviceID, templateID, form, userID) {
    if (typeof form === 'string') {
        form = document.querySelector(fixIdSelector(form));
    }
    if (!form || form.nodeName !== 'FORM') {
        throw 'Expected the HTML form element or the style selector of form';
    }
    UI_1.UI.progressState(form);
    var formData = new FormData(form);
    formData.append('lib_version', '2.6.3');
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', userID || _userID);
    return sendPost(_origin + '/api/v1.0/email/send-form', formData)
        .then(function (response) {
        UI_1.UI.successState(form);
        return response;
    }, function (error) {
        UI_1.UI.errorState(form);
        return Promise.reject(error);
    });
}
exports.sendForm = sendForm;
exports.default = {
    init: init,
    send: send,
    sendForm: sendForm
};

},{"./models/EmailJSResponseStatus":"node_modules/emailjs-com/source/models/EmailJSResponseStatus.js","./services/ui/UI":"node_modules/emailjs-com/source/services/ui/UI.js"}],"ts/app.js":[function(require,module,exports) {
"use strict";

exports.__esModule = true; // ====== IMPORT CLASSES & INTERFACES ====== //

var classes_1 = require("./classes");

var emailjs_com_1 = require("emailjs-com");

var sheetId = '11ABDt_dPctf9vJJI9LXObufyE9YsFU5nBC0Q-ul1SDs';
var projectsAsJSON = "https://spreadsheets.google.com/feeds/list/" + sheetId + "/1/public/values?alt=json";
var blogsAsJSON = "https://spreadsheets.google.com/feeds/list/" + sheetId + "/2/public/values?alt=json";
var NUM_VISIBLE_PROJECTS_ON_LOAD = 3;
var NUM_VISIBLE_BLOGS_ON_LOAD = 2;
var $showMoreProjects = $('#moreProjects');
var $showMoreBlogs = $('#moreBlogs');
var sheetsURLs = {
  projects: projectsAsJSON,
  blogs: blogsAsJSON
};
$(document).ready(function () {
  ///////// GET PROJECT DATA ///////////
  getDataFromSheet(sheetsURLs.projects).then(function (projects) {
    return renderData(projects);
  }).then(function () {
    var $hiddenProjects = $('div.card.hidden'); // add click event to 'more projects' button to show hidden projects onClick

    $showMoreProjects.on('click', function () {
      for (var i = 0; i < $hiddenProjects.length; i++) {
        var $hiddenProj = $hiddenProjects.eq(i);
        $hiddenProj.removeClass('hidden').addClass('visible');
      }
    });
  });
  getDataFromSheet(sheetsURLs.blogs).then(function (blogs) {
    return renderData(blogs);
  }).then(function () {
    var $hiddenBlogs = $('a.blogPost.hidden');
    $showMoreBlogs.on('click', function () {
      for (var i = 0; i < $hiddenBlogs.length; i++) {
        var $hiddenBlog = $hiddenBlogs.eq(i);
        $hiddenBlog.removeClass('hidden').addClass('visible');
      }
    });
  });
});
/*==============
DOM MANIPULATION
================*/
// add padding top to show content behind navbar

$('body').css('padding-top', $('.navbar').outerHeight() + 'px');
var menuDown = false;
var $dropdownMenu = $('header ul#dropdownMenu');
var $hamburgerButton = $('i.fas.fa-bars'); // detect scroll top or down

var $navbar = $('.smart-scroll'); // detect scroll top or down

if ($navbar.length > 0) {
  // check if element exists
  var last_scroll_top_1 = 0;
  $(window).on('scroll', function () {
    var scroll_top = $(this).scrollTop(); // if the current height is less than the last height, the user scrolled up and the class scrolled-up should be added

    if (scroll_top < last_scroll_top_1) {
      $navbar.removeClass('scrolled-down').addClass('scrolled-up'); // if the current height is greater than the last height, the user scrolled down and the class scrolled-up should be added
    } else {
      $navbar.removeClass('scrolled-up').addClass('scrolled-down');
    }

    last_scroll_top_1 = scroll_top;
  });
} /// SUBMIT CONTACT FORM

/*==================================================================================================
FUNCTIONS TO FETCH DATA FROM GOOGLE SHEETS AND RENDER NEW PAGE ELEMENTS BASED ON THE DATA RETRIEVED
==================================================================================================*/
// RENDER PAGE ELEMENTS


function renderData(data) {
  if (data[0].type === 'project') {
    data.forEach(function (row, index) {
      var newCard;

      if (index < NUM_VISIBLE_PROJECTS_ON_LOAD) {
        newCard = new classes_1.ProjectCard(row.title, row.image, row.description, row.techStack, row.siteUrl, row.repoUrl, row.infoUrl, false, row.projectCategory);
      } else {
        newCard = new classes_1.ProjectCard(row.title, row.image, row.description, row.techStack, row.siteUrl, row.repoUrl, row.infoUrl, true, row.projectCategory);
      }

      newCard.createNewProjectCardElement();
      return newCard;
    });
  }

  if (data[0].type === 'blog') {
    data.forEach(function (row, index) {
      var newBlogPost;

      if (index < NUM_VISIBLE_BLOGS_ON_LOAD) {
        newBlogPost = new classes_1.BlogPost(row.title, row.tags, row.url, false);
      } else {
        newBlogPost = new classes_1.BlogPost(row.title, row.tags, row.url, true);
      }

      newBlogPost.createNewBlogPostElement();
      return newBlogPost;
    });
  }
} // make an AJAX call to the google sheets API and return a blog or project object


function getDataFromSheet(sheet) {
  return $.ajax({
    url: sheet
  }).then(function (data) {
    var rows;

    if (data.feed.title.$t === 'Projects') {
      rows = data.feed.entry.map(function (item) {
        return {
          type: item.gsx$contenttype.$t,
          title: item.gsx$title.$t,
          image: item.gsx$image.$t,
          techStack: item.gsx$techstack.$t,
          description: item.gsx$description.$t,
          siteUrl: item.gsx$siteurl.$t,
          repoUrl: item.gsx$repourl.$t,
          infoUrl: item.gsx$infourl.$t,
          projectCategory: item.gsx$projectcategory.$t
        };
      });
    }

    if (data.feed.title.$t === 'Blogs') {
      rows = data.feed.entry.map(function (item) {
        return {
          type: item.gsx$contenttype.$t,
          title: item.gsx$title.$t,
          tags: item.gsx$tags.$t,
          url: item.gsx$url.$t
        };
      });
    }

    return rows;
  });
}

var $contactForm = $('#contactForm');
var serviceID = 'service_yvxcdkg';
var templateID = 'template_1z4c1oa';
var userID = 'user_NEvPQoryWpJOh3UHul6iB';
emailjs_com_1["default"].init(userID);
$contactForm.on('submit', function (event) {
  event.preventDefault();
  emailjs_com_1["default"].sendForm(serviceID, templateID, this).then(function (response) {
    var name = $contactForm.find("input[name='name']").val();
    alert("Thanks for your email, " + name + ", I'll do my best to get back to you within 24 hours! \n\nBest, Sam");
  }, function (error) {
    alert("FAILED TO SEND EMAIL -- " + error);
    console.log('FAILED TO SEND EMAIL --', error);
  });
});
},{"./classes":"ts/classes.js","emailjs-com":"node_modules/emailjs-com/source/index.js"}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50347" + '/');

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
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","ts/app.js"], null)
//# sourceMappingURL=/app.5ff847cd.js.map