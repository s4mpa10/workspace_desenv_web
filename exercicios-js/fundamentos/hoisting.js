/* Hoisting: Içamento 
    * Ocorre quando uma variável é declarada com "var" e com ela tem escopo global, ocorre que não da erro mas só que o resultado é "undefined"
    * Isso ocorreria erro em muitas linguagens 
    * Então quando eu declaro a variável com "var" é a mesma coisa que jogar ela pra cima

*/
console.log('a = ', a);
var a = 2;
console.log('a = ', a);

// Quando utilizado "let" não ocorre o içamento:
console.log('a = ', a);
let a = 2;
console.log('a = ', a);



 