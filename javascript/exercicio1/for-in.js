const pessoa = {
    nome: 'Dai',
    idade : 25
};

for (let chave in pessoa){
    console.log(chave)
    console.log(pessoa)
}

//for in
const cores = ['vermelho', 'azul', 'verde']

for (let indice in cores){
    console.log(indice,cores[indice])
}

for (let indice of cores){
    console.log(cores)
}