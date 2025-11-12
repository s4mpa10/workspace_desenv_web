// A utilização do let estabelece o escopo de bloco, então a variável criada no "for" será somente acessada dentro dele, ocorrendo um erro ao tentar acessar fora do laço de repetição

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log(`i = ${i}`); // Isso vai dá erro por conta do "i" não está definido