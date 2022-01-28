// 2-Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

/*let cubo;
let numeroUtente=parseInt(prompt('Inserisci un numero per verificare il suo cubo'));

console.log(numeroUtente **= 3);
*/

const numero=parseInt(prompt('inserisci il valore fino a quando ti stampo il cubo'));

if(isNaN(numero) || numero<=0){
    alert('Inserisci un numero valido');
}else{
    for(let i= 1; i<=numero; i++){
        const cubo=Math.pow(i,3);

        console.log(cubo)
    }
}