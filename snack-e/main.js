'use strict';

// Creo un array di input
const arrayInput = [1, 2, 3, 4, 5,];

// Creo un array di oputput vuoto
const arrayOutput = [];

// Definisco la funzione rimuoviDallaTesta(arrInput, arrOutput)
function rimuoviDallaTesta(input, output){

    // Creo un ciclo for con i che parte da 1(quindi la seconda posizione dell array di input)
    for(let i = 1; i < input.length; i++){
        // l'elemento i - 1 dell'array di output è uguale all'elemento i dell' array di input
        output[i-1] = input[i];
    }

    // return dell'array di oputput
    return output;
};

// Stampo in console invocando la funzione
console.log(rimuoviDallaTesta(arrayInput, arrayOutput));