// SINTAXE DE UM OBJETO

const cliente = {
    nome: "Raul",
    idade: 29,
    cpf: "43299247816",
    email: "raul@email.com"
}

console.log(`Conta do cliente: ${cliente.nome}.`) // Para acessar os dados basta colocar o nome do objeto seguido por "." e o dado que queremos acessar.

console.log(`Confirme se os 3 primeiros número do CPF são: ${cliente.cpf.substring(0, 3)}`)