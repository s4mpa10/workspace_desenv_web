//Aula sobre null e Undefined:

//Aqui vai ter como resposta undefined, por conta da variável ser declarada, mas não inicializada
let valor // não inicializada 
console.log(valor); 

//console.log(valor2); //Aqui o resultado será "is not defined", que significa que a variável nem sequer foi declarada

valor = null; //Ausência de valor/vazia, mas inicializada  
//Usado também para zerar o valor de uma variável

console.log(valor);
//console.log(valor.toString()); //Cuidado com variáveis que estão nulos. Isso vai dá um ERRO!

const produto = {};
console.log(produto.preco); //Como produto foi definido o resultado será undefined.

console.log(produto);

// Mas se incrementar outra propriedade sem ser definida, vai da erro!
// console.log(produto.preco.a);

produto.preco = 3.50;
console.log(produto); //vai imprimir a chave e seu valor 
console.log(produto.preco); // somente o valor que está armazenando preço
console.log(produto.preco.a); //undefined

//EVITAR.
// Tem como também de maneira manual colocar que um atributo seja undefined, mas o correto é deixar par a linguagem realizada essa atribuição do undefined
produto.preco = undefined;
console.log(!!produto.preco);
//CORRETO a ser feito: 
// Deletar o atributo para ter um objeto vazio
// delete produto.preco;
console.log(produto);

produto.preco = null //forma correta de tirar o valor de um atributo
console.log(!!produto.preco);
console.log(produto);













