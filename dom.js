/**
 * Intercettare elementi HTML
 */

let header = document.getElementById("header_afp");
// let mainContent = document.getElementById("main-content");

let mainContent = document.querySelector("#main-content");
let card = document.querySelectorAll(".card");
console.log(header);
console.log(mainContent);
console.log(card)

mainContent.style.border = "8px dotted orange";
header.style.color = "red";

// header.addEventListener("click", function (){});
// header.addEventListener("click", onClickHeader);
//
// function onClickHeader(){}

header.addEventListener("click", (event) => {
    let x = event.x;
    let y = event.y;

    // if (x < 50){
    //     console.log("Andiamo a sinistra");
    //     let bgActive = header.classList.toggle("bg-green");
    //     console.log(`Classe bg-green attiva: ${bgActive}`);
    // }else if(x >= 50 && x < 200){
    //     console.log("Andiamo a destra");
    // }else{
    //     console.log("fuori range");
    // }

    switch (true) {
        case x < 50:
            console.log("x < 50 - Andiamo a SX");
            break;
        case x >= 50 && x < 200:
            console.log("x >= 50 && x < 200 - Andiamo a DX");
            break;
        default:
            console.log("Fuori range");
            break;
    }

    // console.log("Coordinate del click: x=" + x + "");
    console.log(`Coordinate del click: x=${x}, y=${y}`);
});

let lettere = [
    "B",        // String
    true,       // boolean
    23,         // number
    {},         // Obj
    [],         // Obj
    () => {return NaN}, // Function
    null        // Obj
];

let arr = Array();

// lettere.splice(2, 1);


for (let i = 0; i < lettere.length; i++) {
    /// cpdice da eseguire
    //let item = lettere.at(i);
    let item = lettere[i];

    if (Array.isArray(item)){
        console.log("Elemento in posizione " + i + " è un array");
        continue;
    }

    if (item === null){
        console.log("Elemento in posizione " + i + " è null");
        continue;
    }

    if (typeof item === "object"){
        console.log("Elemento in posizione " + i + " è un oggetto");
        continue;
    }

    if (isNaN(item)){
        console.log("Elemento in posizione " + i + " è NaN");
        continue;
    }

    console.log(`Elemento in posizione ${i}: ${item} di tipo: ${typeof item}`);
}

lettere.map((item, index) => {
    console.log(item);
});

function stampaItem(item, index){
    console.log(`Item in posizione ${index}: ${item}`);
}

lettere.map(stampaItem);

for (let i = 0; i < lettere.length; i++) {
    console.log(lettere[i]);
}






