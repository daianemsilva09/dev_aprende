/*
exibirTipo(9);

function exibirTipo(limite){
    if (limite % 2 == 0)
    console.log ('par');
    else
    console.log('impar')
}
*/
exibirTipo(9);

function exibirTipo(limite){
  for (let i = 0; i<= limite; i++)
    if (i % 2 === 0)
        console.log ('par');
    else
        console.log('impar')
}

