export default function select(containerElem) {
  if (containerElem) {
    const selected = containerElem.querySelector('.selected');
    const optionsContainer = containerElem.querySelector('.options-container');
  
    const optionsList = containerElem.querySelectorAll('.option');
  
  
    selected.addEventListener('click', () => {
      optionsContainer.classList.toggle('active');
    });
  
    optionsList.forEach(o => {
      o.addEventListener('click', () => {
        optionsList.forEach(el => el.classList.remove('active'));
        selected.innerHTML = o.querySelector('label').innerHTML;
        o.classList.add('active')
        optionsContainer.classList.remove('active');
      });
    });
  }
}