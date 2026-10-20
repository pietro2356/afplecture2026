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
``

for (let i = 0; i < nFigliTot; i++) {
    console.log(`Elemento figlio ${i}: `, listaFigli[0].children[0].textContent);
    cardContainer.removeChild(listaFigli[0]);
    // cardContainer.removeChild(listaFigli.item(i));
}

// CREARE UN NUOVO ELEMENTO

/**
 * Crea un elemento card basato sui dati forniti.
 * @param cardData - Oggetto contenente i dati della card.
 * @returns {HTMLDivElement} - L'elemento card creato.
 */
function createCardElement(cardData){
    const cardElement = document.createElement("div");
    const titolo = document.createElement("h1");
    const sottoTitolo = document.createElement("h2");
    const testo = document.createElement("p");
    const img = document.createElement("img");

    cardElement.classList.add("card");

    titolo.textContent = cardData.contenuto.titolo;
    sottoTitolo.textContent = cardData.contenuto.sottotitolo;
    testo.textContent = cardData.contenuto.testo;

    img.src = cardData.contenuto.immagine;
    img.alt = "Immagine di esempio";

    cardElement.appendChild(titolo);
    cardElement.appendChild(sottoTitolo);
    cardElement.appendChild(testo);
    cardElement.appendChild(img);

    return cardElement;
}


const cardN1 = createCardElement(card);
const cardN2 = createCardElement(card);

// cardContainer.appendChild(cardN1);
// cardContainer.appendChild(cardN2);

for (let i = 0; i < 10; i++) {
    const c = i + 1;

    card.contenuto.titolo = c + "° Posto";

    const cardTmp = createCardElement(card);

    cardTmp.addEventListener("click", (ev) => {
        console.log(cardTmp.children[0].textContent + " cliccata");
        cardTmp.classList.toggle("bg-green");
    });

    cardContainer.appendChild(cardTmp);
}




