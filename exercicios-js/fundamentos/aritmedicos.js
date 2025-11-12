//Operaçãoes Aritmédicas 
/*
 * Binário:
    * Postfix(pós-fixo): d++
    * Prefix: ++d
    * Enfix: op1 + op2

* Unário:
    *  -a ou +a (Tornar ela negativa ou positiva, no caso só opera em um único operador)
*/

const [a, b, c, d] = [3, 5, 1, 15];

const soma = (a + b + c + d);
const subtracao = d - b;
const multiplicacao = a * b;
const diviao = d / a;
const modulo = a % 2; // 0 -> Par ou 1 -> Ímpar

console.log(soma, subtracao, multiplicacao, -diviao, modulo)