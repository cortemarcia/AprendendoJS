// 6. Baseado na tabela abaixo, escreva um algoritmo que leia o código do item adquirido pelo consumidor e a quantidade, calculando e mostrando o valor a pagar. A mensagem de retorno deve conter o produto, a quantidade e o valor total a pagar.


function fazerPedido (codigo, quantidade){
    switch(codigo) {
        case 100:
             return "Vc esta comprando Cachorro quente " + "por " + 1.70* quantidade ;

        case 101:
             return "Vc esta comprando Bauru Simples " + "por " + 2.30* quantidade ;

        case 102:
             return "Vc esta comprando Bauru com ovo " + "por " + 2.60* quantidade ;

        case 103:
             return "Vc esta comprando Hamburguer " + "por " + 2.40* quantidade ; 
             
        case 104:
            return "Vc esta comprando Cheeseburguer " + "por " + 2.40* quantidade ;
            
        case 105:
             return "Vc esta comprando Refrigerante " + "por " + 1.00* quantidade ;    

         default:
     return "Não tem esse produto";
    }
     
}
 console.log(fazerPedido( 105, 3));


//  _______________________________________________________________________________________________________


// 7. Escreva um código que receba dois número e determine qual o maior entre eles.

function calcularnumero(num1, num2){
    if (num1 > num2 ) 
     return 'O número '+ num1 + " é maior.";
    
    else if (num1 === num2)
     return 'Nenhum é maior';
     
    else (num1 < num2)
     return 'O número ' + num2 + " é maior." ;

}

console.log (calcularnumero( 100, 70));

// _________________________________________________________________________________________________________

// 8. Escreva um código que receba um número (1-7) e devolva o dia da semana correspondente.


function diaDaSemana(numero){

    switch (numero){
        case 1:
            return "Hoje é domingo";
         
        case 2: 
            return'Hoje é segunda';
           
        
        case 3:
            return "Hoje é terça"; 
            
        case 4:
            return "Hoje é quarta";
         
        case 5:
            return "Hoje é quinta";
        
        case 6: 
            return'Hoje é sexta';
        
        case 7: 
            return'Hoje é sabado';   
            
        default:
            return 'Não identificado';

    }
}

console.log (diaDaSemana(6)) ;

// _____________________________________________________________________________________________________

/* 
9. Escreva um código que receba um número (1-12), e diga qual mês e quantos dias ele tem. */

function diaDaSemana(numero){

        switch (numero){
            case 1:
                return "Hoje é janeiro";
             
            case 2: 
                return'Hoje é fevereiro';
               
            
            case 3:
                return "Hoje é março"; 
                
            case 4:
                return "Hoje é abril";
             
            case 5:
                return "Hoje é maio";
            
            case 6: 
                return'Hoje é junho';
            
            case 7: 
                return'Hoje é julho';   

            case 8:
                return "Hoje é agosto";
                     
            case 9: 
                return'Hoje é setembro';                       
                    
            case 10:
                return "Hoje é outubro"; 
                        
            case 11:
                return "Hoje é novembro";
                     
            case 12:
                return "Hoje é dezembro";
                    
                                
            default:
                return 'Não identificado';
    
        }
    }
    
    console.log (diaDaSemana(6)) ;

// // ________________________________________________________________________________________________

// 10. Utilizando switch-case, receba uma letra e determine se é uma vogal ou consoante.


function definirLetra( letra ){
    switch (letra){
        case "a":
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return "É uma vogal";
        
        default: 
        return "É um consoante";

    }
}

console.log ( definirLetra('m')) ;
// // ____________________________________________________________________________________________

// 11. Escreva um código que receba três ângulos e determine se eles formam um triângulo válido. Em um triângulo válido, a soma dos três ângulos é igual a 180º.

function calcularAngulo (num1, num2, num3){
    if (num1+ num2+ num3 == 180){
        return "Angulo válido";
    }

    else {
        return "angulo não válido";
    }
}

console.log (calcularAngulo (50, 70, 80));

// ___________________________________________________________________________________________________

// 12. Vamos reescrever a função de Báskara. Para isso temos que verificar atráves de delta se é possível calcular x' e x". Se delta for menor que zero, a equação não tem raízes. Se delta for igual a zero, a equação tem uma raiz. Se delta for maior que zero, a equação tem duas raízes.

function calcBhaskara(a, b, c){  
    let delta = b**2 - 4*a*c;  
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);

    console.log('o valor de x1 é ' + x1 + ' e o valor de x2 é ' + x2);

    if (delta < 0){
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        return " Não tem raiz";
    }    

    else if (delta === 0 ){
        return "Equação tem raiz";
    }   
    
    else  if ( delta > 0){
        return "Equação tem 2 raizes";    
    }

    else {
        return "Seus parametro são válidos.";
    }
  }

  console.log(calcBhaskara(1, 5, 4));



 
 
 