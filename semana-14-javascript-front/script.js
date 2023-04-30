/* CHAMADA A API COM ASYNC AWAIT */

async function buscaEndereco (cep) {

    var mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = '';

    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCepConvertida = await consultaCep.json();

        if(consultaCepConvertida.erro) {
            throw Error('CEP inexistente.')
        }

        var cidade = document.getElementById('cidade')
        var logradouro = document.getElementById('endereco')
        var estado = document.getElementById('estado')

        cidade.value = consultaCepConvertida.localidade;
        logradouro.value = consultaCepConvertida.logradouro;
        estado.value = consultaCepConvertida.uf;

        console.log(consultaCepConvertida);
        return consultaCepConvertida;        
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`;
        console.log(erro);
    }
}

var cep = document.getElementById("cep");

cep.addEventListener("focusout", () => buscaEndereco(cep.value))

//-------TRECHO NÃO VAI SER UTILIZADO (SERVE PARA CONFERIR SE AS PROMISES ESTÃO SENDO RECEBIDAS)
// let ceps = ['01001000', '14835000']
// let arrayCeps = ceps.map(valores => buscaEndereco(valores))

// console.log(arrayCeps)

// Promise.all(arrayCeps).then(respostas => console.log(respostas))

// ------------------------------------------------------------------------

/* CHAMADA A API COM THEN CATCH */
// var consultaCep = fetch('https://viacep.com.br/ws/14835000/json/')
    // .then(resposta => resposta.json())

    // .then(r => {
    //     if (r.erro) {
    //         throw Error('Esse CEP não existe!')
    //     } else {
    //         console.log(r)
    //     }
    // })
    
    // .catch(erro => console.log(erro))

    // .finally(mensagem => console.log('Processamento concluído!'))

// console.log(consultaCep)