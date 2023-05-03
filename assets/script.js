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
const allDots = document.querySelector(".dots");

let i = 0;

arrowLeft.addEventListener("click", previousBanner);
function previousBanner() {
  i = i - 1;
  if (i < 0) {
    i = slides.length - 1;
  }
  displayBanner();
}

arrowRight.addEventListener("click", nextBanner);
function nextBanner() {
  i = i + 1;
  if (i >= slides.length) {
    i = 0;
  }
  displayBanner();
}

slides.forEach(function (diapo) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  allDots.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");
dots[0].classList.add("dot_selected");

function displayBanner() {
  imageBanner.src = "./assets/images/slideshow/" + slides[i].image;
  tagLine.innerHTML = slides[i].tagLine;
  let dotSelected = document.querySelector(".dot_selected");
  dotSelected.classList.remove("dot_selected");
  dots[i].classList.add("dot_selected");
}

dots.forEach(function (dot, index) {
  dot.addEventListener("click", function () {
    i = index;
    displayBanner();
  });
});
