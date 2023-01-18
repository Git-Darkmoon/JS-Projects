let prev = document.querySelector("#left-label");
let next = document.querySelector("#right-label");
let image = document.querySelector(".image");

let gallery = [
  "url('iWallpapers/img1.jpg')",
  "url('iWallpapers/img2.png')",
  "url('iWallpapers/img3.jpg')",
  "url('iWallpapers/img4.jpg')",
  "url('iWallpapers/img5.jpg')",
  "url('iWallpapers/img6.jpg')",
  "url('iWallpapers/img7.jpg')",
  "url('iWallpapers/img8.jpg')",
  "url('iWallpapers/img9.jpg')",
  "url('iWallpapers/img10.jpg')",
  "url('iWallpapers/img11.jpg')",
  "url('iWallpapers/img12.jpg')",
  "url('iWallpapers/img13.jpg')",
  "url('iWallpapers/img14.jpg')",
  "url('iWallpapers/img15.jpg')",
  "url('iWallpapers/img16.jpg')",
];

let currentImage = 0;

const showImage = (index) => {
  let picture = gallery[index];
  let imgSummon = image.style;
  imgSummon.backgroundImage = picture;
  imgSummon.backgroundSize = "cover";
  imgSummon.backgroundPosition = "center";
  imgSummon.backgroundRepeat = "no-repeat";
  imgSummon.transition = "all 0.2s ease-in";
};

prev.addEventListener("click", () => {
  currentImage--;
  if (currentImage < 0) {
    currentImage = gallery.length - 1;
  }

  showImage(currentImage);
});
next.addEventListener("click", () => {
  currentImage++;
  if (currentImage > gallery.length - 1) {
    currentImage = 0;
  }
  showImage(currentImage);
});
