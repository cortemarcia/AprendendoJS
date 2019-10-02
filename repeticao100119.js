// 1. Faça um algoritmo que imprima números inteiros de n a 1;
// Decremento
for(let n= 10; n>1; n--){
    console.log(n);
}

// incremento
for(let n= 10; n>1; n++){
    console.log(n);
}

// _______________________________________________________________________________________

// 2. Faça um algoritmo que imprima apenas os números ímpares de 1 a 100; (do-while)
 
let n=1 

do{
    console.log(n);
    if (n%2 === 1){
        n+= 2;
    }
}
while( n<= 100);

// _______________________________________________________________________________________________

// // 4. Faça um algoritmo que imprima a soma dos números múltiplos de 3 e 5, menores que 1000.
let x= 3;
let z= 5;
let res= 0 ;
    for(let i=0; i<1000; i++){
        if (i% x == 0 && i% z == 0){
            res+= i;
        }    
    }
    
//     ____________________________________________________________________________________________________


// 3. Dados dois números calcule o MDC deles.

/* Resolver......  testew*/