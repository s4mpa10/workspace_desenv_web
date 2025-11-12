// O que foi apresentado na aula está relacioando a utilização da declaração "var", e destacando um do problemas ao utilizar essa declaração e o não respeito da variável  

const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push( function() {
        console.log(i);
    })
}

funcs[2]();
funcs[8]();