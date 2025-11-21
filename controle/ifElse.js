// Utilizando e conhecendo masi sobre a estrutura de controle completa: IF...ELSE...
const imprimirResultado = function(nota){
    if(nota >= 7 && nota <= 10) { 
        console.log("Aprovado!");
    } 
    if (typeof nota !== 'number'){ //Controlar as entregas por meio do js
        console.log("Informe um número");
    } 
    if (nota < 0 || nota > 10){ // Limitar a utilização, entre 0 a 10
        console.log("Informe um número entre 0 a 10!");
    } else{
        console.log("Reprovado!");
    }
}

imprimirResultado(10);
imprimirResultado(4);
imprimirResultado('Epa!'); // Cuidado !!!
imprimirResultado(3);
imprimirResultado(-1);