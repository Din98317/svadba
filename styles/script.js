// анимация скрола

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }
  

  // анимация слайда
  
//   function modalClose (modal) {
//     modal.classList.add('disable');
//     modal.close();
// }

// window.addEventListener('DOMContentLoaded', () => {
//     const modal = document.querySelector('dialog');
//     const slider = modal.querySelector('.slider');
//     modal.showModal();

//     slider.addEventListener('change', evt => {
//         if (evt.target.value !== '100') {
//             evt.target.value = 0;
//             return;
//         }

//         modalClose(modal);
//     });

// });