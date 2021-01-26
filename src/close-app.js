setTimeout(function () {
    var myListener = function () {
        window.close();
    };
    document.addEventListener("mousemove", myListener, false);
    document.addEventListener("keydown", myListener, false);
}, 1000);
