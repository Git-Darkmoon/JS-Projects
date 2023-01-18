let btn = document.querySelector(".btn");
let color = document.querySelector("#color");
let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

btn.addEventListener("click", () => {
  let hexColor = "#";
  const randomNumber = () => Math.floor(Math.random() * hex.length);
  for (let i = 0; i < 6; i++) {
    hexColor += hex[randomNumber()];
  }

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});
