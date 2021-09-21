//criar método ler propriedades de um objeto
// exibir somente as propriedades do tipo string que estão no objeto

const filme = {
    titulo: 'Vingadores',
    ano: 2019,
    diretor: 'Robin',
    personagem: 'Thor'
}

exibirPropriedade(filme);
function exibirPropriedade (obj){
    for (prop in obj)
        if (typeof obj[prop] === 'string')
            console.log(prop,obj[prop])

}