/*Definição de dados*/

// Criação de variável, pode ser "var" ou "let"(mais utilizada atualmente)

/* 
Sintaxe: var ou let identif; 
Semântica: variavel(var) identificador(nome) e ";" 
--------------------------------OU--------------------------------
Sintaxe: var ou let identif = 3; 
variavel(var) identificador(nome) e os valores como "= algum valor de qualquer tipo dado"

Dessa ultima forma é armazenado dentro da variavel "identif" o valor 3, alocando assim um espaço na memória*/

console.log(19.9 * 0.6);

let preco = 19.90;
let desconto = 0.4;

/*Os parenteses são importantes para determianr a prioridade na expressão numérica*/
console.log(preco * (1 - desconto));

// Agora pode ser utilizado também com uma variável armazenando essas infromações
let precoComDesconto = preco * (1 - desconto);
console.log(precoComDesconto);

// Concatenação de duas ou mais string -> Sequência de símbolos

let nome = "Caderno";
let categoria = "Papelaria";

console.log("Produto: " + nome + ", Categoria: " + categoria + ",Preço: " + preco + ", Desconto: " + desconto);

/* Diferença entre soma e concatenação
Soma: Quando estou somando dois números -> Número + Número
Concatenação: Quando uma das variáveis é string -> Texto + Número
*/

//Soma:
console.log(1 + 1);

//Concatenação
console.log("1" + 1);

