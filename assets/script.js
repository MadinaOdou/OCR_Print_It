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

// console.log(slides[2].tagLine);

// const imageOne = document.createElement("img");
// imageOne.src = slides[1].image;

// const tagLineOne = document.createElement("p");
// tagLineOne.innerText = article.tagLine;

// sectionSlides.appendChild(imageOne);
// sectionSlides.appendChild(tagLineOne);

// const arrowLeft = document.querySelector(".arrow_left");

// function showNextImage() {
//   console.log();
// }

// arrowLeft.addEventListener("click", showNextImage);

// const sectionSlides = document.querySelector("banner");
// const sectionSlidesContent = sectionSlides.innerHTML;
// console.log(sectionSlidesContent);

// const arrowLeft = document.getElementsByClassName("arrow_left");

// arrowLeft.addEventListener("click", test);

// function test() {
//   console.log("test ok");
// }

// let fleche_gauche = document.getElementById("fleche_gauche");

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const imageBanner = document.querySelector(".banner-img");
const tagLine = document.querySelector(".tagLine");
const changeClass = document.querySelectorAll(".dot");

// let i = 3;

// arrowLeft.addEventListener("click", previousBanner);

// function previousBanner() {
//   imageBanner.src = "./assets/images/slideshow/" + slides[i].image;
//   tagLine.innerHTML = slides[i].tagLine;
//   i = i - 1;
//   if (i == -1) {
//     i = 3;
//   }
//   console.log(i);
// }

// const arrowRight = document.querySelector(".arrow_right");

// let k = 1;

// arrowRight.addEventListener("click", nextBanner);

// function nextBanner() {
//   imageBanner.src = "./assets/images/slideshow/" + slides[k].image;
//   tagLine.innerHTML = slides[k].tagLine;
//   k = k + 1;
//   if (k == 4) {
//     k = 0;
//   }
//   console.log(k);
// }

let i = 0,
  k = -1;

arrowLeft.addEventListener("click", previousBanner);
function previousBanner() {
  i = i - 1;
  if (i < 0) {
    i = 3;
  }
  k = i + 1;
  if (k === 4) {
    k = 0;
  }
  console.log("i : " + i);
  console.log("k : " + k);
  displayBanner();
  removeDot();
  addDot();
}

function displayBanner() {
  imageBanner.src = "./assets/images/slideshow/" + slides[i].image;
  tagLine.innerHTML = slides[i].tagLine;
}

arrowRight.addEventListener("click", nextBanner);
function nextBanner() {
  i = i + 1;
  if (i >= 4) {
    i = 0;
  }
  k = k + 1;
  if (k >= 4) {
    k = 0;
  }
  console.log(i);
  console.log(k);
  displayBanner();
  removeDot();
  addDot();
}

function removeDot() {
  changeClass[k].classList.remove("dot_selected");
}

function addDot() {
  changeClass[i].classList.add("dot_selected");
}
