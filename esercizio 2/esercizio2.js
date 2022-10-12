let time = new Date();
time.setTime(0);

function showTime() {
  let timeCounter = time.setTimer() + 1000;
  time.getTime(timeCounter);
  document.querySelector("#show-time").innerHTML += `${time.getHours()}h:${time.getMinutes()}m:${time.getSeconds()}s:${time.getMilliseconds()}ms`;
  setInterval(time, 1000);
}
