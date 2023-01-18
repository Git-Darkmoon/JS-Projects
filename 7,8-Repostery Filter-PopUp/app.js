let buttons = document.querySelectorAll(".btn");
let foodies = document.querySelectorAll(".food");

// Filter functionality:

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let filteredArray = Array.from(foodies).filter((card) => {
      return card.classList.contains(btn.textContent);
    });
    Array.from(foodies).forEach((element) => {
      element.classList.add("hide");
      if (btn.textContent == "all") {
        element.classList.remove("hide");
      }
    });
    filteredArray.forEach((item) => {
      item.classList.remove("hide");
    });
  });
});

// Dark Mode functionality:

let checkBtn = document.querySelector("#checkbox");
let dmTitle = document.querySelector(".titleBtn");
let title = document.querySelector(".title");

checkBtn.addEventListener("change", () => {
  if (checkBtn.checked) {
    document.body.style.background = "#222229";
    dmTitle.classList.add("titleChecked"),
      (title.style.color = "#f0f8ff"),
      buttons.forEach((button) => {
        (button.style.color = "#ee6dc3"),
          (button.style.background = "#222229"),
          (button.style.borderColor = "#ee6dc3");
      });
  } else {
    (document.body.style.background = "#eeeeee"),
      (title.style.color = "black"),
      dmTitle.classList.remove("titleChecked"),
      buttons.forEach((button) => {
        (button.style.color = "#000"),
          (button.style.background = "#eeeeee"),
          (button.style.borderColor = "#000");
      });
  }
});

// Modal functionality (PopUp)

let closeBtn = document.querySelector(".closeBtn");
let popupbox = document.querySelector(".modal-content");
let popup = document.querySelector(".modal");
let foodImg = document.querySelectorAll(".fimg");

foodImg.forEach((card) => {
  var image = window
    .getComputedStyle(card)
    .getPropertyValue("background-image");
  card.addEventListener("click", () => {
    popupbox.style.backgroundImage = image;
    popupbox.style.backgroundPosition = "center";
    popupbox.style.backgroundSize = "cover";
    popupbox.style.backgroundRepeat = "no-repeat";

    popup.style.display = "block";
  });
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == popup) {
    popup.style.display = "none";
  }
});
