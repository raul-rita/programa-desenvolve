function Cliente(nome, cpf, email, saldo)
{
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    
    //MÉTODOS
    this.depositar = function(valor) {
        this.saldo += valor
    }
}

const andre = new Cliente("André", "123.456.789-10", "andre@email.com", 100)

console.log(andre)