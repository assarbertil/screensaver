// Display date & time
let cs = 0;
let s = 0;
let m = 0;
let h = 0;
let d = 0;
let M = 0;
let y = 0;

function showTime() {
  cs = cs + 1;

  if (cs === 100) {
    s++;
    cs = 0;
  }
  if (s === 60) {
    m++;
    s = 0;
  }
  if (m === 60) {
    h++;
    m = 0;
  }
  if (h === 24) {
    d++;
    h = 0;
  }

  const time = `${d.toString().padStart(2, "0")}:${h
    .toString()
    .padStart(2, "0")
    .slice(0, 2)}:${m
    .toString()
    .padStart(2, "0")
    .slice(0, 2)}:${s
    .toString()
    .padStart(2, "0")
    .slice(0, 2)}:${cs.toString().padStart(2, "0").slice(-2)}
    `;
  document.getElementById("time").innerText = time;
}
setInterval(showTime, 10);
