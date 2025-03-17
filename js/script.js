/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/

//----------SCOMPONIAMO IL PROBLEMA----------
//Definiamo la variabile che contiene il numero di km (valore) inserito dall'utente
//Definiamo la variabile che contiene l'età del passeggero (valore) inserito dall'utente
//Definiamo la variabile che contiene il prezzo del biglietto in base ai km
//Definiamo la variabile che contiene il prezzo totale del biglietto
//Definiamo la variabile che contiene il prezzo finale del biglietto per i minorenni
//Definiamo la variabile che contiene il prezzo finale del biglietto per gli over 65

//Calcoliamo il prezzo del biglietto in base ai km
//Applicare uno sconto del 20% al prezzo finale del biglietto per i minorenni
//Applicare uno sconto del 40% al prezzo finale del biglietto per gli over 65
//Inserire in forma umana (con massimo due decimali) l'output del prezzo finale.

//Definiamo le variabili
let km = prompt('Inserisci km da percorrere');
let age = prompt('Inserisci età passeggero');
let prezzoPerChilometro = 0.21;
let prezzoTotaleBiglietto;
let prezzoBigliettoMinorenni;
let prezzoBigliettoOver65;

//Calcoliamo il prezzo del biglietto in base ai km
prezzoTotaleBiglietto = km * prezzoPerChilometro;

//Calcoliamo il prezzo del biglietto in base all'età 
//Inseriamo l'output del prezzo finale in forma umana
if(age <= 17){
    prezzoBigliettoMinorenni = prezzoTotaleBiglietto * 20 / 100;
    prezzoBigliettoMinorenni = prezzoBigliettoMinorenni.toFixed(2)
    console.log(prezzoBigliettoMinorenni)
}
else if(age >= 65){
    prezzoBigliettoOver65 = prezzoTotaleBiglietto * 40 / 100;
    prezzoBigliettoOver65 = prezzoBigliettoOver65.toFixed(2)
    console.log(prezzoBigliettoOver65)
}
else{
    prezzoTotaleBiglietto
    prezzoTotaleBiglietto = prezzoTotaleBiglietto.toFixed(2)
    console.log(prezzoTotaleBiglietto)
}
