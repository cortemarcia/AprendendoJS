// 1. Crie um código que retorne a quantidade de pontos que seu time fez de acordo com o resultado do jogo. (Se o seu time venceu, ele recebe 3 pontos. Se o resultado foi empate, ele recebe 1 ponto. Se ele perdeu, não recebe nada.)

// Usando IF :

function calcularPontos(resultado){
  if(resultado === 'v'){
    return '3';
  }  
  else if (resultado === 'e'){
    return '1';
  }
  else if (resultado==='d'){
    return '0';
  }
  else {
    return 'Resultado Desconhecido'
  }
 }

console.log ('Bora Brasil!!!!');
console.log(calcularPontos('e'));

_______________________________________

SWITCH :

let resultado=prompt('Qual o resultado do jogo?')

switch (resultado) {
  case 'v':
    console.log(' 3 pontos');
    break;
  case 'e':
    console.log('1 ponto');
    break;
  case 'd':
    console.log('0 pontos');
    break;
  default:
    console.log(' REsultado Desconhecido');
}

___________________________________________________________

// 2. Palíndromos são palavras ou frases que podem ser lidas da esquerda para a direita ou da direita para a esquerda. Crie uma função que informe se uma palavra é uma palíndromo.

function checkPalindrome(word) {
 return word == word.split('').reverse().join('');
};


console.log(checkPalindrome('ovo kayak'));

______________________________________________________________

3. Faça uma função que dado um número, retorne se ele é par ou ímpar.


let numero= prompt('Qual o número?');


function parImpar(numero){
  
  let resto = numero % 2;

if(resto === 0){
    console.log("par");
}else{
   console.log ("impar");
}
  
  
}

(parImpar());

________________________________________________________________
4. Faça uma função que dado um número, retorne a classificação do ângulo. (Ângulo agudo: ângulo com medida maior que 0° menor que 90°; Ângulo reto: ângulo com medida igual a 90°; Ângulo obtuso: ângulo com medida maior que 90° e menor que 180°; Ângulo raso: ângulo com medida igual a 0° ou 180°; Ângulo Côncavo: ângulo com medida entre 180° e 360°; Ângulo completo: ângulo com medida igual a 360°).


let pergunta= prompt("Qual o angulo?")

if (pergunta >= 0 && pergunta < 90){
  console.log('Ângulo agudo')
}

else if (pergunta === 90) {
  console.log ('Ângulo reto')
}

else if (pergunta > 90 && pergunta < 180){
  console.log ('Ângulo obtuso')
}

else if (pergunta === 0 || pergunta === 180){
  console.log ('Ângulo raso')
}

else if (pergunta >=180 && pergunta <= 360 ){
  console.log ('Ângulo Côncavo')
}

else if (pergunta === 360){
  console.log ('Ângulo completo')
}
