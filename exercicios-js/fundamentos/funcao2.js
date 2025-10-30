// Armazenando uma função em uma variável, para isso não precisa declarar o nome

const imprimirSoma = function (a, b){
    console.log(`A soma dos dois valores eh(Sem retorno): ${a + b}`);
}
// Funciona mas é praticamente particular do JS
imprimirSoma(2,3);

// Armazenando uma função arrow em uma variável
// Arrow nada mais é do que a redução da sintaxe de uma função
//Sintaxe função Arrow: const nomeVariavel = (parâmetros) => {processamento da função}
const soma = (a,b) => { return (a + b) };

console.log(soma(2,3));


// Retorno Implícito: Retornar algo sem colocar o "return"
//Utilizada quando tenho uma função que possui somente uma sentença de código, assim o resultado será retornado
const subracao = (a, b) => a - b;
console.log(subracao(2,3));
