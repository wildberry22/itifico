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
/* harmony import */ var _modules_courseAsideStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/courseAsideStyle.js */ "./src/assets/js/modules/courseAsideStyle.js");
/* harmony import */ var _modules_formValidation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/formValidation.js */ "./src/assets/js/modules/formValidation.js");
/* harmony import */ var _modules_forms_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/forms.js */ "./src/assets/js/modules/forms.js");
/* harmony import */ var _modules_select_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/select.js */ "./src/assets/js/modules/select.js");
/* harmony import */ var _modules_gallery_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/gallery.js */ "./src/assets/js/modules/gallery.js");
/* harmony import */ var _modules_showHideContent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/showHideContent.js */ "./src/assets/js/modules/showHideContent.js");
/* harmony import */ var _modules_preloader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/preloader.js */ "./src/assets/js/modules/preloader.js");
/* harmony import */ var _modules_langChange_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/langChange.js */ "./src/assets/js/modules/langChange.js");










 // script for preloader

if (document.querySelector('.preloader')) {
  Object(_modules_preloader_js__WEBPACK_IMPORTED_MODULE_9__["default"])();
}

document.addEventListener("DOMContentLoaded", () => {
  // script to hide the header when scrolling down and show it when scrolling up
  Object(_modules_stickyHeader_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // changing language on the page

  Object(_modules_langChange_js__WEBPACK_IMPORTED_MODULE_10__["default"])(); // content overflow control and card animation (blog cards)

  Object(_modules_blogCardStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // content overflow control (courses items)

  Object(_modules_coursesCardStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(); // accordion course-aside

  Object(_modules_courseAsideStyle_js__WEBPACK_IMPORTED_MODULE_3__["default"])(); // slider for Articles section

  try {
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
    });
  } catch (e) {} // slider for Courses section


  try {
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
  } catch (e) {} // slider for Articles section


  try {
    const swiperArticles = new Swiper('.article-more__slider.swiper', {
      slidesPerView: 3,
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
    });
  } catch (e) {} // form validation


  Object(_modules_formValidation_js__WEBPACK_IMPORTED_MODULE_4__["default"])(); // sending form data on server

  Object(_modules_forms_js__WEBPACK_IMPORTED_MODULE_5__["default"])(); // select styling

  try {
    Object(_modules_select_js__WEBPACK_IMPORTED_MODULE_6__["default"])(document.querySelector('.blog-category__sort'));
  } catch (e) {} // img gallery


  try {
    Object(_modules_gallery_js__WEBPACK_IMPORTED_MODULE_7__["default"])(document.querySelectorAll('[data-gallery]'));
  } catch (e) {} // show-hide content (accordion)


  try {
    Object(_modules_showHideContent_js__WEBPACK_IMPORTED_MODULE_8__["default"])('.course-practice', '#practice-title', '.course-practice__close');
  } catch (e) {}

  try {
    Object(_modules_showHideContent_js__WEBPACK_IMPORTED_MODULE_8__["default"])('.course-practice__answer', '.course-practice__answer-title');
  } catch (e) {} // header adaptive menu


  const menuBtnEl = document.querySelector('.menu-btn');
  const menuEl = document.querySelector('.menu-list');
  const shadow = document.querySelector('.menu-shadow');
  menuBtnEl.addEventListener('click', () => {
    menuBtnEl.classList.toggle('active');
    menuEl.classList.toggle('active');
    shadow.classList.toggle('active');

    if (menuEl.classList.contains('active')) {
      document.querySelector('body').style.overflowY = 'hidden';
      document.querySelector('html').style.overflowY = 'hidden';
    } else {
      document.querySelector('body').style.overflowY = 'auto';
      document.querySelector('html').style.overflowY = 'auto';
    }
  });
  setInterval(() => {
    if (window.innerWidth > 768) {
      menuBtnEl.classList.remove('active');
      menuEl.classList.remove('active');
      shadow.classList.remove('active');
      document.querySelector('body').style.overflowY = 'auto';
      document.querySelector('html').style.overflowY = 'auto';
    }
  }, 100);
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

/***/ "./src/assets/js/modules/calcScroll.js":
/*!*********************************************!*\
  !*** ./src/assets/js/modules/calcScroll.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return calcScroll; });
function calcScroll() {
  let div = document.createElement('div');
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.overflowY = 'scroll';
  div.style.visibility = 'hidden';
  document.body.appendChild(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
}

/***/ }),

/***/ "./src/assets/js/modules/courseAsideStyle.js":
/*!***************************************************!*\
  !*** ./src/assets/js/modules/courseAsideStyle.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return coursesAsideStyle; });
function coursesAsideStyle() {
  const sections = document.querySelectorAll('.course-nav__list-item');
  sections.forEach(section => {
    const title = section.querySelector('.course-nav__list-title');
    const listItems = section.querySelectorAll('ol > li > a');
    title.addEventListener('click', () => {
      sections.forEach(item => {
        item.classList.remove('visible');
      });
      title.parentNode.classList.add('visible');
    });
    listItems.forEach(listItem => {
      listItem.addEventListener('click', () => {
        sections.forEach(item => {
          item.classList.remove('visible');

          if (item.classList.contains('active')) {
            item.classList.remove('active');
            item.querySelectorAll('ol > li').forEach(li => {
              li.classList.remove('active');
            });
          }
        });
        listItem.parentNode.classList.add('active');
        title.parentNode.classList.add('active');
        title.parentNode.classList.add('visible');
      });
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
  const cardsCatalog = document.querySelectorAll('.courses-list__item');
  cards.forEach(card => {
    const description = card.querySelector('.courses-item__descr');
    description.innerText.length > 215 ? description.innerText = description.innerText.slice(0, 215) + '...' : description.innerText;
  });
  cardsCatalog.forEach(card => {
    const description = card.querySelector('.courses-list__item-descr');
    const title = card.querySelector('.courses-list__item-title');
    description.innerText.length > 175 ? description.innerText = description.innerText.slice(0, 175) + '...' : description.innerText;
    title.innerText.length > 35 ? title.innerText = title.innerText.slice(0, 35) + '...' : title.innerText;
  });
}

/***/ }),

