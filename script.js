let timerInterval;
let currentTime = 0;

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  currentTime = 0;
  displayTime(currentTime);
}

function updateTimer() {
  currentTime++;
  displayTime(currentTime);
}

function displayTime(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  const timeString = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  document.getElementById("timer").textContent = timeString;
}

function padZero(number) {
  return number.toString().padStart(2, "0");
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);