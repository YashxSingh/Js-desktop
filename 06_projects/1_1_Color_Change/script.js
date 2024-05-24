const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const text = document.querySelector(".select_text");
const reset = document.querySelector(".reset");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    body.style.background = button.id;
    switch (button.id) {
      case "orange":
      case "pink":
      case "white":
      case "yellow":
        text.style.color = "#000";
        break;
      default:
        text.style.color = "#fff";
        break;
    }
  });
});

reset.addEventListener("click", () => {
  body.style.background = "#000";
  text.style.color = "#fff";
});
