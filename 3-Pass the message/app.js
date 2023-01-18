let input = document.querySelector(".input-text");
let btn = document.querySelector(".button");
let message = document.querySelector(".messaged");

btn.addEventListener("click", () => {
  message.textContent = input.value;
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    message.textContent = input.value;
  }
});
