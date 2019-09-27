// // 1. Crie uma função que dado um número seja retornado o número reverso. Ex.: dado 1234, devolve 4321.

function inverterNumero(numero){
  return numero.toString().split("").reverse().join("");  
}

 console.log (inverterNumero("1234"));

// // ________________________________________________________________________


// 2. Crie uma função que recebe uma palavra e ordena suas letras em ordem alfabética.

function ordenarpalavra(palavra){
  return palavra.toString().split("").sort().join("");
}
 console.log(ordenarpalavra("Marcia"));

// __________________________________________________________________________________

// 3. Crie uma função que receba uma string, contendo nome e sobrenome, e retorne as inicias. Ex.: dado "Débora Borges", retorne "DB".

  

function pegaIniciais(nomeSobrenome){
 let letra1 = nomeSobrenome.substr(0,1);
  
 let posicaoEspaco = nomeSobrenome.indexOf(" ");
 let letra2 = nomeSobrenome.substr(posicaoEspaco+1, 1);
 return letra1 + letra2;
   
}
 console.log (pegaIniciais("Marcia CORTE"));

___________________________________________________________

// 4. Crie uma função que receba a quantidade de bilhetes vendidos em um concurso e sorteie um bilhete.


function qtdBilhetes(min, max){
 return Math.floor(Math.random() * max + 1);
  
}

console.log (qtdBilhetes(10, 70));