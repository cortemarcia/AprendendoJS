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

// console.log(res);

// //     ____________________________________________________________________________________________________


// // 3. Dados dois números calcule o MDC deles.

// // /let x= 90;
// let y= 54;
// let divisor= 2;
// le


// // 5. Seu Miguel da vendinha da esquina, não sabe multiplicar. Faça para ele um programa que dado um número, print (console.log) a tabuada do mesmo de 1 a 10.

// // let num= 5;
// // let num1= 1;

// // while (num1 >10){
// //     console.log(num * num1 )
// //     num1++
// // }

// &&

// let arr= [0, 1,2,3,4,5,6,7,8,9,10];
// let x= Number(prompt('Qual o número?')); 

//   for( let i= 0; i< arr.length;i++){  

//    console.log(`o resultado é: ${x}x ${ arr[i]}= ${ x * arr[i]}`);
// }

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

// let num = 8;
// let divisores = 0;

// for (i = 1; i <= num; i++) {
//     if (num % i === 0) {
// let num= 8;
// let divisores= 0;

// for(i=1; i<= num; i++){
//     if(num%i===0){
//         divisores++;
//     }
// }

// if (divisores == 2) {
//     console.log(num + "É um primo");
// }

// else {
// if (divisores==2){
//     console.log(num+ "É um primo");
// }

// else{
//     console.log('Não é primo');
// }

// // _____________________________________________________________________________________________________

// 10. A série de Fibonacci é formada pela seqüência 0,1,1,2,3,5,8,13,21,34,55,... Faça um programa capaz de gerar a série até o n−ésimo termo.

// function fibonacci(num) {
//     let seq = [0,1];
//     for (let i = 2; i <= num; i++) {
//       seq.push(seq[i-1] + seq[i-2]);
//     }
//     return seq;
//   }

//   console.log (fibonacci(10));



//   __________________________________________________________________________________________________________________________

// 11. O Sr. Manoel Joaquim expandiu seus negócios para além dos negócios de 1,99 e agora possui uma loja de conveniências. Faça um programa que implemente uma caixa registradora rudimentar. O programa deverá receber um número desconhecido de valores referentes aos preços das mercadorias. Um valor zero deve ser informado pelo operador para indicar o final da compra. O programa deve então mostrar o total da compra e perguntar o valor em dinheiro que o cliente forneceu, para então calcular e mostrar o valor do troco. Após esta operação, o programa deverá voltar ao ponto inicial, para registrar a próxima compra. A saída deve ser conforme o exemplo abaixo:

// Lojas Tabajara

// Produto 1: R$ 2.20

// Produto 2: R$ 5.80

// Produto 3: R$ 0

// Total: R$ 9.00

// Dinheiro: R$ 20.00

// Troco: R$ 11.00



// RESOLVER!!!!1

// ________________________________________________________________________________________________________________________________

// var fib = [0, 1];
// for(var i=fib.length; i<10; i++) {
//     fib[i] = fib[i-2] + fib[i-1];
// }
// console.log(fib); 


// ______________________________________________________________________________________________________________
// 12. O Departamento Estadual de Meteorologia lhe contratou para desenvolver um programa que leia as um conjunto indeterminado de temperaturas, e informe ao final a menor e a maior temperaturas informadas, bem como a média das temperaturas.

// let arr = [78, 98, 45, 98, 34]
// let max = 0;

// for ( var i = 0; i < arr.length; i++) {
// let min = 99999;
// for (i = 0; i < arr.length; i++) {
//     if(max < arr[i]){
//         max = arr[i]

// } 
// for ( var y = 0; y < arr.length; y++) {
//     if(min > arr[y]){
//          min = arr[y]
//     }  

// }
// console.log(max, min);
// } console.log(max)

// for (i = 0; i < arr.length; i++) {
//     if(min > arr[i]){
//         min = arr[i]
//     }

// } console.log(min)    

// console.log((max + min) / 2)
//  ____________________________________________________________________________________________

// 14. Para calcular o fatorial de um número, você multiplica todos os números menores que ele até 1. Por exemplo, 10! = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1. Faça um algoritmo que dado um número calcule o fatorial do mesmo.

// function calcularFatorial(num) {

//     for (let i = num - 1; i >= 1; i--) {
//         num *= i;

//     }
//     return num;


// }

// console.log(calcularFatorial(5));

// ________________________________________________________________________________________

// 15. Faça uma função que receba uma quantidade x e retorne um array com x números randomicos.

function randomico(quantidade){  
    
    return Math.floor(Math.random() * quantidade)
  
}

let arr=[];
for( let i=0; i<5; i++){
  arr.push(randomico(4));
}
console.log(arr);

_____________________________________________________________________________________________________