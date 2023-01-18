const showTime = () => {
  let date = new Date();
  let hours = date.getHours(); // 0 - 23
  let minutes = date.getMinutes(); // 0 - 59
  let seconds = date.getSeconds(); // 0 - 59
  let period = "am";

  if (hours > 12) {
    hours -= 12;
    period = "pm";
  }

  hours < 10 ? (hours = `0${hours}`) : hours;
  minutes < 10 ? (minutes = `0${minutes}`) : minutes;
  seconds < 10 ? (seconds = `0${seconds}`) : seconds;

  let time = `${hours} : ${minutes} : ${seconds} ${period}`;
  document.querySelector("#clockDisplay").textContent = time;
};
setInterval(showTime, 1000);
