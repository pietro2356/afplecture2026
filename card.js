"use strict";

let card = {
    contenuto: {
        titolo: "Primo posto", // h1
        sottotitolo:"Sci aplinismo", // h2
        testo: "Primo classificato alle olimpiadi", // p
        immagine: "" // img
    },
    bordo: {
        colore: "",
        stile: "",
        dimensione: "",
        raggio: ""
    }
}

const cardContainer = document.querySelector("#card-container-main");

const listaFigli = cardContainer.children;
const nFigliTot = listaFigli.length;

for (let i = 0; i < nFigliTot; i++) {
    console.log(`Elemento figlio ${i}: `, listaFigli[i]);
    cardContainer.removeChild(listaFigli[0]);
    // cardContainer.removeChild(listaFigli.item(i));
}

// CREARE UN NUOVO ELEMENTO

const cardElement = document.createElement("div");
cardElement.classList.add("card");


const titolo = document.createElement("h1");
titolo.textContent = card.contenuto.titolo;

const sottoTitolo = document.createElement("h2");
sottoTitolo.textContent = card.contenuto.sottotitolo;

const testo = document.createElement("p");
testo.textContent = card.contenuto.testo;

const img = document.createElement("img");
img.src = card.contenuto.immagine;
img.alt = "Immagine di esempio";


cardElement.appendChild(titolo);
cardElement.appendChild(sottoTitolo);
cardElement.appendChild(testo);
cardElement.appendChild(img);

cardContainer.appendChild(cardElement);









