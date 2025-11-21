// Estudo sobre a condição IF(SE)
function soBoaNoticia(nota){
    if(nota >= 7 && nota <= 10){ //Colocando boas praticas e delimitando que não seja aceitado a nota maior que 10
        console.log(`Aprovado com nota: ${nota}`);
    }
    // Validando com o uso do else:
    // else{
    //     console.log("Informe uma nota valida.")
    // }
}

soBoaNoticia(8.1);
soBoaNoticia(6.1);

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log(`É verdade: ${valor}`);
    }
    // else{
    //     return console.log(false);
    // }
}

seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo('');
seForVerdadeEuFalo(0);
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(' ');
seForVerdadeEuFalo('?');
seForVerdadeEuFalo([]);
seForVerdadeEuFalo([1, -2]);
seForVerdadeEuFalo({});