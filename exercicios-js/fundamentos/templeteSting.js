const nome = "Rebeca";
const concatenacao = 'Olá ' + nome + "!";
//Utilizando o tempalte String para concatenação, é utiilzado dessa forma, tem que usar o simbolo da crase `:
// Sintaxe: `colocar o texto ${variavel entre chaves e com o sifraõ}`
const template = `
     Olá 
    ${nome}!`;

console.log(concatenacao);
console.log(template);

// Se necessário ser realizado operações ou chamar métodos, devem ser realizada dentro das chaves, aqui: ${}
console.log(`3 + 2 = ${2+3}`);

// Para criar uma variavel que transforma os valores em letras maiúscuas:
const up = texto => texto.toUpperCase();
console.log(`Ei... ${up("cuidado")}!`); 