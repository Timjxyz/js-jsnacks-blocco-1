/* 1-Il software deve chiedere per 10 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti.*/

 //chiedere al player 1 di inserire un numero per 10 volte

let numeri=false;
let numeriInseriti
for (let i=0; !numeri; i++) {
   if (i<10){   
    numeriInseriti=prompt('inserisci un numero: ');
    
   }else{
    
    numeri=true;
    let somma=numeriInseriti * 10;   
    alert('il risultato dei numeri inseriti è' + somma)
        
   }

}