/***/ "./src/assets/js/modules/formValidation.js":
/*!*************************************************!*\
  !*** ./src/assets/js/modules/formValidation.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formValidation; });
function formValidation() {
  document.querySelectorAll('form').forEach(form => {
    const nameError = form.querySelector('#name-error');
    const emailError = form.querySelector('#email-error');
    const nameInput = form.querySelector('#name-input');
    const emailInput = form.querySelector('#email-input');
    nameInput.addEventListener('keyup', () => validateName(nameInput, nameError));
    emailInput.addEventListener('keyup', () => validateEmail(emailInput, emailError));
    form.addEventListener('submit', e => validateForm(e, validateName(nameInput, nameError), validateEmail(emailInput, emailError)));
  });

  function validateName(nameInput, nameError) {
    const name = nameInput.value;

    if (name.length == 0) {
      nameError.innerText = "Введіть ваше ім'я!";
      nameInput.classList.add('invalid');
      nameInput.classList.remove('valid');
      return false;
    }

    if (!name.match(/^[A-Za-zА-Яа-яёЁЇїІіЄєҐґ]*\s{1}[A-Za-zА-Яа-яёЁЇїІіЄєҐґ]*$/)) {
      nameError.innerText = "Введіть повне ім'я!";
      nameInput.classList.add('invalid');
      nameInput.classList.remove('valid');
      return false;
    }

    nameError.innerText = '';
    nameInput.classList.add('valid');
    nameInput.classList.remove('invalid');
    return true;
  }

  function validateEmail(emailInput, emailError) {
    const email = emailInput.value;

    if (email.length == 0) {
      emailError.innerText = 'Введіть вашу електронну адресу';
      emailInput.classList.add('invalid');
      emailInput.classList.remove('valid');
      return false;
    }

    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z\.]{2,}$/)) {
      emailError.innerText = 'Електронна адреса неправильна!';
      emailInput.classList.add('invalid');
      emailInput.classList.remove('valid');
      return false;
    }

    emailError.innerText = '';
    emailInput.classList.add('valid');
    emailInput.classList.remove('invalid');
    return true;
  }

  function validateForm(event, input1, input2) {
    event.preventDefault();

    if (!input1 || !input2) {
      return false;
    }

    document.querySelectorAll('input').forEach(input => input.classList.remove('valid'));
  }
}

/***/ }),

