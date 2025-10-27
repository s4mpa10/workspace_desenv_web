// Algumas coisas que o JavaScript faz por ser fracamente tipada:

// Qualquer número dividio por 0 não gera erro, mas é do tipo: INFINITY
console.log(7 / 0);

//Aqui observar se o valor dentro da string pode ser convertipo para number, caso seja é realizado a divisão:
console.log("10.2" / 2);

// Resultado está relacioando a não conseguir imprimir, então será: Nan
console.log("Show" * 2);

// Ocorre uma imprecisão em alguns calculos envolvendo ponto flutuante:
console.log(0.1 + 0.7);

// Não consegue transformar diretamente um número para uma string pelo toString()
// console.log(10.toString())

// Para fixar somente x números apos a vírgula:
console.log((10.345).toFixed(2));

// Concatenação ao inves de soma:
console.log("3" + 2); // Aqui a string ganha, pq o mais faz sentido no mundo da string que serva para concatenar
console.log("3" - 2); // Aqui é realizado a subtração, como o menos não faz sentido, é transformado o '3' em numeric

