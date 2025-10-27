//Criação de array:
const valores = [7.7, 8.9, 6.3, 9.2];

//Acessando valores dentro do array, valores selecionado com uma delimitação, sendo do índice 0 ao 3
console.log(valores[0], valores[3]);  
console.log(valores[4]); //tentando acessar um índice que não possui no array, a resposta será "undefined"  

valores[4] = 10; // Adicionando de maneira manual, no caso identificando o ínidice e colocando um valor
console.log(valores);  // Imprimir todo o array
console.log(valores.length); // Saber a quantidade de item que tem em um array

//Adicinoar um novo valor ao final do array com o método push():
//Obs: Por ser fracamente tipado o array pode receber vários tipos de dados, como: números, objeto, string, boolean, etc
//Mas isso não é o correto por conta que pode causar erros/problemas com o andamento do projeto  
valores.push({id: 3}, false, null, 'teste');

console.log(valores);  // Imprimir todo o array

// Retira o ultimo valor do array: valores.pop()
console.log(valores.pop());  
// outra forma de excluir é utilizando o delete nome_array[indice]
delete valores[0];

console.log(valores);  // Imprimir todo o array