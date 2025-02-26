let div = document.querySelector("#div");
let button = document.querySelector("button");
let time;
let x;
let isPaused = false;

button.onclick = function () {
  if (!isPaused) {
    // Start the timer
    isPaused = true;
    button.innerText = "Resume";
    x = setInterval(function () {
      time = new Date();
      div.innerText = time.toLocaleString();
    }, 1000);
  } else {
    // Pause the timer
    isPaused = false;
    button.innerText = "Pause";
    clearInterval(x);
  }
};
