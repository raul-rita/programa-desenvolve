const cliente = {
    nome: "Raul",
    idade: 29,
    cpf: "43299247816",
    email: "raul@email.com",
    fones: ["111111111", "22222222222"],
    dependentes: [
        {
            nome: "Sarah",
            parentesco: "filha",
            dataNasc: "20/03/2011"
        },
        {
            nome: "Paula",
            parentesco: "filha",
            dataNasc: "17/04/2014"
        }
    ],
    saldo:100,
    
    //METODOS 
    depositar: function(valor) {
        this.saldo += valor
    }
}

console.log(`Saldo antes de depositar: ${cliente.saldo}`)

cliente.depositar(30)

console.log(`Saldo depois de depositar: ${cliente.saldo}`)
