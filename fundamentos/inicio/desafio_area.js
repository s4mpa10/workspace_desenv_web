// Fórmula da área da circurferência: pi * raio^2
// Qunado temos valores constantes é aconselhado colocar eles em letra maiúscula 

//No Js tem o Math.PI possui uma maior precisão 

const PI = 3.14; 
const raio = 10;
let areaCircuferencia = PI * (raio * raio);

console.log("O resultado da área eh: " + areaCircuferencia + "m²");

areaCircuferencia = Math.PI * (raio * raio);
console.log("O resultado da área eh: " + areaCircuferencia + "m²");
