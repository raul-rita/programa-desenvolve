
// == (comparação implícita)
// == só compara o valor

const numero = 5;
const texto = "5";

console.log(numero == texto) // true

// comparação explícita como boas práticas ===
// === compara o valor e o tipo de dado

console.log(numero === texto) // false

// ||: Operador “ou”, retorna true caso uma condição seja válida;

// &&: Operador “e”, retorna true somente se todas as condições forem válidas;

// != e !==: Operadores “não igual” e “estritamente não igual”, utilizados para comparação, 
// da mesma forma que == e === retornam true ou false.

// ------------------------------------------------------------

// TERNÁRIO - indicado por ter 3 operadores em uma mesma operação
const idadeMinima = 18;
const idadeCliente = 16;

if (idadeCliente >= idadeMinima) {
    console.log("cerveja")
} else {
    console.log("suco")
}

                //condição                //true     //false
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco")

// Como boas práticas usar o ternário somente quando as condições tiver apenas uma opção para verdadeiro e outra para falso.

// ------------------------------------------------------


