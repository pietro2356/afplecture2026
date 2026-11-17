"use strict"
const controlloNumerico =
    new Promise((resolve, reject) => {
        const numero = Math.floor(Math.random() * 10);

        if (numero >= 5){
            resolve(`[OK] - Numero estratto maggiore di 5`);
        }else{
            reject(new Error(`[KO] - Numero estratto minore di 5`));
        }
    });

// console.log(controlloNumerico);
/**
 * .then()      - try
 * .catch()     - catch
 * .finaly()    - finaly
 */

controlloNumerico
    .then((res) => {
        console.log(res);
        new Promise.resolve().then(() => {

        })
    })
    .catch((err) => console.error("Errore intercettato: ", err.message))
    .finally(() => console.log("-- Termine della promise"));


async function eseguiControllo(){
    try{
        const result = await controlloNumerico;

        if (!result){
            const data = await
            console.log("[OK] - ", data);
        }
        console.log(result);
    }catch (e){
        console.error("Errore: ", e.message);
    }finally {
        console.log("[KK] - Termine delle operazioni")
    }
}


eseguiControllo();


