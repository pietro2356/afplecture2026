/**
 * Restituisce l'oggetto User caricato tramite ID
 * @param userId Identificativo dell'utente
 * @return Promise<Object> Promise contenente l'oggetto User
 */
function loadUserProfileById(userId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           if (userId > 0){
               resolve({
                   id: userId,
                   name: 'Mario',
                   surname: 'Rossi'
               });
           }else{
               reject(new Error('ID utente non valido'));
           }
        }, 5000);
    });
}

function checkIfIdExist(userId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve(userId);
            } else {
                reject(new Error('ID utente non valido'));
            }

            // if (userId > 0) resolve(true);
            // else reject(false);
            //
            // userId > 0 ? resolve(true) : reject(false);
        }, 2000);
    });
}

async function showUserData(id){
    console.log("Caricamento in corso...");
    console.log("Ricerca utente con ID: ", id);
    try{
        const userId = await checkIfIdExist(id);
        const user = await loadUserProfileById(userId);
        console.log("Utente trovato: ", user);
    }catch (e){
        console.error("Impossible recuperare l'utente: ", e.message);
    }finally {
        console.log("Procedura completata\n\n");
    }
}

showUserData(1); // RESOLVE
showUserData(-2) // REJECT





