// Troca do valor das variáveis:

let a = 7;
let b = 94;
let c = a;

a = b;
b = c;

// [a, b] = [b, a] 

//depois da troca... a = 94 e b = 7
console.log("a = " + a);
console.log("b = " + b);

/*Técnica presente no JavaScript que também da certo para trocar o valor das variáveis:
 * [a, b] = [b, a] 
 * Dessa forma, é possível através disso trocar os valores das variáveis 
*/