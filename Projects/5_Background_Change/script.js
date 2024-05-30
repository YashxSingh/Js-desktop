const start = document.getElementById("start");
const stopper = document.getElementById("stop");
const body = document.querySelector("body");
let color, colorEvent;

stopper.setAttribute("disabled", "");

const changeColor = function () {
    color = parseInt(Math.random() * 16777215).toString(16);
    body.style.backgroundColor = `#${color}`;
};
start.addEventListener("click", () => {
    if (!colorEvent) {
        colorEvent = setInterval(changeColor, 0);
    }
    start.setAttribute("disabled", "");
    stopper.removeAttribute("disabled");
});

stopper.addEventListener("click", () => {
    clearInterval(colorEvent);
    colorEvent = null;
    start.removeAttribute("disabled");
    stopper.setAttribute("disabled", "");
    console.clear();
    console.log(color);
});
