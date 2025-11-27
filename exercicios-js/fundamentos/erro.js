// Tratamento de erros:
function tratarErroELancar(erro){
    // throw - responsável por imprimir a mensagem de erro que está programada
    // throw new Error('...');
    // throw 10;
    // throw false;
    throw 'Mensagem';
    // throw { 
    //     nome: erro.name,
    //     msg: erro.message,
    //     date: new Date
    // };
}

function imprimirNomeGritado(obj) {
    try{ //Tratativa de erro
        console.log(obj.name.toUpperCase() + '!!!');
    } catch(e) { // O que realizar com o erro, pode ser programada uma função para isso
        tratarErroELancar()
    } finally{ // Independentemente se ocorreu erro ou não, vai imprimir o que está aqui no "finally"
        console.log('final');
    }
}

const obj = {name: 'Roberto'};
imprimirNomeGritado(obj);