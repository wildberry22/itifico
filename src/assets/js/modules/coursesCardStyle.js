export default function coursesCardStyle() {
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