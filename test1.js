// Implementa una función llamada sumToBinary que sume dos números y regrese la 
// suma en binario, la conversion a binario puede suceder antes o después de la 
// suma. El tipo del return debe ser un string.


// Tests
let a = (254).toString(2);
let b= (1).toString(2);

function sumToBinary (a, b) {
    sum = a + b
    return sum.toString(2);
}

console.log('TESTS', new Date().toISOString())
console.log('sumToBinary'.repeat(20));
console.log(
    typeof sumToBinary !== 'undefined',
    'La función sumToBynary existe.')

console.log(
    typeof sumToBinary(1, 2) === 'string',
    'El return de sumToBinary es string.')

console.log(
    sumToBinary(254, 1) === '11111111',
    'La suma de 254 y 1 uno en binario es 11111111.')