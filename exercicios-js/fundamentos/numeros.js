const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);

//Verificação se o valor da variável é inteiro:
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = (avaliacao1 * peso1) + (avaliacao2 * peso2);
const media = total / (peso1 + peso2);

console.log('Média ' + media.toFixed(2));

//Converte o valor da variável para String
console.log(media.toString());

//Converte o valor da variável para Binário
console.log(media.toString(2));

//Saber o tipo da variável
console.log(typeof media);