// DOM = Document Object Model

// exo 1 Changer le contenu d'un élément

// on cible un élément avec un querySeletor

const titleElement = document.querySelector("#titre");
const textElement = document.querySelector("#text");

// on modifie avec un textContent
titleElement.textContent = "Bienvenue sur ma page";

textElement.textContent = "Cette page à été modifiée par JavaScrip";

// exo 2 Cacher ou afficher un élément

// on cicle un élément avec getElementById
const buttonElement = document.getElementById("toggle");
const myTextElement = document.getElementById("mon-texte");

// on appel au click addEventListener
buttonElement.addEventListener("click", function () {
    if (myTextElement.style.display === "none") {
        myTextElement.style.display = "block";
    } else {
        myTextElement.style.display = "none";
    }
});

// exo 3 Changer les styles d'un élément

const boxElement = document.getElementById("boite");

const toggleBtn = document.getElementById("toggle");
toggleBtn.addEventListener("click", function () {
    boxElement.style.backgroundColor =
        boxElement.style.backgroundColor === "blue" ? "lightgray" : "blue";
    boxElement.style.fontSize =
        boxElement.style.fontSize === "20px" ? "14px" : "20px";
    boxElement.style.border =
        boxElement.style.border === "2px solid red"
            ? "1px solid black"
            : "2px solid red";
});

// exo 4 Ajouter un élément à la page

const newTitle = document.createElement("h2");
newTitle.textContent = "Titre généré dynamiquement";

const newText = document.createElement("p");
newText.textContent = "Lorem ipsum dolor sit met consectetur adipiscing elit.";

document.body.appendChild(newTitle);
document.body.appendChild(newText);

// exo 5 Supprimer un élément du dom

document.getElementById("supprimer").addEventListener("click", () => {
    const premierP = document.querySelector("#conteneur p");
    if (premierP) premierP.remove();
});

//exo 6 modifier une image

document.addEventListener("DOMContentLoaded", function () {
    const image = document.getElementById("image");
    const btnLeft = document.getElementById("left");
    const btnRight = document.getElementById("right");

    btnLeft.addEventListener("click", () => {
        image.src =
            "https://www.aquaportail.com/pictures2201/chenille-papillon-monarque.jpg";
    });

    btnRight.addEventListener("click", () => {
        image.src =
            "https://cdn.prod.website-files.com/62321a3fcb1f1e70c916da25/64a3012beb7320a44c21bb76_papillon-monarque-emergence20-gridweb.jpg";
    });
});
