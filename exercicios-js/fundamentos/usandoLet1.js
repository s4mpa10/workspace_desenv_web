// O "let" ao contrario do "var" quando tem qualquer bloco, sendo função ou não, possui seu acesso restrito ao bloco, dessa forma, se coloca qualuqer definição em bloco o let só é acessado nela, sendo visível apenas dentro do bloco

/* Variável var, possui:
 * Escopo Global 
 * Escopo de Função
*/

/* Variável let 
 * Escopo Global
 * Escopo de Função
 * Escopo de Bloco
*/


var numero = 1;
{
    let numero = 2; // aqui é let é utilizado por ser escopo de bloco
    console.log(`dentro = ${numero}`);
}

console.log(`fora = ${numero}`);