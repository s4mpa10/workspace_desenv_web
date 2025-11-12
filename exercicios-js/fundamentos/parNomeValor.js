// par Nome/Valor

const saudacao = 'Opa'; // contexto léxico 1

function exec(){
    const saudacao = 'Falaaa' //contexto léxico 2
    return saudacao;
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Alan',
    idade: 54,
    peso: 70,
    endereco: {
        logradouro: 'Quadra 1',
        numero: 2
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);
console.log(`Nome do cliente: ${cliente.nome}`);