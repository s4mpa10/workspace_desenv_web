//Aula destinada ao entendimento sobre os valores booleanos:
// No JS é utilizado o false e o true, para represetnar false e verdadeiro
let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

// Também é permitido a utilização da representação de verdadeiro e falso através de valores matemáticos (1 - Verdadeiro(true) e 0 - Falso(false)): 
isAtivo = 1;

/* É aplicado a lógica no aprendizado da algebra booleana, assim:
Se negar uma vez ("!") significa que você está invertendo o valor da variável:
console.log(!isAtivo); // Negando a variável
Quando nega duas vezes o valor da variável permanece o mesmo:
console.log(!!isAtivo); // Se inicialmente era "true" o resultado será "true" depois das duas negações.
*/

console.log(!isAtivo); // Negando a variável

console.log(!!isAtivo); // Se inicialmente era "true" o resultado será "true" depois das duas negações.

// Os números verdadeiros: 
console.log('os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

// Os números falsos: 
console.log('os falsos...');
console.log(!!0);
// testar se a string está vazia ou não:
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
// diferenca entre null e undefined:
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('pra finalizar...');
console.log(!!('' || null || 0 || 'epa'|| 123));
console.log(('' || null || 0 || ''));

// Caso queria realizar uma verificar e se não tiver preenchido o nome seja colocado o valor "Desconhecido":
let nome = 'Alan';
console.log(nome || "Desconhecido");
