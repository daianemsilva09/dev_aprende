const celular ={
    marcaCelular : 'Asus',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75
    },
    ligar: function () {
        console.log("fazendo Ligação...");
    }
}

const novoObjeto = Object.assing({
    bateria: 5000
}, celular);
console.log(novoObjeto);

const objeto2 = {...celular};
console.log(objeto2);