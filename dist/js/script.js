/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_stickyHeader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/stickyHeader.js */ "./src/assets/js/modules/stickyHeader.js");
/* harmony import */ var _modules_blogCardStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/blogCardStyle.js */ "./src/assets/js/modules/blogCardStyle.js");
/* harmony import */ var _modules_coursesCardStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/coursesCardStyle.js */ "./src/assets/js/modules/coursesCardStyle.js");



document.addEventListener("DOMContentLoaded", () => {
  // script to hide the header when scrolling down and show it when scrolling up
  Object(_modules_stickyHeader_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // content overflow control and card animation (blog cards)

  Object(_modules_blogCardStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // content overflow control (courses items)

  Object(_modules_coursesCardStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(); // slider for Articles section

  const swiperArticles = new Swiper('.articles-wrapper.swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    draggable: false,
    allowTouchMove: false,
    pagination: {
      el: ".articles-pagination.swiper-pagination",
      clickable: true,
      dynamicBullets: true
    },
    navigation: {
      nextEl: ".articles-button-next.swiper-button-next",
      prevEl: ".articles-button-prev.swiper-button-prev"
    }
  }); // slider for Courses section

  const swiperCourses = new Swiper('.courses-wrapper.swiper', {
    slidesPerView: 2,
    spaceBetween: 30,
    draggable: false,
    allowTouchMove: false,
    pagination: {
      el: ".courses-pagination.swiper-pagination",
      clickable: true,
      dynamicBullets: true
    },
    navigation: {
      nextEl: ".courses-button-next.swiper-button-next",
      prevEl: ".courses-button-prev.swiper-button-prev"
    }
  });
});

/***/ }),

/***/ "./src/assets/js/modules/blogCardStyle.js":
/*!************************************************!*\
  !*** ./src/assets/js/modules/blogCardStyle.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return blogCardStyle; });
function blogCardStyle() {
  const cards = document.querySelectorAll('.blog-card');
  cards.forEach(card => {
    const title = card.querySelector('.blog-card__title');
    const description = card.querySelector('.blog-card__descr');
    const img = card.querySelector('.blog-card__img');
    title.querySelector('a').innerText.length > 70 ? title.querySelector('a').innerText = title.querySelector('a').innerText.slice(0, 70) + '...' : title.querySelector('a').innerText;
    description.innerText.length > 105 ? description.innerText = description.innerText.slice(0, 105) + '...' : description.innerText;
    title.addEventListener('mouseover', () => {
      img.classList.add('hover');
    });
    title.addEventListener('mouseout', () => {
      img.classList.remove('hover');
    });
  });
}

/***/ }),

/***/ "./src/assets/js/modules/coursesCardStyle.js":
/*!***************************************************!*\
  !*** ./src/assets/js/modules/coursesCardStyle.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return coursesCardStyle; });
function coursesCardStyle() {
  const cards = document.querySelectorAll('.courses-item');
  cards.forEach(card => {
    const description = card.querySelector('.courses-item__descr');
    description.innerText.length > 215 ? description.innerText = description.innerText.slice(0, 215) + '...' : description.innerText;
  });
}

/***/ }),

/***/ "./src/assets/js/modules/stickyHeader.js":
/*!***********************************************!*\
  !*** ./src/assets/js/modules/stickyHeader.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return stickyHeader; });
function stickyHeader() {
  let lastScroll = 0;
  const defaultOffset = 400;
  const header = document.querySelector('.header');

  const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;

  const containHide = () => header.classList.contains('hide');

  window.addEventListener('scroll', () => {
    if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
      header.classList.add('hide');
    } else if (scrollPosition() < lastScroll && containHide()) {
      header.classList.remove('hide');
    }

    lastScroll = scrollPosition();
  });
}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map