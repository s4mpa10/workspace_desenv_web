/* A funcionalidade typeof é responsável por determinar o tipo que determina aquele valor ou variável*/
let idade = 22;
console.log(typeof 22); //number
console.log(typeof idade); //number

// O JavaScript não faz diferenciação do número interior do ponto flutuante 
let salario = 4578.32;
console.log(typeof salario); //number

// Valor booleano(binário)
let estaChovendo = true // ou false;
console.log(typeof estaChovendo);

// Valores string -> Conjunto de símbolos 
console.log(typeof "Teste");
console.log(typeof 'Teste');