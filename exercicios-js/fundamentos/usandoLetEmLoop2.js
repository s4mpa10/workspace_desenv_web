// Agora utilizando a variável "let" é destacado que primeiro foi executado todo o loop de repetição, para depois acessar as informações: funcs[2](); e funcs[8]();
// Sendo o correto a ser realizado 

const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push( function() {
        console.log(i);
    })
}

funcs[2]();
funcs[6]();
funcs[8]();