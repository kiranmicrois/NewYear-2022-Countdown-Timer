'use strict';

const newDate = new Date('Jan 1 2022').getTime();
const displayDays = document.querySelector('.days');
const displayHours = document.querySelector('.hours');
const displayMinutes = document.querySelector('.minutes');
const displaySeconds = document.querySelector('.seconds');

console.log(newDate);

const interval = setInterval(countdownTimer, 1000);

function countdownTimer() {
  const currentDate = new Date().getTime();
  //totalseconds
  let totalSeconds = Math.floor((newDate - currentDate) / 1000);

  //totaldays
  let days = Math.floor(totalSeconds / 3600 / 24);
  //hours remaining
  let hours = Math.floor(totalSeconds / 3600) % 24;
  //minutes remaining
  let minutes = Math.floor(totalSeconds / 60) % 60;
  //seconds remaining
  let seconds = Math.floor(totalSeconds % 60);

  //assigning all values to dom
  displayDays.textContent = days;
  displayHours.textContent = hours;
  displayMinutes.textContent = minutes;
  displaySeconds.textContent = seconds;
  console.log(days, hours, minutes, seconds);
}
countdownTimer();
