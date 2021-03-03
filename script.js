const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const milliseconds = document.getElementById("milliseconds");

let time_ms = 0;
let time_ss = 0;
let time_mm = 0;
let time_hh = 0;

let int;

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
  let ms = time_ms < 10 ? `00${time_ms}` : `${time_ms}`;

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
      int = setInterval(displayTimer, 10);
      break;
    case "pause":
      break;
    case "stop":
      break;
  }
});
