/* =====================================================
   BREATHING.JS - the breathing popup on the home page
   (the only JavaScript on the website).
   Every 5 seconds the circle switches between big (breathe in) and small (breathe out).
   ===================================================== */

const popup = document.getElementById('breathe-popup');
const circle = document.getElementById('breathe-circle');
const word = document.getElementById('breathe-word');
let timer = null;

function switchBreath() {
  circle.classList.toggle('big');                  // adds "big" if missing, removes it if there
  if (circle.classList.contains('big')) {
    word.textContent = 'Breathe in';
  } else {
    word.textContent = 'Breathe out';
  }
}

document.getElementById('breathe-open').addEventListener('click', function () {
  circle.classList.remove('big');                  // always start small
  popup.showModal();
  setTimeout(switchBreath, 100);                   // first breath right away
  timer = setInterval(switchBreath, 5000);         // then every 5 seconds
});

document.getElementById('breathe-close').addEventListener('click', function () {
  popup.close();
});

// runs when the popup closes in any way (button or Esc key)
popup.addEventListener('close', function () {
  clearInterval(timer);                            // stop the timer
});
