// Destructing utilizando um array


function rand([min = 0, max = 1000]){
    if(min > max) [min, max] = [max, min];
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand([50, 40]));
console.log(rand([992]));
console.log(rand([, 10])); // Aqui deixei o min como valor padrão e coloquei o valor de 10 como máximo