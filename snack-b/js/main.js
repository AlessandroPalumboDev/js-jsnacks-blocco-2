'use strict'

// creo un array
const listaElementi = ['uno','due','tre','quattro','cinque','sei','sette','otto'];

// creo un prompt che salvo in una variabile
const input = prompt("Digita l' elemento da cercare nella lista");

// creo la funzione trovaIndice
function trovaIndice(trova, elemento){
    // creo la variabile per la posizione
    let posizione = 0;

    // creo un ciclo for che cicla per tutti gli elementi finché non trova l'elemento'
    for (let i = 0; i < trova.length; i++){

        // 
        if(elemento === trova[i]){
            posizione = i + 1;

        //  
        }else{
            posizione = (`-1 Perchè non in lista`);
        };
    };

    // restituisce la posizione
    return posizione;
};

alert(`L'elemento "${input}" richiesto si trova in posizione ${trovaIndice(listaElementi)}`);

// per ora non funziona 