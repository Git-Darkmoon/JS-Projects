let squares = document.querySelectorAll(".square");

squares.forEach((eachSquare) => {
  eachSquare.addEventListener("mouseenter", () => {
    let a = window
      .getComputedStyle(eachSquare)
      .getPropertyValue("background-color");
    // alert(a);
    document.body.style.backgroundColor = a;

    // alert(document.body.style.backgroundColor);
  });
  eachSquare.addEventListener("mouseleave", () => {
    document.body.style.backgroundColor = "#222";
  });
});
