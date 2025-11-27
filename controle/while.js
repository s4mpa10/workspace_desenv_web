// Utilização da estrutura de controle: while

function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;

/* Na estrutura de repetição while não existe uma quantidade determinada de repetições, dessa forma, vai sendo executada até ocorre um satisfazer a condição e sair do laço.
 * Os resultados da condição de repetição são: True ou False */
while (opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(`Opção escolhida foi: ${opcao}`);
}

console.log("Até a próxima!");

