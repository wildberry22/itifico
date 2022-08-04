export default function langChange() {
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
    } catch(e) {}
    
  });

  function changeURLLang() {
    let curLang;
    lang.forEach(item => {
      if (item.classList.contains('active')) {
        curLang = item.getAttribute('data-lang');
      }
    });

    location.href = window.location.pathname +'#'+curLang;
  }

  function changeLang() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    
    if (!allLang.includes(hash)) {
      location.href = window.location.pathname +'#'+'uk';
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
  } catch(e) {}
}