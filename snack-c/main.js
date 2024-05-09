'use strict'

// creo array di inmput con tot elementi
const arrayInput = ['uno', 'due', 'tre', 'quattro', 'cinque'];

// definisco funzione stampa()
function stampa(input){

    // definisco la variabile di output vuota
    let output = '';

    // creo un ciclo for che continui a girare fino alla lunghezza dell'array di imput -1 che pushi gli elementi del primo array nel secondo
    for(let i = 0; i < input.length; i++){

        output += input[i];

        if (i < input.length - 1){
            output += ', ';
        }
    };

    // return output
    return output;
};

console.log(stampa(arrayInput));