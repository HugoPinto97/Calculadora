let sumar = require('./sumar');
let restar = require('./restar');
let multiplicar = require('./multiplicar');
let dividir = require('./dividir');
let process = require('process')

let operacion = process.argv[2]
let numero1 = process.argv[3]
let numero2 = process.argv[4]

console.log(operacion)
console.log(numero1)
console.log(numero2)

console.log(sumar(3, 5))
console.log(restar(3, 2))
console.log(multiplicar(2, 0))
console.log(dividir(3, 0))