/***/ "./src/assets/js/modules/forms.js":
/*!****************************************!*\
  !*** ./src/assets/js/modules/forms.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return forms; });
function forms() {
  const form = document.querySelectorAll('form');
  const input = document.querySelectorAll('input');
  let valid = true;
  const message = {
    loading: "Завантаження...",
    successMailing: "Дякуємо за підписку на розсилку!",
    successMsg: "Дякуємо за вашу заявку. Ми зв'яжемося з вами найближчим часом!",
    failure: "Щось пішло не так..."
  };

  const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;
    let res = await fetch(url, {
      method: 'POST',
      body: data
    });
    return await res.text();
  };

  const clearInputs = () => {
    input.forEach(item => {
      item.value = '';
    });
  };

  form.forEach(item => {
    item.addEventListener('submit', e => {
      e.preventDefault(); // validation check

      valid = true;
      item.querySelectorAll('input').forEach(element => {
        if (element.classList.contains('invalid')) {
          valid = false;
        }
      });

      if (valid) {
        let statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        item.appendChild(statusMessage);
        const formData = new FormData(item);
        postData('./server.php', formData).then(res => {
          console.log(res);

          if (item.hasAttribute('data-contact')) {
            statusMessage.textContent = message.successMsg;
          } else if (item.hasAttribute('data-mailing')) {
            statusMessage.textContent = message.successMailing;
          }

          statusMessage.classList.add('ok');
        }).catch(() => {
          statusMessage.textContent = message.failure;
          statusMessage.classList.add('error');
        }).finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.classList.remove('ok');
            statusMessage.classList.remove('error');
            statusMessage.remove();
          }, 3000);
        });
      }
    });
  });
}

/***/ }),

/***/ "./src/assets/js/modules/gallery.js":
/*!******************************************!*\
  !*** ./src/assets/js/modules/gallery.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return gallery; });
/* harmony import */ var _calcScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calcScroll.js */ "./src/assets/js/modules/calcScroll.js");

function gallery(imgWrapper) {
  if (imgWrapper) {
    const previewBox = document.querySelector('.preview-box');
    const previewImg = previewBox.querySelector('img');
    const closeIcon = previewBox.querySelector('.icon');
    const currentImg = previewBox.querySelector('.current-img');
    const totalImg = previewBox.querySelector('.total-img');
    const description = previewBox.querySelector('.description');
    const shadow = document.querySelector('.shadow');

    for (let i = 0; i < imgWrapper.length; i++) {
      let image = imgWrapper[i].querySelector('img');
      let descriptionText = imgWrapper[i].querySelector('figcaption').textContent;
      totalImg.textContent = imgWrapper.length;
      description.textContent = descriptionText;
      let newIndex = i;
      let clickImgIndex;

      image.onclick = () => {
        clickImgIndex = newIndex;

        function preview() {
          currentImg.textContent = newIndex + 1;
          let selectedImgUrl = imgWrapper[newIndex].querySelector('img').src;
          previewImg.src = selectedImgUrl;
          description.textContent = imgWrapper[newIndex].querySelector('figcaption').textContent;
        }

        const prevBtn = document.querySelector('.prev');
        const nextBtn = document.querySelector('.next');

        if (newIndex == 0) {
          prevBtn.style.display = 'none';
        }

        if (newIndex >= imgWrapper.length - 1) {
          nextBtn.style.display = 'none';
        }

        prevBtn.onclick = () => {
          newIndex--;

          if (newIndex == 0) {
            preview();
            prevBtn.style.display = 'none';
          } else {
            preview();
            nextBtn.style.display = 'block';
          }
        };

        nextBtn.onclick = () => {
          newIndex++;

          if (newIndex == imgWrapper.length - 1) {
            preview();
            nextBtn.style.display = 'none';
          } else {
            preview();
            prevBtn.style.display = 'block';
          }
        };

        preview();
        previewBox.classList.add('show');
        shadow.style.display = 'block';
        document.querySelector('body').style.overflowY = 'hidden';
        document.querySelector('html').style.overflowY = 'hidden';
        document.body.style.marginRight = Object(_calcScroll_js__WEBPACK_IMPORTED_MODULE_0__["default"])() + 'px';
        document.querySelector('.header').style.paddingRight = Object(_calcScroll_js__WEBPACK_IMPORTED_MODULE_0__["default"])() + 'px';

        closeIcon.onclick = () => {
          newIndex = clickImgIndex;
          prevBtn.style.display = 'block';
          nextBtn.style.display = 'block';
          previewBox.classList.remove('show');
          shadow.style.display = 'none';
          document.querySelector('body').style.overflowY = 'auto';
          document.querySelector('html').style.overflowY = 'auto';
          document.body.style.marginRight = '0px';
          document.querySelector('.header').style.paddingRight = '0px';
        };
      };
    }
  }
}

