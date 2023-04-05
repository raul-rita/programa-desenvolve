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

// const propsClientes = Object.keys(cliente)

// console.log(propsClientes)

function oferecerSeguro (obj) {
    const propsClientes = Object.keys(obj);
    if (propsClientes.includes('dependentes')) {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}

oferecerSeguro(cliente)