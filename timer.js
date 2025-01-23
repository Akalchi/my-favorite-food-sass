const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const hourDisplay = document.querySelector(".hour");
const minuteDisplay = document.querySelector(".minute");
const secondDisplay = document.querySelector(".second");
const millisecondDisplay = document.querySelector(".millisecond");

let timerInterval;
let startTime;
let elapsedTime = 0;
let running = false;

function updateTimerDisplay() {
  const time = elapsedTime;

  const hours = Math.floor(time / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);

  hourDisplay.textContent = String(hours).padStart(2, "0");
  minuteDisplay.textContent = String(minutes).padStart(2, "0");
  secondDisplay.textContent = String(seconds).padStart(2, "0");
  millisecondDisplay.textContent = String(milliseconds).padStart(2, "0");
}

function startTimer() {
  if (running) return;
  running = true;
  startTime = Date.now() - elapsedTime;

  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    updateTimerDisplay();
  }, 10);
}

function stopTimer() {
  running = false;
  clearInterval(timerInterval);
}

function resetTimer() {
  running = false;
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateTimerDisplay();
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
