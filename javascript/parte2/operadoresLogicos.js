// Operadores Lógicos e (&&)
// Retorna TRUE se os dois operandos forem true

// console.log(true && true)
// console.log(true && false)

// let maiorDeIdade = false;
// let possuiCarteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho

// console.log(podeAplicar);


// Operador Lógico ou (||)
// Retorna true se um dos operandos forem true

let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = false;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho

console.log('pode aplicar: ', podeAplicar)

// Operador NOT (!)
let candidatoRecusado = !podeAplicar;

console.log('Candidato recusado', candidatoRecusado);