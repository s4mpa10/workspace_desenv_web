// Função sem retorno
// Palavra reservada: function
function imprimirSoma(n1, n2){
    console.log(`A soma dos dois valores eh(Sem retorno): ${n1 + n2}`);
}

imprimirSoma(3,2);

// O JS aceita a passagem somente de um valor sendo que é necessário dois valores, dessa forma, o resultado será: NaN
imprimirSoma(2);

// O JS também aceita a passagem de mais valores, mas ele só vai pegar os dois primeiros e desconsiderar os outros valores:
imprimirSoma(2,3,4,5,6,7,8 );

// Também aceita isso, só que o resultado será: NaN
imprimirSoma();

// Função com retorno:
// Foi realizado uma definição por padrão igual a 0, então se o b não por passado ele será atribuido como 0
function soma(a, b=0){
    return (a + b);
}

console.log(`A soma eh (Com retorno): ${soma(2, 3)}`);
console.log(`A soma eh (Com retorno): ${soma(2)}`);