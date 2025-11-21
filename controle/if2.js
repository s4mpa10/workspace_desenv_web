// Estudo sobre a condição IF(SE)
function teste1(num){
    if(num > 7) 
        console.log(num);
    
    console.log("Final");
    
    // else{
    //     console.log("Não deu certo");
        
    // }
}

// teste1(6);
// teste1(8);


function teste2(num){
    if(num>7); { // cuidado com o ";", não usar como as estruturas de controle, pq nesse caso ocorre duas sentenças de código
        console.log(num)
    }
}

//Com resultado será exibido os dois, tanto o 6 como o 8
teste2(6);
teste2(8);

