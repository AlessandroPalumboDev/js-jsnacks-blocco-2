'use strict'

// creo array di inmput con tot elementi
const arrayInput = ['uno', 'due', 'tre', 'quattro', 'cinque'];

// creo un array di output vuoto
const arrayOutput = [];

// definisco funzione rimuoviDallaCoda()
function rimuoviDallaCoda(rimuovi, nuovoArray){

    // variabile uguale alla lungheza attuale dell'array di input
    const lunghezza = rimuovi.length - 1;

    // creo un ciclo for che continui a girare fino alla lunghezza dell'array di imput -1 che pushi gli elementi del primo array nel secondo
    for(let i = 0; i < lunghezza; i++){
        nuovoArray.push(rimuovi[i]);
    };

    // return array b
    return nuovoArray;
};

console.log(rimuoviDallaCoda(arrayInput, arrayOutput));