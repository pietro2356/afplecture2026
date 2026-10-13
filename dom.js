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

    if (x < 50 && y < 50){
        console.log("Andiamo a sinistra");
    }else{
        console.log("Andiamo a destra");
    }

    // console.log("Coordinate del click: x=" + x + "");
    console.log(`Coordinate del click: x=${x}, y=${y}`);
});

header.addEventListener("mo", () => {});





