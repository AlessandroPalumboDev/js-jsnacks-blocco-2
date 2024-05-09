'use strict'

// creo un array
const listaElementi = ['uno', 'due', 'tre', 'quattro', 'cinque', 'sei', 'sette', 'otto'];

// creo un prompt che salvo in una variabile
const input = prompt("Digita l' elemento da cercare nella lista").toLowerCase();

// creo la funzione trovaIndice
function trovaIndice(trova, elemento) {
    // creo la variabile per la posizione
    let posizione = 0;

    // dichiaro variabile booleana su falso
    let check = false;

    // FUORI DAL CICLO !
    //  se check è falso la posizione risulta -1
    if (check === false) {
        posizione = (`-1 Perchè non in lista`);
    };

    // creo un ciclo for che cicla per tutti gli elementi finché non trova l'elemento'
    for (let i = 0; i < trova.length; i++) {

        // se elemento inserito è uguale a elemento array
        if (elemento === trova[i]) {
            check = true;
            posizione = i + 1;
        };
    };

    // restituisce la posizione
    return posizione;
};

alert(`L'elemento "${input}" richiesto si trova in posizione ${trovaIndice(listaElementi, input)}`);

