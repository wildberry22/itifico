import stickyHeader from './modules/stickyHeader.js';
import blogCardStyle from './modules/blogCardStyle.js';
import coursesCardStyle from './modules/coursesCardStyle.js';
import courseAsideStyle from './modules/courseAsideStyle.js';
import formValidation from './modules/formValidation.js';
import forms from './modules/forms.js';
import select from './modules/select.js';
import gallery from './modules/gallery.js';
import showHideContent from './modules/showHideContent.js';
import preloader from './modules/preloader.js';
import langChange from './modules/langChange.js';


// script for preloader
if(document.querySelector('.preloader')) {
  preloader();
}

document.addEventListener("DOMContentLoaded", () => {
  
  // script to hide the header when scrolling down and show it when scrolling up
  stickyHeader();
  // changing language on the page
  langChange();
  // content overflow control and card animation (blog cards)
  blogCardStyle();
  // content overflow control (courses items)
  coursesCardStyle();
  // accordion course-aside
  courseAsideStyle();
  // slider for Articles section
  try {
    const swiperArticles = new Swiper('.articles-wrapper.swiper', {
      slidesPerView: 4,
      spaceBetween: 30,
      draggable: false,
      allowTouchMove: false,
      pagination: {
        el: ".articles-pagination.swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".articles-button-next.swiper-button-next",
        prevEl: ".articles-button-prev.swiper-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          allowTouchMove: true,
          draggable: true,
        },
        600: {
          slidesPerView: 2,
          allowTouchMove: true,
          draggable: true,
        },
        769: {
          slidesPerView: 2,
          draggable: false,
          allowTouchMove: false,
        },
        900: {
          slidesPerView: 3,
        },
        1240: {
          slidesPerView: 4,
        }
      }
    });
  } catch(e) {}
  
  // slider for Courses section
  try {
    const swiperCourses = new Swiper('.courses-wrapper.swiper', {
      slidesPerView: 2,
      spaceBetween: 30,
      draggable: false,
      allowTouchMove: false,
      pagination: {
        el: ".courses-pagination.swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".courses-button-next.swiper-button-next",
        prevEl: ".courses-button-prev.swiper-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          allowTouchMove: true,
          draggable: true,
        },
        568: {
          slidesPerView: 2,
          draggable: true,
          allowTouchMove: true,
        },
        769: {
          slidesPerView: 2,
          draggable: false,
          allowTouchMove: false,
        },
      }
    });
  } catch(e) {}

  // slider for Articles section
  try {
    const swiperArticles = new Swiper('.article-more__slider.swiper', {
      slidesPerView: 3,
      spaceBetween: 30,
      draggable: false,
      allowTouchMove: false,
      pagination: {
        el: ".articles-pagination.swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".articles-button-next.swiper-button-next",
        prevEl: ".articles-button-prev.swiper-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          allowTouchMove: true,
          draggable: true,
        },
        568: {
          slidesPerView: 2,
          draggable: true,
          allowTouchMove: true,
        },
        769: {
          slidesPerView: 2,
          draggable: false,
          allowTouchMove: false,
        },
        1024: {
          slidesPerView: 2,
        },
        1140: {
          slidesPerView: 3,
        },
      }
    });
  } catch(e) {}

  
  
  // form validation
  formValidation();
  // sending form data on server
  forms();
  // select styling
  try {
    select(document.querySelector('.blog-category__sort'));
  } catch(e) {}
  // img gallery
  try {
    gallery(document.querySelectorAll('[data-gallery]'));
  } catch(e) {}
  // show-hide content (accordion)
  try {
    showHideContent('.course-practice', '#practice-title', '.course-practice__close');
  } catch(e) {}
  try {
    showHideContent('.course-practice__answer', '.course-practice__answer-title');
  } catch(e) {}
 
  // style breadcrumbs on small screans
  if (window.innerWidth <= 568) {
    const link = document.querySelector('.breadcrumbs-list__item.active .breadcrumbs-list__link');
    link.innerHTML.length > 30 ? link.innerHTML = link.innerHTML.slice(0, 30) + '...' : link.innerHTML;
  }
  if (window.innerWidth <= 400) {
    const link = document.querySelector('.breadcrumbs-list__item.active .breadcrumbs-list__link');
    link.innerHTML.length > 20 ? link.innerHTML = link.innerHTML.slice(0, 20) + '...' : link.innerHTML;
  }

  // header adaptive menu
  const menuBtnEl = document.querySelector('.menu-btn');
  const menuEl = document.querySelector('.menu-list');
  const shadow = document.querySelector('.menu-shadow');

  menuBtnEl.addEventListener('click', () => {
    shadow.style.transition = '.25s';
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
    if(window.innerWidth > 768 && menuEl.classList.contains('active') ) {
      menuBtnEl.classList.remove('active');
      menuEl.classList.remove('active');
      shadow.classList.remove('active');
      document.querySelector('body').style.overflowY = 'auto';
      document.querySelector('html').style.overflowY = 'auto';
    }
  }, 100);

  // course navigation adaptive
  try {
    const titleBtn = document.querySelector('.course-aside__title');
    const coursesList = document.querySelector('.course-nav');
    
    titleBtn.addEventListener('click', () => {
      shadow.style.transition = '.6s';
      titleBtn.classList.toggle('active');
      coursesList.classList.toggle('active');
      shadow.classList.toggle('active');
      if (coursesList.classList.contains('active')) {
        document.querySelector('header').style.zIndex = '1';
      } else {
        setTimeout(() => {
          document.querySelector('header').style.zIndex = '1000';
        }, 600);
      }
    });
    setInterval(() => {
      if (window.innerWidth > 900) {
        shadow.classList.remove('active');
        titleBtn.classList.remove('active');
        coursesList.classList.remove('active');
      }
    }, 100);
  } catch(e) {}
 
});