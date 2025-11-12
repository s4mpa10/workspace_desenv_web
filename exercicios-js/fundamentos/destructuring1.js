// Novo recurso do ES2015

const pessoa = {
    nome: 'Alan',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// A descontrução é realizada por meio das chaves e depois destacando o objeto
const { nome, idade } = pessoa;
console.log(nome, idade);

// Extração com a mudança do nome para o que preferir estabelecer, e sendo realizado seu acesso com o novo nome
const {nome: n, idade: i} = pessoa 
console.log(n, i);

// Quando é extraido atribuitos que não existe no objeto o resultado será: "undefined" ou um valor padrão colocado como estabelecido aqui: "bemHumorada = true" 
const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada);


const {endereco: {logradouro, numero, cep}} = pessoa;
console.log(logradouro, numero, cep);