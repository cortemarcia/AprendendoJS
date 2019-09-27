// 5. Altere a função que calcula IMC de maneira que o valor do IMC tenha apenas duas casas decimais

let peso= Number(prompt("Insira o seu peso"));
let altura= Number(prompt("Insira a sua altura"));

function calcularIMC(peso, altura){
  return peso /  ((altura**2));
}

console.log(calcularIMC(peso, altura).toFixed(2));