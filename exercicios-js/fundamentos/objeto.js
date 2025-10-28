// Um objeto sempre é criado por um conjunto envolvendo chave e valor:
//Ex: nome: 'Celular' 
const prod1 = {};
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.90;
//No JS pode ser colocado o nome da chave com espaço, desde que seja colocado entre aspas simples (Mas deve evitar esses atributos com espaço)
prod1['Desconto Legal'] = 0.40;


console.log(prod1); 

// Pode ser declarada dessa forma, já com as chaves e os valores no momento da declaração: 
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: { //Pode ter uma estrutura aninhada de objeto:
        infor: 1,
        obj: {
            infor: 2
        }
    }
}

console.log(prod2);

// Isso é um JSON: 
'{ "nome": "Camisa Polo", "preco": 79.90 }' //Informado na aula 

"{ 'nome': 'Camisa Polo', 'preco': 79.90 }" //Com uma atualização o JSON entende a aspas simples('') como string e como delimitador as aspas duplas("")
