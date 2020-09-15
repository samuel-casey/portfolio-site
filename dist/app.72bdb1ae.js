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
})({"../ts/contentClasses.js":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.ProjectCard = exports.BlogPost = void 0;

var BlogPost =
/** @class */
function () {
  function BlogPost(title, tag, url) {
    this.title = title;
    this.tag = tag;
    this.url = url;
  }

  return BlogPost;
}();

exports.BlogPost = BlogPost;

var ProjectCard =
/** @class */
function () {
  function ProjectCard(title, image, description, techStack, url) {
    this.title = title;
    this.image = image;
    this.description = description;
    this.techStack = techStack;
    this.url = url;
  }

  return ProjectCard;
}();

exports.ProjectCard = ProjectCard;
},{}],"../ts/app.js":[function(require,module,exports) {
"use strict"; /////////////////////////////////////////////////////////////
/////////////////////////// DATA ////////////////////////////
/////////////////////////////////////////////////////////////

exports.__esModule = true;

var contentClasses_1 = require("./contentClasses");

var sheetId = '11ABDt_dPctf9vJJI9LXObufyE9YsFU5nBC0Q-ul1SDs';
var projectsAsJSON = "https://spreadsheets.google.com/feeds/list/" + sheetId + "/1/public/values?alt=json";
var blogsAsJSON = "https://spreadsheets.google.com/feeds/list/" + sheetId + "/2/public/values?alt=json";
var $projectCardsArr = $('.card');
$(document).ready(function () {
  console.log(contentClasses_1.BlogPost, contentClasses_1.ProjectCard);
  var sheetsURLs = {
    projects: projectsAsJSON,
    blogs: blogsAsJSON
  }; // const workbookData: { [k: string]: any } = {};

  var workbookData = [{}];
  var testArr = [{}];
  testArr.push({
    test: 'test'
  });
  console.log('top testARr = ', testArr[1]); ///////// GET PROJECT DATA ///////////

  var projectObjects = [];
  var blogObjects = [];
  var contentArraysObj = {};
  var projCards = [];
  var blogPosts = []; // let workbookData;
  // loop through URLS for projects and blogs sheets and do an AJAX request for each

  for (var i in sheetsURLs) {
    $.ajax({
      url: sheetsURLs[i]
    }).then(function (sheetData) {
      // create a new property for the object workbookData named 'projects' or 'blogs', and assign the current sheet's data to that property
      workbookData.push({
        sheetData: sheetData
      });
      return workbookData;
    })["catch"](function (error) {
      console.log(error);
    });
  }

  console.log('workbookData', workbookData);
  console.log('wbData.blogs', workbookData[2]); // testArr.push({ c: 'c' });
  // console.log('testArray', testArr[1]);

  var renderBlogPosts = function renderBlogPosts(blogsToRender) {
    console.log(blogsToRender);
    console.log('AAAA');

    for (var _i = 0, blogsToRender_1 = blogsToRender; _i < blogsToRender_1.length; _i++) {
      var blog = blogsToRender_1[_i];
      console.log(blog.title);
    }
  }; // console.log(projCards, blogPosts);
  // renderBlogPosts(blogPosts);
  // const populateContentArrays = function (contentObjects) {
  // 	console.log(contentObjects);
  // 	for (let idx = 0; idx < $projectCardsArr.length; idx++) {
  // 		console.log($projectCardsArr.eq(idx));
  // 	}
  // };
  // populateContentArrays(contentArraysObj);

});
/* renderContent(content) {
    LOOP THRU contentObjects.projects
    LOOP THRU contentObjects.blogs
    LOOP THRU blogsArray
        FOR EACH blog
            DECLARE new Blog
    
}

*/
/////////////////////////////////////////////////////////////
/////////////////// DOM MANIPULATION ////////////////////////
/////////////////////////////////////////////////////////////

var $dropdownMenu = $('header ul#dropdownMenu');
var $hamburgerButton = $('i.fas.fa-bars');
$hamburgerButton.on('click', function () {
  $dropdownMenu.slideToggle(500);
}); //Found this function here: bootstrap-menu.com/detail-smart-hide.html
// the way it works is by checking for the navbar's height
// add padding top to show content behind navbar

https: $('body').css('padding-top', $('.navbar').outerHeight() + 'px');

var $navbar = $('.smart-scroll'); // detect scroll top or down

if ($navbar.length > 0) {
  // check if element exists
  var last_scroll_top_1 = 0;
  $(window).on('scroll', function () {
    var scroll_top = $(this).scrollTop();

    if (scroll_top < last_scroll_top_1) {
      $navbar.removeClass('scrolled-down').addClass('scrolled-up');
    } else {
      $navbar.removeClass('scrolled-up').addClass('scrolled-down');
    }

    last_scroll_top_1 = scroll_top;
  });
} /// SUBMIT CONTACT FORM


$('article#contactContainer form').on('click', function (event) {
  event.preventDefault();
}); /// FUNCTIONS

function logData(projects) {
  console.log('app - projects', projects); // console.log('app - blog', blogs);

  return projects; // the rest of your app goes here
} // function logBlogs(blogs) {
// 	return blogs;
// }
},{"./contentClasses":"../ts/contentClasses.js"}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60302" + '/');

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
},{}]},{},["../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../ts/app.js"], null)
//# sourceMappingURL=/app.72bdb1ae.js.map