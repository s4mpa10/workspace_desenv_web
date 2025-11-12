// Como a variável var não se restr inge ao bloco, ela será acessada fora do laço, sendo necessário somente a declaração:
for (var i = 0; i < 10; i++) {
    console.log(i);
}

console.log(`i = ${i}`);