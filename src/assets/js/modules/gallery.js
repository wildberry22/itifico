import calcScroll from "./calcScroll.js";

export default function gallery(imgWrapper) {
  if (imgWrapper) {
    const previewBox = document.querySelector('.preview-box');
    const previewImg = previewBox.querySelector('img');
    const closeIcon = previewBox.querySelector('.icon');
    const currentImg = previewBox.querySelector('.current-img');
    const totalImg = previewBox.querySelector('.total-img');
    const description = previewBox.querySelector('.description');
    const shadow = document.querySelector('.shadow');
    

    for (let i = 0; i < imgWrapper.length; i++) {
      let image = imgWrapper[i].querySelector('img');
      let descriptionText = imgWrapper[i].querySelector('figcaption').textContent;
      totalImg.textContent = imgWrapper.length;
      description.textContent = descriptionText;
      let newIndex = i;
      let clickImgIndex;
  
      image.onclick = () => {
        clickImgIndex = newIndex;
        function preview() {
          currentImg.textContent = newIndex + 1;
          let selectedImgUrl = imgWrapper[newIndex].querySelector('img').src;
          previewImg.src = selectedImgUrl;
          description.textContent = imgWrapper[newIndex].querySelector('figcaption').textContent;
        }
  
        const prevBtn = document.querySelector('.prev');
        const nextBtn = document.querySelector('.next');
        if (newIndex == 0) {
          prevBtn.style.display = 'none';
        }
        if (newIndex >= imgWrapper.length - 1) {
          nextBtn.style.display = 'none';
        }
  
        prevBtn.onclick = () => {
          newIndex--;
          if (newIndex == 0) {
            preview();
            prevBtn.style.display = 'none';
          } else {
            preview();
            nextBtn.style.display = 'block';
          }
        };
        nextBtn.onclick = () => {
          newIndex++;
          if (newIndex == imgWrapper.length - 1) {
            preview();
            nextBtn.style.display = 'none';
          } else {
            preview();
            prevBtn.style.display = 'block';
          }
        };
  
        preview();
        previewBox.classList.add('show');
        shadow.style.display = 'block';
        document.querySelector('body').style.overflowY = 'hidden';
        document.querySelector('html').style.overflowY = 'hidden';
        document.body.style.marginRight = calcScroll() + 'px';
        document.querySelector('.header').style.paddingRight = calcScroll() + 'px';
  
        closeIcon.onclick = () => {
          newIndex = clickImgIndex;
          prevBtn.style.display = 'block';
          nextBtn.style.display = 'block';
          previewBox.classList.remove('show');
          shadow.style.display = 'none';
          document.querySelector('body').style.overflowY = 'auto';
          document.querySelector('html').style.overflowY = 'auto';
          document.body.style.marginRight = '0px';
          document.querySelector('.header').style.paddingRight = '0px';
        };
      };
    }
  }
}