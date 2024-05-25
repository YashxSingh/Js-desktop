const form = document.querySelector("form");
const day = document.querySelector("#day");

day.addEventListener("click", (e) => {
  if (document.querySelector("body").style.backgroundColor == "gray") {
    document.querySelector("body").style.backgroundColor = "#f5efd6";
    document.querySelector("form").style.color = "black";
  } else {
    document.querySelector("body").style.backgroundColor = "gray";
    document.querySelector("form").style.color = "white";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  if (!height || height == NaN || height == undefined || height <= 0) {
    result.innerHTML = `Please enter a correct value`;
  } else if (!weight || weight == NaN || weight == undefined || weight <= 0) {
    result.innerHTML = `Please enter a correct value`;
  } else {
    const bmi = (weight / (height ** 2 / 10000)).toFixed(2);
    if (bmi < 18.5) {
      result.innerHTML = `<span>Your BMI is ${bmi}. You are Underweight.</span>`;
    } else if (bmi < 24.9) {
      result.innerHTML = `<span>Your BMI is ${bmi}. You are having Normal Weight.</span>`;
    } else if (bmi < 29.9) {
      result.innerHTML = `<span>Your BMI is ${bmi}. You are Overweight.</span>`;
    } else {
      result.innerHTML = `<span>Your BMI is ${bmi}. You are Obese.</span>`;
    }
  }
});
