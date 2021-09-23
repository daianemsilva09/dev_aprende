const marcas = [
    {id:1 , nome: 'a'},
    {id:2 , nome: 'b'},
];

const marca = marcas.find(function(marca){
    return marca.nome === 'b';
}) 


console.log(marca);