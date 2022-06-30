export default function blogCardStyle() {
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