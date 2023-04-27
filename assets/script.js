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

console.log("bienvenue !");

// let fleche_gauche = document.getElementById("fleche_gauche");
const fleche_gauche = document.querySelector(".arrow_left");
const imageBanner = document.querySelector(".banner-img");
const tagLine = document.querySelector("#tagLine");

console.log(tagLine.innerHTML);

let compteur = 1;

fleche_gauche.addEventListener("click", messageConsole);

function messageConsole() {
  console.log("Valeur du compteur : " + compteur);
  imageBanner.src = "./assets/images/slideshow/" + slides[compteur].image;
  tagLine.innerHTML = slides[compteur].tagLine;
  compteur = compteur + 1;
  if (compteur == 4) {
    console.log("retour à zéro");
    compteur = 0;
  }
  console.log("Valeur du compteur : " + compteur);
}
