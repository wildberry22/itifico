export default function stickyHeader() {

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