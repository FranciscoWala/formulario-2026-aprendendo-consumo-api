'use strict'

//dados de uso: franschesco64@gmail.com ;; Francisco Wala
//O navegador(no caso hoje 28/04/26, CHROME) fez a requisição HTTP

async function getDadosCep(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function preencherFormulario () {
    const cep = document.getElementById('cep').value
    const dadosCep = await getDadosCep(cep)

    document.getElementById('endereco').value   =   dadosCep.logradouro
    document.getElementById('cidade').value     =   dadosCep.localidade
    document.getElementById('estado').value     =   dadosCep.uf
    document.getElementById('bairro').value     =   dadosCep.bairro
}

document.getElementById('cep').addEventListener('focusout', preencherFormulario)