/***/ }),

/***/ "./src/assets/js/modules/langChange.js":
/*!*********************************************!*\
  !*** ./src/assets/js/modules/langChange.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return langChange; });
function langChange() {
  const langSelect = document.querySelector('.lang-switch');
  const lang = langSelect.querySelectorAll('.lang');
  const allLang = ['uk', 'en'];
  langSelect.addEventListener('click', e => {
    e.preventDefault();
    lang.forEach(item => item.classList.remove('active'));
    e.target.classList.add('active');

    try {
      changeURLLang();
      changeLang();
      location.reload();
    } catch (e) {}
  });

  function changeURLLang() {
    let curLang;
    lang.forEach(item => {
      if (item.classList.contains('active')) {
        curLang = item.getAttribute('data-lang');
      }
    });
    location.href = window.location.pathname + '#' + curLang;
  }

  function changeLang() {
    let hash = window.location.hash;
    hash = hash.substr(1);

    if (!allLang.includes(hash)) {
      location.href = window.location.pathname + '#' + 'uk';
      location.reload();
    }

    lang.forEach(item => {
      item.classList.remove('active');

      if (item.getAttribute('data-lang') == hash) {
        item.classList.add('active');
      }
    });
    document.querySelector('html').setAttribute('lang', hash);
    document.querySelector('#blog').innerHTML = langArr[hash]["header"]["blog"];
    document.querySelector('#courses').innerHTML = langArr[hash]["header"]["courses"];
    document.querySelector('#about').innerHTML = langArr[hash]["header"]["about"];
    document.querySelector('#subscription').innerHTML = langArr[hash]["header"]["subscription"];
    document.querySelector('#support').innerHTML = langArr[hash]["header"]["support"];
    document.querySelector('.hero-content__title').innerHTML = langArr[hash]["main-page"]["hero-title"];
    document.querySelector('.hero-content__descr').innerHTML = langArr[hash]["main-page"]["hero-descr"];
    document.querySelector('.hero-content__btn').innerHTML = langArr[hash]["main-page"]["hero-btn"];
    document.querySelector('.hero-scroll__text').innerHTML = langArr[hash]["main-page"]["hero-scroll"];
    document.querySelector('.articles-top__title').innerHTML = langArr[hash]["main-page"]["articles-title"];
    document.querySelector('.articles-top__more-btn').innerHTML = langArr[hash]["main-page"]["articles-more"];
    document.querySelectorAll('.blog-card').forEach(card => {
      card.querySelector('.blog-card__title a').innerHTML = langArr[hash]["main-page"][`blog-card-${card.getAttribute('data-card')}`]["title"];
      card.querySelector('.blog-card__descr').innerHTML = langArr[hash]["main-page"][`blog-card-${card.getAttribute('data-card')}`]["descr"];
      card.querySelector('.blog-card__date').innerHTML = langArr[hash]["main-page"][`blog-card-${card.getAttribute('data-card')}`]["date"];
    });
    document.querySelector('.courses-top__title').innerHTML = langArr[hash]["main-page"]["courses-title"];
    document.querySelector('.courses-top__more-btn').innerHTML = langArr[hash]["main-page"]["courses-more"];
    document.querySelectorAll('.courses-item').forEach(item => {
      item.querySelector('.courses-item__title').innerHTML = langArr[hash]["main-page"][`course-${item.getAttribute('data-course')}`]["title"];
      item.querySelector('.courses-item__descr').innerHTML = langArr[hash]["main-page"][`course-${item.getAttribute('data-course')}`]["descr"];
      item.querySelector('.courses-item__more').innerHTML = langArr[hash]["main-page"][`course-${item.getAttribute('data-course')}`]["more"];
    });
    document.querySelector('.benefits__title').innerHTML = langArr[hash]["main-page"]["benefits-title"];
    document.querySelectorAll('.benefits-list__item')[0].querySelector('.benefits-list__item-descr').innerHTML = langArr[hash]["main-page"]["benefit-1"];
    document.querySelectorAll('.benefits-list__item')[1].querySelector('.benefits-list__item-descr').innerHTML = langArr[hash]["main-page"]["benefit-2"];
    document.querySelectorAll('.benefits-list__item')[2].querySelector('.benefits-list__item-descr').innerHTML = langArr[hash]["main-page"]["benefit-3"];
    document.querySelector('.mailing__title').innerHTML = langArr[hash]["main-page"]["mailing-title"];
    document.querySelector('.mailing__descr').innerHTML = langArr[hash]["main-page"]["mailing-descr"];
    document.querySelector('#name-input').setAttribute('placeholder', langArr[hash]["main-page"]["mailing-name-placeholder"]);
    document.querySelector('#email-input').setAttribute('placeholder', langArr[hash]["main-page"]["mailing-email-placeholder"]);
    document.querySelector('.mailing__btn').innerHTML = langArr[hash]["main-page"]["mailing-btn"];
  }

  try {
    changeLang();
  } catch (e) {}
}

/***/ }),

