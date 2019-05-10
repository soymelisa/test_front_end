// Jaden Smith, el hijo de Will Smith es la estrella de algunas películas como
// The Karate Kid y After Earth, tambien es conocido por su filosofía que
// comparte a través de Twitter, cuando escribe en Twitter también es conocido
// por capitalizar cada palabra.

// Crea una función llamada toJadenSmithPhilosophy que convierta strings como
// si hubieran sido escritos por Jaden Smith.

// Ejemplo:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


// Tests
var str = 'How can mirrors be real if our eyes aren\'t real'
// const toJadenSmithString = 'How can mirrors be real if our eyes aren\'t real'
const wordIsCapitalized = word => /^[A-Z]/.test(word);

var toJadenSmithPhilosophy = function (str) {
	str = str.toLowerCase().split(' ');
	for (var i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	return str.join(' ');
};
const toJadenSmithString = toJadenSmithPhilosophy(str);

console.log('TESTS', new Date().toISOString())
console.log('toJadenSmithPhilosophy'.repeat(20))
console.log(
    typeof toJadenSmithPhilosophy !== 'undefined',
    'La función toJadenSmithPhilosophy existe.');
console.log(
    typeof toJadenSmithPhilosophy(toJadenSmithString) === 'string',
    'El return de la function toJadenSmithPhilosophy es string.');
console.log(
    toJadenSmithPhilosophy(toJadenSmithString)
    .split(' ')
    .every(wordIsCapitalized),
    'Todas las palabras en la frase inician con mayúscula.');
console.log(
    toJadenSmithPhilosophy(toJadenSmithString) === 'How Can Mirrors Be Real If Our Eyes Aren\'t Real',
    'La frase fue convertida a filosofía de Jaden Smith.')
console.log('---'.repeat(20));