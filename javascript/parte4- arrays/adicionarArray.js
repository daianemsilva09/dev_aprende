// Aula 53 Adicionando Elementos 
const numeros = [1,2,3];
console.log(numeros);
 
//inicio
numeros.unshift(0);
console.log(numeros);
//meio
numeros.splice(1,0,'a');
console.log(numeros);
//Final
numeros.push(5);
console.log(numeros);