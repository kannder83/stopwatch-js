const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const milliseconds = document.getElementById("milliseconds");

const lap = document.getElementById("time-lap");

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

  writeTime("display", time_hh, time_mm, time_ss, time_ms);
}

function writeTime(whereDisplay, now_hh, now_mm, now_ss, now_ms) {
  let hh = now_hh < 10 ? `0${now_hh}` : `${now_hh}`;
  let mm = now_mm < 10 ? `0${now_mm}` : `${now_mm}`;
  let ss = now_ss < 10 ? `0${now_ss}` : `${now_ss}`;
  let ms =
    now_ms < 10 ? `00${now_ms}` : now_ms < 100 ? `0${now_ms}` : `${now_ms}`;

  if (whereDisplay == "display") {
    hours.innerHTML = hh;
    minutes.innerHTML = mm;
    seconds.innerHTML = ss;
    milliseconds.innerHTML = ms;
  }
  if (whereDisplay == "lap") {
    lap.innerHTML += `${hh} : ${mm} : ${ss} : ${ms} <br>`;
  }
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
      document.getElementById("lap").disabled = false;
      break;
    case "pause":
      clearInterval(interval);
      document.getElementById("start").disabled = false;
      document.getElementById("pause").disabled = true;
      document.getElementById("reset").disabled = false;
      document.getElementById("lap").disabled = true;
      break;
    case "reset":
      clearInterval(interval);
      writeTime("display", 0, 0, 0, 0);
      document.getElementById("start").disabled = false;
      document.getElementById("pause").disabled = true;
      document.getElementById("reset").disabled = true;
      document.getElementById("lap").disabled = true;
      time_ms = 0;
      time_ss = 0;
      time_mm = 0;
      time_hh = 0;
      lap.innerHTML = "";
      break;
    case "lap":
      writeTime("lap", time_hh, time_mm, time_ss, time_ms);
      break;
  }
});
