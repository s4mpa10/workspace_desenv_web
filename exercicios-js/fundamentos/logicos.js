/* Operadores lógicos
 * AND -> &&
 * OU -> ||
 * XOR -> !!(x ^ y) bitwise xor - Trabalha de bit a bit 
 * ou 
 * XOR -> != -> Simulado através da diferença  (x != y)
*/

function compras(trabalho1, trabalho2){
    const comprarSorvete = (trabalho1 || trabalho2);
    const comprarTv50 = (trabalho1 && trabalho2);
    const comprarTv32 = (trabalho1 != trabalho2);
    const manterSaudavel = (!comprarSorvete);

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log('01 - Caso', compras(false, false));
console.log('02 - Caso',compras(false, true));
console.log('03 - Caso',compras(true, false));
console.log('04 - Caso',compras(true, true));