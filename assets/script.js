const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const imageBanner = document.querySelector(".banner-img");
const tagLine = document.querySelector(".tagLine");
const changeClass = document.querySelectorAll(".dot");

let i = 0;

arrowLeft.addEventListener("click", previousBanner);
function previousBanner() {
  i = i - 1;
  if (i < 0) {
    i = 3;
  }
  console.log(i);
  displayBanner();
}

function displayBanner() {
  imageBanner.src = "./assets/images/slideshow/" + slides[i].image;
  tagLine.innerHTML = slides[i].tagLine;
  let dotSelected = document.querySelector(".dot_selected");
  dotSelected.classList.remove("dot_selected");
  changeClass[i].classList.add("dot_selected");
}

arrowRight.addEventListener("click", nextBanner);
function nextBanner() {
  i = i + 1;
  if (i >= 4) {
    i = 0;
  }
  console.log(i);
  displayBanner();
}
