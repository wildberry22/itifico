export default function preloader() {
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