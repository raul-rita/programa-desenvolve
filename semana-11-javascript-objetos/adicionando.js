const cliente = {
    nome: "Raul",
    idade: 29,
    cpf: "43299247816",
    email: "raul@email.com"
}
console.log(cliente)

cliente.fone = "16997632363" //Chamando o objeto e seguido por "." inserir a nova informação e seu valor
console.log(cliente)

cliente.fone = "16997777777" //Usando a mesma sintaxe para um atributo já existente é feito a alteração de seu valor
console.log(cliente)
