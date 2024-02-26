let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

function displayTime() {
  let display = document.getElementById('display');
  display.innerHTML =
    (hours < 10 ? '0' + hours : hours) + ':' +
    (minutes < 10 ? '0' + minutes : minutes) + ':' +
    (seconds < 10 ? '0' + seconds : seconds) + ':' +
    (milliseconds < 10 ? '00' + milliseconds : (milliseconds < 100 ? '0' + milliseconds : milliseconds));
}

function startStopwatch() {
  if (!timer) {
    timer = setInterval(updateStopwatch, 10); // Cập nhật mỗi 10 milliseconds
  }
}

function updateStopwatch() {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  displayTime();
}

function stopStopwatch() {
  clearInterval(timer);
  timer = null;
}

function resetStopwatch() {
    clearInterval(timer);
    timer = null;
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    lapNumber = 1;
    let lapList = document.getElementById('lapList');
    lapList.innerHTML = '';
    displayTime();
}
function pauseStopwatch() {
    if (timer) {
      let lapList = document.getElementById('lapList');
      let lapTime = document.createElement('li');
      lapTime.innerHTML = display.innerHTML;
      lapList.appendChild(lapTime);
    }
    clearInterval(timer);
    timer = null;
}
  
function addLap() {
    if (timer) {
      let lapList = document.getElementById('lapList');
      let lapTime = document.createElement('li');
      lapTime.innerHTML = display.innerHTML;
      lapList.appendChild(lapTime);
    }
}