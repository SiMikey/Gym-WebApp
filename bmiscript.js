const form = document.querySelector("form");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100;
  const bmi = weight / (height * height);

  if (isNaN(bmi)) {
    resultDiv.innerHTML = "Please enter valid values.";
  } else {
    resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(1)}.`;

    if (bmi < 18.5) {
      resultDiv.innerHTML += " You are underweight.";
    } else if (bmi >= 18.5 && bmi < 25) {
      resultDiv.innerHTML += " You have a healthy weight.";
    } else if (bmi >= 25 && bmi < 30) {
      resultDiv.innerHTML += " You are overweight.";
    } else {
      resultDiv.innerHTML += " You are obese.";
    }
  }
});
