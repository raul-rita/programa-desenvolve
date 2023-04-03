// let x = "";
// console.log(x);
// x = "oi";

// DECLARAÇÃO DE FUNÇÃO

// 1) declara a função
//2 -> valor de soma()
function imprimeTexto(texto) {
    console.log(texto)
}

// 2) executa a função (1 ou + vezes)

imprimeTexto(soma());
// imprimeTexto("outro texto");

// três formas de escrever funções

function soma() {
    //outros códigos
    //vários console.log()
    return 2 + 2;
}

// console.log(soma())

// -------------------------------------------------------------------------

// parâmetros de função

//2       //2
function soma(numero1, numero2) {
  return numero1 + numero2;
}

console.log(soma(2, 2))
console.log(soma(245, 20))
console.log(soma(-500, 60))

// parâmetros x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

// console.log(nomeIdade(40, "Juliana"))

function soma(numero1, numero2) {
    return numero1 + numero2;
}

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}

//9
console.log(multiplica(soma(4, 5)))

// -------------------------------------------------------------------------

// declaração de função

function minhaFuncao(param) {
    // bloco de código
  }
  
  minhaFuncao("param")
  
  // expressão de função
  
  const soma = function(num1, num2) { return num1 + num2 }
  console.log(soma(1, 1))
  
  // diferença principal: HOISTING
  // funções e var são "listadas" no topo do arquivo.
  
  console.log(apresentar())
  
  function apresentar() {
    return "olá";
  }
  
  console.log(somaOutroExemplo(1, 1))
  const somaOutroExemplo = function(num1, num2) { return num1 + num2 }

  //-----------------------------------------------------------------------------------------

  // Arrow function
  const apresentarArrow = nome => `meu nome é ${nome}`;
  const soma = (num1, num2) => num1 + num2;
  
  //Arrow function com + de 1 linha de instrução
  
  const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10) {
      return "somente números de 1 a 9"
    } else {
      return num1 + num2;
    }
  }
  
  // Hoisting: arrow function se comporta como expressão
  
  // operador maior ou igual que
  // >=