// Falsy
// undefined
// null
// 0
// false
// ''
// NaN - not a number

// Truthy
// false || 'marcio'
// false || 1
// false || 1 || 3

let corPersonalizada = 'Vermelho';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);