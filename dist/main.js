// Display date & time
var cs = 0;
var s = 0;
var m = 0;
var h = 0;
var d = 0;
var M = 0;
var y = 0;
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
    var time = d.toString().padStart(2, "0") + ":" + h
        .toString()
        .padStart(2, "0")
        .slice(0, 2) + ":" + m
        .toString()
        .padStart(2, "0")
        .slice(0, 2) + ":" + s
        .toString()
        .padStart(2, "0")
        .slice(0, 2) + ":" + cs.toString().padStart(2, "0").slice(-2) + "\n    ";
    document.getElementById("time").innerText = time;
}
setInterval(showTime, 10);
setTimeout(function () {
    var myListener = function () {
        window.close();
    };
    document.addEventListener("mousemove", myListener, false);
    document.addEventListener("keydown", myListener, false);
}, 100);
//# sourceMappingURL=main.js.map