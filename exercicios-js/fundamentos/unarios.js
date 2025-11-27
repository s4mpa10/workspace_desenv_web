let num1 = 1;
let num2 = 2;

// PÓS-FIXADA
num1++;
console.log('01)',num1);

// PREFIXADA: Mas agoniada, realizada a operação antes de outra
// Possiu mais prioridade do que a pós-fixada
--num1;
console.log('02)', num1);


// Resultado: True 
// O resultado foi verdadeiro, por conta que ele adiciona 1 ao num1, depois compara com num2 e por fim subtrai de num2
console.log(++num1 === num2--);

// Os valores em si, são diferentes 
console.log(num1 === num2);