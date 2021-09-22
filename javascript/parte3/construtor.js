function Celular(marcaCelular,tamanhoTela,capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhotela = tamanhoTela,
    this.capacidadeBateria =capacidadeBateria,
    this.ligar = function(){
        console.log("fazendo ligação...");
    }
}

const celular = new Celular('asus',5,5000);
console.log(celular);