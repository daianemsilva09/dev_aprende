// Criar funcao para mostrar os numeros primos

exibirNumerosPrimos(10);

function exibirNumerosPrimos(limite){
    for(let numero = 2; numero <=limite; numero ++){
        if (exibirnumerosPrimos(numero)) console.log(numero);
/*
        for (let divisor = 2; divisor < numero; divisor ++){
            if(numero % divisor === 0){
                ehPrimo = false;
                break
            }
        }
*/      
    }
}

function numeroPrimo(numero){
    for (let divisor = 2; divisor < numero; divisor ++){
        if(numero % divisor === 0){
            return false;
        }
    }
    return true;
}