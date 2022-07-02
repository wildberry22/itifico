export default function coursesCardStyle() {
  const cards = document.querySelectorAll('.courses-item');

  cards.forEach(card => {
    const description = card.querySelector('.courses-item__descr');
    
    description.innerText.length > 215 ? description.innerText = description.innerText.slice(0, 215) + '...' : description.innerText;
  });
}