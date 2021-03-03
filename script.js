const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const milliseconds = document.getElementById("milliseconds");

let time_ms = 0;
let time_ss = 0;
let time_mm = 0;
let time_hh = 0;

let interval;

function displayTimer() {
  time_ms += 10;
  if (time_ms == 1000) {
    time_ms = 0;
    time_ss++;
    if (time_ss == 60) {
      time_ss = 0;
      time_mm++;
      if (time_mm == 60) {
        time_mm = 0;
        time_hh++;
      }
    }
  }
  let hh = time_hh < 10 ? `0${time_hh}` : `${time_hh}`;
  let mm = time_mm < 10 ? `0${time_mm}` : `${time_mm}`;
  let ss = time_ss < 10 ? `0${time_ss}` : `${time_ss}`;
  let ms =
    time_ms < 10
      ? `00${time_ms}`
      : time_ms < 100
      ? `0${time_ms}`
      : `${time_ms}`;

  // hours.innerHTML = hh;
  // minutes.innerHTML = mm;
  // seconds.innerHTML = ss;
  // milliseconds.innerHTML = ms;
  writeTime(hh, mm, ss, ms);
}

function writeTime(hh, mm, ss, ms) {
  hours.innerHTML = hh;
  minutes.innerHTML = mm;
  seconds.innerHTML = ss;
  milliseconds.innerHTML = ms;
}

const clickBtn = document.querySelector(".box-bottons");
clickBtn.addEventListener("click", (event) => {
  const { target } = event;
  switch (target.value) {
    case "start":
      interval = setInterval(displayTimer, 10);
      document.getElementById("start").disabled = true;
      document.getElementById("reset").disabled = false;
      document.getElementById("pause").disabled = false;
      break;
    case "pause":
      clearInterval(interval);
      document.getElementById("start").disabled = false;
      document.getElementById("pause").disabled = true;
      document.getElementById("reset").disabled = false;
      break;
    case "reset":
      clearInterval(interval);
      writeTime("00", "00", "00", "000");
      document.getElementById("start").disabled = false;
      document.getElementById("pause").disabled = true;
      document.getElementById("reset").disabled = true;
      time_ms = 0;
      time_ss = 0;
      time_mm = 0;
      time_hh = 0;
      break;
  }
});
