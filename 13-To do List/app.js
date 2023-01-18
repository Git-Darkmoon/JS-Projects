let toDo = document.querySelector(".input")
let btn = document.querySelector("#btn")
let list = document.querySelector(".items ul")
let checkBtn = document.querySelectorAll(".checkList")
let eraseBtn = document.querySelectorAll(".eraseList")
let text = document.querySelector(".items p")
let liElement = document.querySelector(".items li")

// checkFunction = () => {
//   text.classList.toggle("crossed")
//   console.log("Hola")
// }

// eraseFunction = () => {
//   liElement.remove()
// }

btn.addEventListener("click", () => {
  list.innerHTML += `
  <li>
    <p>${toDo.value}</p>
    <button id="checkList"  style="display: none"></button>
    <button id="eraseList"  style="display: none"></button>
    <span>
      <label class="checkList" for="checkList">
      <i class="far fa-check-circle"></i>
      </label>
      <label class="eraseList" for="eraseList">
        <i class="far fa-times-circle"></i>
      </label>
    </span>
  </li>
    `

  checkBtn.forEach((bCheck) => {
    bCheck.addEventListener("click", () => {
      text.classList.toggle("crossed")
      console.log("hola")
    })
  })

  eraseBtn.forEach((bErase) => {
    bErase.addEventListener("click", () => {
      liElement.remove()
    })
  })

  toDo.value = ""
})

/*

*/
