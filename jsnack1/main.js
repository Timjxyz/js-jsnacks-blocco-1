/* 1-Il software deve chiedere per 10 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti.*/

 //chiedere al player 1 di inserire un numero per 10 volte


let numeriInseriti
let somma=0;   
for (let i=0; i<10; i++) {
   
   numeriInseriti=parseInt(prompt('inserisci un numero: '));
   
   somma+=numeriInseriti
   
}
alert('Il risultato è ' + somma)
