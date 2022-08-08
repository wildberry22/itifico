import calcScroll from "./calcScroll.js";

export default function preloader() {
  const preloaderElem = document.querySelector('.preloader-bg');

  document.querySelector('body').style.overflowY = 'auto';
  document.querySelector('html').style.overflowY = 'auto';
  document.querySelector('body').style.marginRight = '0';
  preloaderElem.style.opacity = '0';
  preloaderElem.style.paddingLeft = calcScroll() + 'px';
  setTimeout(() => {
    preloaderElem.style.display='none';
  }, 500);
}