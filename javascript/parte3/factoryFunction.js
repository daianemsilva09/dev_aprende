//Javascript aula 34 Factory Functions (função de Fabrica)
function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log("Fazendo ligação")
        }
    }
}

const celular1 = criarCelular('zenfone',5.5,5000);
console.log(celular1);