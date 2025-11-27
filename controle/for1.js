// Aprendo a utlizar a estrutura de controle: FOR
// Obs: O uso exorbitante de comentários é destinado de maneira educaional

console.log("Lógica de repetição com WHILE");
// No formato de um "while" limitado:
let contador = 1;
while (contador <= 10){
    console.log(`Contando: ${contador}`);
    contador++;
}

// console.log("Fim do código!");

// Utilizando o mesmo exemplo anterior, só que utlizando o for:
/* Percebe-se que no for possui as mesma estruturas: 
 * Declaração: (let i = 1)
 * Condição: (i <= 10)
 * Incremento: (i++) 
 * Observação de relembrar: Utilizando "let" fica mais seguro sobre o valor de "i"
*/

console.log("Lógica de repetição com FOR e declaração let");
for (let i = 1; i <= 10; i++ ){
    console.log(`i = ${i}`);
}
// console.log(`Contador: ${i}`); // RESULTADO: Contador: undefined (A variável "i" desaparece após o for)

console.log("Lógica de repetição com FOR e declaração var");
// Utilizando "var" com o for:
for (var i = 1; i <= 10; i++){
    console.log(`Contador: ${i}`);
}
// console.log(`Contador: ${i}`);// RESULTADO: Contador: 11 (A variável "i" continua existindo após o for)


console.log("Lógica de repetição com FOR percorrendo uma lista");

// Percorreu a lista criada mostrando as notas que foram colocadas na lista
/* Foi necessário utlizar o ".length", responsável por pegar a quantidade de itens que possui em uma lista, destacando assim o seu tamanho*/

const notas = [6.7, 7.4, 9.8, 8.1, 7.7];
for (let i = 0; i < notas.length; i++){
    console.log(`Nota[${i}] = ${notas[i]}`);
}