export default function showHideContent(elemSelector, titleSelector, closeBtnSelector = false) {
  const elem = document.querySelectorAll(elemSelector);

  elem.forEach(item => {
    const title = item.querySelector(titleSelector);
    title.addEventListener('click', () => item.classList.toggle('open'));

    if (closeBtnSelector) {
      const closeBtn = item.querySelector(closeBtnSelector);
      closeBtn.addEventListener('click', () => item.classList.remove('open'));
    }
  });

}