'use strict'

//dados de uso: franschesco64@gmail.com ;; Francisco Wala
//O navegador(no caso hoje 28/04/26, CHROME) fez a requisição HTTP

async function getDadosCep(cep) {
    const url = `https://brasilapi.com.br/api/cep/v1/${cep}`//`https://viacep.com.br/ws/${cep}/json/`
    const response = await fetch(url)
    const data = await response.json()
    //Precisei de um console.log para realizar o debug e encontrar o objeto json diferente da API VIACEP correto
    // console.log(data)
    return data
}

async function preencherFormulario () {
    const cep = document.getElementById('cep').value
    const dadosCep = await getDadosCep(cep)
    //Brasil Api responde um json com objetos em inglês, por isso os dados do cep estão com atributos assim:
    document.getElementById('endereco').value   =   dadosCep.street
    document.getElementById('cidade').value     =   dadosCep.city
    document.getElementById('estado').value     =   dadosCep.state
    document.getElementById('bairro').value     =   dadosCep.neighborhood
}

document.getElementById('cep').addEventListener('focusout', preencherFormulario)