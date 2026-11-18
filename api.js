async function fetchGattini(){
    try{
        const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=2')
        console.log("Risposta HTTP---------------",res);

        const data = await res.json();
        console.log("DATI NEL BODY: \n",data);
    }catch (e){
        console.error("Errore nel caricamento: ", e.message)
    }
    finally {
        console.log("Terminato recupero dei mici");
    }
}

fetchGattini();