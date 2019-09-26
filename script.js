//1. Crie uma função que receba 1 parâmetro e calcule 5% de desconto, retornando o valor do desconto;

let valor = Number(prompt('digite um valor para ser calculado'));

function calcDesconto (num1){
  let desconto = num1*0.05;
  console.log(desconto);
}

calcDesconto(valor);

//2. Crie uma função que receba 2 parâmetros e exiba o resultado e o resto da divisão entre eles;

let dividendo = Number(prompt('insira um número para dividir'));
let divisor = Number(prompt('insira um número para ser o divisor'));

function calcDivisao (num1, num2){
  let resultado = num1/num2;
  let resto = num1%num2;
  console.log(resultado, resto);
}

calcDivisao(dividendo, divisor);

//3. Crie uma função que recebe 2 parâmetros (altura e peso) e retorna o IMC;

let peso = Number(prompt('insira seu peso'));
let altura = Number(prompt('insira sua altura'));

function calcIMC (peso, altura){
  return peso / parseFloat((altura*altura));
}

console.log(calcIMC(peso, altura).toFixed(2));

//4. Crie uma função que recebe 3 parâmetros, e utilizando a fórmula de Báskara, mostre o resultado de x' e x".

function calcBhaskara(a, b, c){  
    let delta = b**2 - 4*a*c;  
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    
    console.log('o valor de x1 é ' + x1 + ' e o valor de x2 é ' + x2);
  }
  

/*5. Refatore seu código da questão anterior, de maneira que o novo código possua 3 funções:

a. A primeira recebe 3 parâmetros e calcula apenas o resultado de "delta";

b. A segunda recebe 3 parâmetros e calcula o resultado de x';

c. A terceira recebe 3 parâmetros e calcula o resultado de x";*/

function calcDelta(a, b, c){
    return b**2 - 4*a*c;
  }
  
  let delta = calcDelta(1,5,4);
  
  
  function calcXi(a, b, c){
    return (-b + Math.sqrt(delta)) / (2 * a);
  }
  
  console.log(calcXi(1,5,4));
  
  
  function calcXii(a, b, c){
    return (-b - Math.sqrt(delta)) / (2 * a);
  }
  
  console.log(calcXii(1, 5, 4));

//6. Crie uma função que calcule quantos dias o usuário viveu, baseado na idade;

let idade = Number(prompt('quantos anos você tem?'));

function calculaIdade(a){
  return idade * 365;
}

console.log('você viveu ' + calculaIdade(idade) + ' dias');

//7. Crie uma função que calcule quantos batidas por dia dá um coração, considerando que, ele bate a 70 bpm;

function batida(){
    let minutos = 60*24;
    return 70 * minutos;
    
  }
  
  console.log('o coração dá ' + batida() + ' batidas por dia.');

//8. Encontre as batidas do coração da pessoa com base na idade

let idade = Number(prompt('quantos anos você tem?'));

function calculaIdade(a){
  return idade * 365;
}

let anos = calculaIdade(idade);

function batida(){
  let minutos = 60*24;
  return 70 * minutos; 
}


let bpm = batida();

function tempoDeVida(){
  return anos * bpm;
}
console.log('seu coração bateu ' + tempoDeVida() + ' vezes.');