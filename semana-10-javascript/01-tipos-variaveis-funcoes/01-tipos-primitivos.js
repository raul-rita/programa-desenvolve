// Tipo Number

const primeiroNumero = 3;
const segundoNumero = 7 ;

const soma = primeiroNumero + segundoNumero;
const multiplicacao = primeiroNumero * segundoNumero;

console.log(soma)
console.log(multiplicacao)

// quando fazermos uma operação e o seu retorno der NaN (Not a Number) significa que alguma das variáveis usadas na 
// operação não é do tipo Number

// Tipo Strings

const texto1 = "Olá, Mundo!"
const texto2 = 'Olá, Mundo 2'
const stringDeNumeros = '13231'
const citacao = '"O meu texto é assim" disse Léo.'
const textoTemplateString = `Aqui é o texto que posso usar uma variável dentro como: ${texto1}`
const concatenacao = 'Como concatenar variaveis e strings: ' + texto1 + " e " + stringDeNumeros + "."

console.log(texto1)
console.log(texto2)
console.log(stringDeNumeros)
console.log(citacao)
console.log(textoTemplateString)
console.log(concatenacao)

// Tipo Boolean - retorna true ou false

const n1 = 5
const n2 = 8

const textoA = 'Alura'
const textoB = 'Outra escola'

console.log(n1 === n2)
console.log(textoA === textoB)