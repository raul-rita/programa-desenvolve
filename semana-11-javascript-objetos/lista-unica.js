const clientes = [
    {
        nome: "Raul",
        cpf: "43299247816",
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
        ]
    },
    {
        nome: "André",
        cpf: "112.345.678-15",
        dependentes: [
            {
                nome: "Monica",
                parentesco: "filha",
                dataNasc: "28/07/2015"
            },
            {
                nome: "Julia",
                parentesco: "filha",
                dataNasc: "30/02/2003"
            }
        ]
    }
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.table(listaDependentes)