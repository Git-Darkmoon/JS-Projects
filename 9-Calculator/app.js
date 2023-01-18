let numberButtons = document.querySelectorAll(".number");
let operationButtons = document.querySelectorAll("#operator");
let deleteButton = document.querySelector("[data-delete]");
let toiletButton = document.querySelector("[data-all-clear]");
let equalsButton = document.querySelector("[data-equals]");
let screen = document.querySelector("#screen-result");
let btns = document.querySelectorAll("button");

numberButtons.forEach((item) => {
  item.addEventListener("click", () => {
    screen.value += item.innerHTML;
  });
});

toiletButton.addEventListener("click", () => {
  screen.value = "";
});

// deleteButton.addEventListener("click", () => {
//  this.value = this.
// });

let firstNumber = 0;
let secondNumber = "";

operationButtons.forEach((operator) => {
  operator.addEventListener("click", () => {
    firstNumber = screen.value;
    screen.value = operator.innerHTML;
    operatorOne = screen.value;
    setTimeout(() => {
      screen.value = "";
    }, 400);
    console.log(firstNumber);
    console.log(operatorOne);
  });
});
equalsButton.addEventListener("click", () => {
  secondNumber = screen.value;
  console.log(`This is the second number ${secondNumber}`);
  let result = `${firstNumber.toString()} ${operatorOne} ${secondNumber.toString()}`;
  console.log(`This is the result string: ${result}`);
  console.log(eval(result));
  screen.value = eval(result);
});
