// Estudo sobre SWITCH
const imporimirResultado = function (nota) {
    switch (Math.floor(nota)){
        // Quando definido dessa forma, significa que está relacionado a case 10 ou case 9, porque ambas possuem o mesmo valor 
        case 10:
        case 9:
            console.log(`Quadro de Honra = ${nota}`);
            break
        case 8: case 7:
            console.log(`Aprovado: ${nota}`);
            break
        case 6: case 5: case 4:
            console.log(`Recuperação: ${nota}`);
            break
        case 3: case 2: case 1: case 0:
            console.log(`Reprovado: ${nota}`);
            break
        // case 3-0: //*(Isso aqui não funciona)*
        //     console.log(`Reprovado: ${nota}`);
        //     break
        default:
            console.log(`Nota inválida: ${nota}`);
    }
    // console.log("Fim!") //Será executado todas as vezes
}

imporimirResultado(10);
// imporimirResultado(8.9);
// imporimirResultado(6.55);
// imporimirResultado(2.3);
// imporimirResultado(-1);
// imporimirResultado(11);