'use strict'

// creo un array di elementi
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// definisco la funzione
function contaElementi(conta){
    
    // definisco la variabile incrementata dal ciclo
    let count = 0;

    // ciclo while per incrementare la variabile
    while(count < conta.length){
        count++
    };

    // la funzione mi porta fuori il valore incrementato dal ciclo
    return count;
};

// stampo
alert(`sono presenti ${contaElementi(myArray)} elementi`);