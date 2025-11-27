let a = 3;

global.b = 123;

this.c = 456; 

this.d = false;
this.e = 'teste';

console.log(this.a);
console.log(global.a);

console.log(global.b);

console.log(this.c);

console.log(module.exports.c);

console.log(module.exports === this); //true ]

module.exports = {e: 456, f: false, g: 'teste'};

// Criando uma variavel maluca: sem valor e sem let
abc = 3 // NUNCA FAÇA ISSO, POIS PODE ESTÁ ESCREVENDO EM OUTRA VARIÁVEL GLOBAL
console.log(global.abc)
