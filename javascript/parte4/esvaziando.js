let numeros = [1,2,3,4,5,6];
let outros = numeros;
//solucão 1 somente do principal
numeros =[];
console.log(outros);

//solucão 2 remove tudo
numeros.length = 0;
console.log(numeros);
console.log(outros);

//solucão 3 ir percorrendo a array
numeros.splice = (0,numeros.length);
console.log(numeros);
console.log(outros);

//solucão 4 while mais processamento
while (numeros.length > 0);
    numeros.pop();
