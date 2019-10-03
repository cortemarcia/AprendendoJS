// 1. Faça um algoritmo que imprima números inteiros de n a 1;
// Decremento
// for (let n = 10; n > 1; n--) {
//     console.log(n);
// }

// // incremento
// for (let n = 10; n > 1; n++) {
//     console.log(n);
// }

// // _______________________________________________________________________________________

// // 2. Faça um algoritmo que imprima apenas os números ímpares de 1 a 100; (do-while)

// let n = 1

// do {
//     console.log(n);
//     if (n % 2 === 1) {
//         n += 2;
//     }
// }
// while (n <= 100);

// // _______________________________________________________________________________________________

// // // 4. Faça um algoritmo que imprima a soma dos números múltiplos de 3 e 5, menores que 1000.
// let x = 3;
// let z = 5;
// let res = 0;
// for (let i = 0; i < 1000; i++) {
//     if (i % x == 0 && i % z == 0) {
//         res += i;
//     }
// }

// //     ____________________________________________________________________________________________________


// // 3. Dados dois números calcule o MDC deles.

// /* Resolver......  testew*/

// // 5. Seu Miguel da vendinha da esquina, não sabe multiplicar. Faça para ele um programa que dado um número, print (console.log) a tabuada do mesmo de 1 a 10.

// // let num= 5;
// // let num1= 1;

// // while (num1 >10){
// //     console.log(num * num1 )
// //     num1++
// // }

// // ________________________________________________________________________________________________
// // 6. Faça um programa que leia 5 números e informe o maior número.

// let arr = [78, 98, 45, 98, 34]
// let max = 0;

// for (i = 0; i < arr.length; i++) {
//     if(max < arr[i]){
//         max = arr[i]
//     }

// } console.log(max)


// __________________________________


// 7. Faça um Programa que leia um array de 5 números inteiros e mostre-os. (Fazer com a mamãe)

// let arr= [8,98,34,67,87];

// for( let i= 0; i< arr.length;i++){
//     console.log(arr[i]);
// }
// ____________________________________________________________________________________________________

// 8. O Sr. Manoel Joaquim possui uma grande loja de artigos de R$ 1,99, com cerca de 10 caixas. Para agilizar o cálculo de quanto cada cliente deve pagar ele desenvolveu um tabela que contém o número de itens que o cliente comprou e ao lado o valor da conta. Desta forma a atendente do caixa precisa apenas contar quantos itens o cliente está levando e olhar na tabela de preços. Você foi contratado para desenvolver o programa que monta esta tabela de preços, que conterá os preços de 1 até 50 produtos, conforme o exemplo abaixo:

// let preço= parseFloat (1.99);
// let item= 0;

// while( item <= 50){
//     console.log('Quantidade:' + item + ':'+ item* preço.toFixed(2));
//     item++

// }
//  _______________________________________________________________________________________________
// 9. Faça um programa que peça um número inteiro e determine se ele é ou não um número primo. Um número primo é aquele que é divisível somente por ele mesmo e por 1.

let num= 8;
let divisores= 0;

for(i=1; i<= num; i++){
    if(num%i===0){
        divisores++;
    }
}

if (divisores==2){
    console.log(num+ "É um primo");
}

else{
    console.log('Não é primo');
}

// // _____________________________________________________________________________________________________

// 10. A série de Fibonacci é formada pela seqüência 0,1,1,2,3,5,8,13,21,34,55,... Faça um programa capaz de gerar a série até o n−ésimo termo.