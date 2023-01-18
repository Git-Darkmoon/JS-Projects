let billValue = document.querySelector("#bill");
let btn = document.querySelector("#btn");

const tp = () => {
  let message = document.querySelector(".message");
  let chosenService = document.querySelector("#service").value;
  let tipPercentage;
  if (chosenService == "excellent") {
    tipPercentage = 0.15;
    message.textContent = "I'll come back definitely";
  } else if (chosenService == "good") {
    tipPercentage = 0.085;
    message.textContent = "Was a good experience!";
  } else if (chosenService == "normal") {
    tipPercentage = 0.045;
    message.textContent = "Yes, it can improve!";
  } else if (chosenService == "meh") {
    tipPercentage = 0.025;
    message.textContent = "I expected more!";
  } else if (chosenService == "notr") {
    tipPercentage = 0;
    message.textContent = "Never coming again!";
  }

  btn.addEventListener("click", () => {
    let tip = document.querySelector(".tipValue");
    let tipValue = billValue.value * tipPercentage;
    tip.textContent = "$" + tipValue.toFixed(2);
  });
};
