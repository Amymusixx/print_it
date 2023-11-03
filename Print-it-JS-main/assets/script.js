// Tableau qui regroupe les images et titres de chaque slide pour le carousel. 
const slides = [
    {
        "image":"slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
]

// Définition des variables pour la suite des fonctions. 
let numero = 0;
const nbBulletPoint = slides.length;

// Affichage des flèches sur le slider, avec un évènement au clic gauche ou droit qui permet de changer de slide et de changer le bullet point. 
const flecheGauche = document.querySelector(".arrow_left");
flecheGauche.addEventListener("click", () => {ChangeSlide(-1);
console.log(flecheGauche); ChangeDot(-1);
});

const flecheDroite = document.querySelector(".arrow_right");
flecheDroite.addEventListener("click", () => {ChangeSlide(1); ChangeDot(1);
console.log(flecheDroite);
});

// Fonction qui permet de faire défiler les slides.
function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slides.length -1;
    if (numero > slides.length -1)
        numero = 0;

        // Récupération de l'image
    let sliderImage = document.getElementById("slide");
    sliderImage.src = "./assets/images/slideshow/"+slides[numero].image;

        // Récupération du texte 
    let sliderText = document.querySelector("#banner p");
    sliderText.innerHTML = slides[numero].tagLine;
  
}

// Création des bullet points :

let bullet = `<div class="dot"></div>`;

let dots = document.querySelector(".dots");
dots.innerHTML = `${bullet.repeat(nbBulletPoint)}`;
dots.firstChild.className = "dot dot_selected";

//  Fonction permettant de faire défiler les bullet points :

let bulletSelected = 0;

function ChangeDot(sens) {
  bulletSelected = bulletSelected + sens;
  bulletPrecedent = bulletSelected - sens;

  if (bulletSelected < 0) {
    bulletSelected = dots.childNodes.length - 1;
  } else if (bulletSelected > dots.childNodes.length - 1) {
    bulletSelected = 0;
  }

  dots.childNodes[bulletPrecedent].className = "dot";
  dots.childNodes[bulletSelected].className = "dot dot_selected";
}

// Défilement automatique de carousel. 
setInterval("ChangeSlide(1)", 4000);
setInterval("ChangeDot(1)", 4000);