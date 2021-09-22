//47 - faixa de preço
//criar array de objetos de precos para que possa ser usado em um site igual mercado livre

//primeira opçao
let faixas = [
    {tooltip: 'até 700',minimo: 0, maximo:700},
    {tooltip: 'de 700 a 1000',minimo: 700, maximo:1000},
    {tooltip: '1000 ou mais',minimo: 1000, maximo:9999999}
];
//segunda opcao (Factory function)
function criarFaixaPreco(tooltip,minimo,maximo){
    return{
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criarFaixaPreco('a',1,100),
    criarFaixaPreco('b',100,1000),
    criarFaixaPreco('a',1000,100000),
]
// Terceira Opção (Constructor Function)

function FaixasPreco(tooltip,minimo,maximo){
    this.tooltip = tooltip,
    this.minimo =minimo,
    this.maximo = maximo
}

let faixas3 = [
    new FaixasPreco('d',10,20),
    new FaixasPreco('e',20,30),
    new FaixasPreco('f',30,40)
];

console.log(faixas3);
console.log(faixas);
console.log(faixas2);

