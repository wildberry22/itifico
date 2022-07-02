import stickyHeader from './modules/stickyHeader.js';
import blogCardStyle from './modules/blogCardStyle.js';
import coursesCardStyle from './modules/coursesCardStyle.js';

document.addEventListener("DOMContentLoaded", () => {
  // script to hide the header when scrolling down and show it when scrolling up
  stickyHeader();
  // content overflow control and card animation (blog cards)
  blogCardStyle();
  // content overflow control (courses items)
  coursesCardStyle();
  // slider for Articles section
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
  // slider for Courses section
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
});