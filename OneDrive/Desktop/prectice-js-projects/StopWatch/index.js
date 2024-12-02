let timer = null;
let seconds = 0;

function formatTime(sec) {
  const hrs = Math.floor(sec / 3600);
  const mins = Math.floor((sec % 3600) / 60);
  const secs = sec % 60;
  return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateDisplay() {
  document.getElementById('time').textContent = formatTime(seconds);
}

document.getElementById('start').onclick = () => {
  if (!timer) {
    timer = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
  }
};

document.getElementById('stop').onclick = () => {
  clearInterval(timer);
  timer = null;
};

document.getElementById('reset').onclick = () => {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  updateDisplay();
};
