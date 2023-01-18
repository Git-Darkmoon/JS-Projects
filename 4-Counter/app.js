let increase = document.querySelector(".add"),
  decrease = document.querySelector(".less"),
  reset = document.querySelector(".reset"),
  number = document.querySelector(".number");

const checker = () => {
  if (counting < 0) {
    number.style.color = "red";
  } else if (counting > 0) {
    number.style.color = "green";
  } else {
    number.style.color = "black";
  }
};

let counting = 0;

increase.addEventListener("click", () => {
  number.textContent++;
  counting++;
  checker();
});
decrease.addEventListener("click", () => {
  number.textContent--;
  counting--;
  checker();
});
reset.addEventListener("click", () => {
  number.textContent = 0;
  counting = 0;
  checker();
});
