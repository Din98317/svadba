document.addEventListener('DOMContentLoaded', (event) => {
  const video = document.getElementById('background-video');

  
  
});

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



// Modification

//audio
const audio = document.getElementById('audio');
        const toggleButton = document.getElementById('toggle-button');
        const volumeIcon = document.getElementById('volume-icon');
        audio.volume = 0.3;

        let isMuted = false;

        toggleButton.addEventListener('click', () => {
            isMuted = !isMuted; // Переключаем состояние

            if (isMuted) {
                audio.volume = 0; // Выключаем звук
                volumeIcon.src = './images/mute.png'; // Меняем иконку на "выключенный звук"
            } else {
                audio.volume = 0.3; // Включаем звук на 80%
                audio.play(); // Запускаем воспроизведение, если необходимо
                volumeIcon.src = './images/sound.png'; // Меняем иконку на "включенный звук"
            }
        });

        // Автоначало воспроизведения, если браузер это позволяет
        if (audio.paused) {
            audio.play();
        }

        // анимация сердца
        const heart = document.getElementById('heart');

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY; // Получаем значение прокрутки по вертикали
            const threshold = 100; // Пороговое значение для добавления класса

            if (scrollY > threshold) {
                heart.classList.add('show'); // Добавляем класс, если прокрутка больше порогового значения
            } else {
                heart.classList.remove('show'); // Убираем класс, если прокрутка меньше порогового значения
            }
        });

        // Таймер
        
const countdownDate = new Date("2025-08-28T23:59:59").getTime();

// Обновляем таймер каждую секунду
const x = setInterval(function() {
    // Получаем текущую дату и время
    const now = new Date().getTime();

    // Находим оставшееся время
    const distance = countdownDate - now;

    // Вычисляем время в днях, часах, минутах и секундах
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Выводим результаты в соответствующие элементы
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Если обратный отсчет завершился, выводим сообщение
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Время истекло!";
    }
}, 1000);