const resultado = fizzBuzz(20)
console.log(resultado)

function fizzBuzz(entrada){
    if (typeof entrada !== 'number')
    return 'não é numero'
    if (entrada % 3===0 && entrada % 5 ===0 )
    return 'fizzBuzz'
    if (entrada % 3 === 0)
    return 'fizz'
    if (entrada % 5 === 0)
    return 'Buzz'
    
}