/***/ "./src/assets/js/modules/preloader.js":
/*!********************************************!*\
  !*** ./src/assets/js/modules/preloader.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return preloader; });
function preloader() {
  window.setTimeout(function () {
    document.querySelector('body').style.overflowY = 'auto';
    document.querySelector('html').style.overflowY = 'auto';
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 800);
  }, 4200);
}

/***/ }),

/***/ "./src/assets/js/modules/select.js":
/*!*****************************************!*\
  !*** ./src/assets/js/modules/select.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return select; });
function select(containerElem) {
  if (containerElem) {
    const selected = containerElem.querySelector('.selected');
    const optionsContainer = containerElem.querySelector('.options-container');
    const optionsList = containerElem.querySelectorAll('.option');
    selected.addEventListener('click', () => {
      optionsContainer.classList.toggle('active');
    });
    optionsList.forEach(o => {
      o.addEventListener('click', () => {
        optionsList.forEach(el => el.classList.remove('active'));
        selected.innerHTML = o.querySelector('label').innerHTML;
        o.classList.add('active');
        optionsContainer.classList.remove('active');
      });
    });
  }
}

/***/ }),

/***/ "./src/assets/js/modules/showHideContent.js":
/*!**************************************************!*\
  !*** ./src/assets/js/modules/showHideContent.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return showHideContent; });
function showHideContent(elemSelector, titleSelector) {
  let closeBtnSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  const elem = document.querySelectorAll(elemSelector);
  elem.forEach(item => {
    const title = item.querySelector(titleSelector);
    title.addEventListener('click', () => item.classList.toggle('open'));

    if (closeBtnSelector) {
      const closeBtn = item.querySelector(closeBtnSelector);
      closeBtn.addEventListener('click', () => item.classList.remove('open'));
    }
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
    if (scrollPosition() > 0) {
      header.classList.add('scroll');
    } else {
      header.classList.remove('scroll');
    }

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