export default function coursesAsideStyle() {
  const sections = document.querySelectorAll('.course-nav__list-item');

  sections.forEach(section => {
    const title = section.querySelector('.course-nav__list-title');
    const listItems = section.querySelectorAll('ol > li > a');

    title.addEventListener('click', () => {
      sections.forEach(item => {
        item.classList.remove('visible');
      });
      title.parentNode.classList.add('visible'); 
    });

    listItems.forEach(listItem => {
      listItem.addEventListener('click', () => { 
        sections.forEach(item => {
          item.classList.remove('visible');
          if (item.classList.contains('active')) {
            item.classList.remove('active');
            item.querySelectorAll('ol > li').forEach(li => {
              li.classList.remove('active');
            });
          }
        });

        listItem.parentNode.classList.add('active'); 
        title.parentNode.classList.add('active'); 
        title.parentNode.classList.add('visible'); 
      });
    });

    
  });
}