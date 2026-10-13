let persona = {
    nome: "Mario",
    cognome: "Rossi",
    eta: 30,
    professore: true,
    saluta: (fnCallback) => {
        fnCallback();
    },
    residenza: {
        via: "Via Roma",
        citta: "Milano",
        cap: 20100
    }
}

function salutoCordiale(){
    console.log("Buongiorno, come procede la giornata?");
}
function salutaIlBro(){
    console.log("Ciao bro, come va?");
}

persona.saluta(salutoCordiale);
persona.saluta(salutaIlBro);

persona.saluta(() => console.log("Buongiorno sig. Presidente!"));

// console.log(persona.nome); // "Mario"
//
// persona.cognome = "Milani"; // Modifica del cognome
//
// console.log(persona.residenza.citta); // "Milano"