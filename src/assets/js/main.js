import stickyHeader from './modules/stickyHeader.js';
import blogCardStyle from './modules/blogCardStyle';

document.addEventListener("DOMContentLoaded", () => {
  stickyHeader();
  blogCardStyle();

  const swiper = new Swiper('.articles-wrapper.swiper', {
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
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});