let btn = document.querySelector(".button");
let closeBtn = document.querySelector(".closeBtn");
let popup = document.querySelector(".modal");

// Open PopUp
btn.addEventListener("click", () => {
  popup.style.display = "block";
});

// Close PopUp
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// Click outside functionality
window.addEventListener("click", (e) => {
  if (e.target == popup) {
    popup.style.display = "none";
  }
});
