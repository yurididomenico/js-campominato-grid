// JAVASCRIPT //
console.log("YDD");

/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/





function gioco()
{
    // Definisco variabile area di gioco
    let griglia = document.getElementById('areaGioco');
    griglia.innerHTML = "";

    // Definisco variabile per il quadrato
    let quadrato;
    
    //creazione 100 div - con evento click
    for(let i=0; i<100; i++)
    {
        quadrato = creaQuad();
        // console.log(quadrato);

        //Inserisco il numero nel quadrato
        quadrato.innerText = i+1;
        quadrato.classList.add('d-flex');
        quadrato.classList.add('justify-content-center');
        quadrato.classList.add('align-items-center');

        //Attivo i quadrati
        quadrato.addEventListener('click', function()
        {
            console.log(i+1);
            this.classList.toggle('active');
        })

        griglia.append(quadrato);
    }

    
}

//Funzione genera un div
function creaQuad()
{
    // Creo un elemento "Div"
    let div = document.createElement('div');
    // Aggiungo la classe "gridBox"
    div.classList.add('gridBox');
    return div;
}

















function refresh()
{
    location.reload();
}
// ----- FINE :) -----