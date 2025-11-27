// Utilização da estrutura de controle: do ... while

function getInteriorAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

// Caso coloque esse valor da variavel opcao em -1, não entrará no bloco de repetição 
/* Outra informação é que não é necessário atribuir valor inicial a variável, dessa forma, a variável por ser inicializar dessa forma: "let opcao;" já que no "do...while", será executado pelo menos uma vez os comando antes de verificar a condição*/
let opcao = -1;


do {
    opcao = getInteriorAleatorioEntre(-1, 10);
    console.log(`Opção escolhida foi: ${opcao}`);
} while (opcao != -1)

console.log("Até a próxima!");