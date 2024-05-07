// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

'use strict';
// Crea due array che hanno un numero di elementi diversi.
const primoArray = [1, 2, 3, 4, 5];
const secondoArray = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Variabile per elemento casuale (numero)
let elemento = Math.floor(Math.random() * 99);

// ciclo che parte se le lunghezze degli array sono diverse
while (primoArray.length !== secondoArray.length){

    // se il primo è più lungo pusha elemento casuale sul primo
    if(primoArray.length < secondoArray.length){
        primoArray.push(elemento);

    // se invece il secondo è più lungo pusha elemento casuale sul secondo
    } else if(primoArray.length > secondoArray.length){
        secondoArray.push(elemento);
    }
};

// stampa
console.log(primoArray, secondoArray);