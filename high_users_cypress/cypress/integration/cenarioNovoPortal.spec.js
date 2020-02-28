/// <reference types="cypress" />
describe('Should test at a functional level', () => {


    it('Login com sucesso', () => {

        
        const gerarCpf = require('gerar-cpf')
        const listaCpf = []

        while (listaCpf.length < 100) {
            listaCpf[listaCpf.length] = gerarCpf()
        }

        CPF.generate();


        console.log(CPF)

    })

})