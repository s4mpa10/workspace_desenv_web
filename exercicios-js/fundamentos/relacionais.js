// Operações relacionais

// Aconselhado sempre usar o "===" => estritamente igual 

console.log('01)', '1' == 1); //Comparação simples que leva em consideração o número e não leva em consideração o tipo

console.log('02)', '1' === 1); //Comparação que leva em consideração o número e o tipo

console.log('03)', '3' != 3); //Comparação somente o número(valor)

console.log('04)', '3' !== 3); //Comparação estrita

console.log('05)', 3 < 2); // false

console.log('06)', 3 > 2); // true

console.log('07)', '3' <= 2); //false, mas é realizado a operação mesmo tendo tipos diferentes 

const d1 = new Date(0);
const d2 = new Date(0);

// Quando comparado variáveis relacioadas a endereço de memória, não faz diferença ser com dois ou três iguais:
console.log('09)', d1 === d2);
console.log('10)', d1 == d2); 
// Apesar de terem os mesmos valores, o que é comparado não é o valor mais o endereço de memória, então, será false

// A comparação correta seria assim: 
console.log('11)', d1.getTime() === d2.getTime());
// console.log('11*)', d1.getTime() == d2.getTime());

console.log('12)', undefined == null); // true
console.log('13)', undefined === null); // false(tipos diferentes)






