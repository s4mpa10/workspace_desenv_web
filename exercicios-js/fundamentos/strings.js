const escola = "Cod3r";

// Serve para imprimir a letra que está nessa posição (.charAt(posição))
console.log(escola.charAt(4));

// Quando coloco um número que está a mais do que a quantidade de caracteres a resposta será VAZIO
console.log(escola.charAt(5));

// Para saber o código unicode do caractere é necessário utilizar isso: charCodeAt(posição):
console.log(escola.charCodeAt(1));

// Verificar a posição do caractere dentro do conjunto, para isso é necessário utilizar o .indexOf('colocar o caractere'):
console.log(escola.indexOf('3'));

// Função "substring()" responsável por dá o ponto de inicio da impressão
console.log(escola.substring(1));
// Com intervalo:
console.log(escola.substring(0, 3));

//Função de concatenação(.concat()): responsável por unir string com variáveis:
// Sendo adicionado valores literais: Escola e !
console.log('Escola ' .concat(escola). concat("!"));
//Pode ser realizado assim também utilizando o operador de soma: +:
console.log("Escola " + escola + "! " + "Com +");

// A  função replace(replace()): Realiza a troca de um caractere da string por ouitro, então primeiro, antes da virgula, passa o valor que quer identificar na string e depois o novo valor:
console.log(escola.replace(3, 'a'));

// Para converter uma string em um *array*, basta colocar a função split() destacando dentro dos parenteses o separador: que normalmente é ","
console.log('Alan,Ana,Clara'.split(","));






 
