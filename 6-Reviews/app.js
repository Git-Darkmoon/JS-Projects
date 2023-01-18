let backBtn = document.querySelector("#backLabel");
let forwardBtn = document.querySelector("#forwardLabel");
let image = document.querySelector(".img");
let person = document.querySelector(".name");
let job = document.querySelector(".job");
let info = document.querySelector(".info");
let random = document.querySelector(".random");

let reviews = [
  {
    index: 0,
    img: "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg",
    person: "Susan Smith",
    job: "Web Developer",
    info: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Pellentesque in ipsum id orci porta dapibus.",
  },
  {
    index: 1,
    img: "https://assets.website-files.com/5e7dea65020852f342803d4e/5e8f5ac1e800669015545d59_The%20Kai%20Bond%20-%20Black%20Men%20Talk%20Tech.jpg",
    person: "Peter Jones",
    job: "Sofware Engineer",
    info: "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. ",
  },
  {
    index: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5ZYjLInYuCW1adDmP3nPeYu9-1u2ggh_TQ&usqp=CAU",
    person: "Anna Fox",
    job: "UX Designer",
    info: "Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec rutrum congue leo eget malesuada. Pellentesque in ipsum id orci porta dapibus.",
  },
  {
    index: 3,
    img: "https://i.pinimg.com/736x/49/07/87/490787ec7e4d6681796bf04e31a29c61.jpg",
    person: "Sarah Wizlow",
    job: "Ethical Hacker",
    info: "Donec rutrum congue leo eget malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec sollicitudin molestie malesuada.",
  },
];

let currentItem = 0;

const showPerson = (human) => {
  // Human is referred to the index
  let item = reviews[human];
  image.src = item.img;
  person.textContent = item.person;
  job.textContent = item.job;
  info.textContent = item.info;
};

// Load initial item

window.addEventListener("DOMContentLoaded", () => {
  showPerson(currentItem);
});

forwardBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

backBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

random.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
