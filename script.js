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

let numero = 0;

// Affichage des flèches sur le slider.
const flecheGauche = document.querySelector(".arrow_left");
flecheGauche.addEventListener("click", () => {ChangeSlide(-1);
console.log(flecheGauche);
});

const flecheDroite = document.querySelector(".arrow_right");
flecheDroite.addEventListener("click", () => {ChangeSlide(1);
console.log(flecheDroite);
});

// Fonction qui permet de faire défiler les slides.
function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slides.length - 1;
    if (numero > slides.length - 1)
        numero = 0;

        // Récupération de l'image
    let sliderImage = document.getElementById("slide");
    sliderImage.src = "./assets/images/slideshow/"+slides[numero].image;

        // Récupération du texte 
    let sliderText = document.querySelector("#banner p");
    sliderText.innerHTML = slides[numero].tagLine;
}

// Ajout des bullet points sur la partie basse du slider. 
const dotsDiv = document.querySelector(".dots");

for (let i = 0; i < 3; i++) {
    const bullet = document.createElement('span');
    dotsDiv.appendChild(bullet);
    bullet.classList.add("dot");

}

let bullet_actif = document.getElementById("bullet_actif");
bullet_actif.classList.add("dot_selected");

setInterval("ChangeSlide(1)", 4000);