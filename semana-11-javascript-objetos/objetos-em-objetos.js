// const cliente = {
//     nome: "Raul",
//     idade: 29,
//     cpf: "43299247816",
//     email: "raul@email.com",
//     fones: ["111111111", "22222222222"]
// }

// cliente.dependentes = {
//     nome: "Sarah",
//     parentesco: "filha",
//     dataNasc: "20/03/2011"
// }

// console.log(cliente)

const cliente = {
    nome: "Raul",
    idade: 29,
    cpf: "43299247816",
    email: "raul@email.com",
    fones: ["111111111", "22222222222"],
    dependentes: [{
        nome: "Sarah",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    }]
}

cliente.dependentes.push({
    nome: "Paula",
    parentesco: "filha",
    dataNasc: "17/04/2014"
})



console.log(cliente)