import stickyHeader from './modules/stickyHeader.js';
import blogCardStyle from './modules/blogCardStyle.js';
import coursesCardStyle from './modules/coursesCardStyle.js';
import formValidation from './modules/formValidation.js';
import forms from './modules/forms.js';
import select from './modules/select.js';


document.addEventListener("DOMContentLoaded", () => {
  // script to hide the header when scrolling down and show it when scrolling up
  stickyHeader();
  // content overflow control and card animation (blog cards)
  blogCardStyle();
  // content overflow control (courses items)
  coursesCardStyle();
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
    });
  } catch(e) {}
  
  // form validation
  formValidation();
  // sending form data on server
  forms();

  select(document.querySelector('.blog-category__sort'));
});