/// <reference types="cypress" />
describe('PROJETO HIGH USERS - EDITAR SEGURADO', () => {
    before(() => {
      // cy.clearCookies()
    })
  
    beforeEach(() => {
    }) 

    it('MENU ADMINISTRATIVO - SEGURADO', () => {
        cy.visit('http://wsphttp.dsv.bradseg.com.br/JPSA-HighUse/administracao/inicioSegurado.do')
        cy.wait(2000)

        // CAPTURA TELA
        //cy.screenshot('MENU ATENDIMENTO - Segurado')
    })
    

    it('PESQUISAR - INSERIR CPF DO SEGURADO', () => {
        cy.get('#cpf_segurado').type('13046744790')
        cy.wait(2000)

        // CAPTURA TELA
        //cy.screenshot('SEGURADO - INFORMA O CPF SEGURADO')


        // CLICA NO BOTÃO PESQUISAR
        cy.get('.padding-top-50px > .bradseg-btn').click();
    })


    it('VALIDA CAMPO CPF - RESULTADO PESQUISA', () => {
        cy.get('[data-text-format="cpf"]').should('contain','130.467.447-90')
        cy.wait(2000)

        // CAPTURA TELA
        //cy.screenshot('SEGURADO - CPF LOCALIZADO')
    
    })


    it('EDIÇÃO - CLICA NO BOTÃO PARA EDITAR O SEGURADO', () => {
        cy.get('[onclick="editar(782)"] > .icon').click()
    })
    

    it('EDIÇÃO - CAMPO OBERSERVAÇÃO', () => {
        
        cy.wait(2000)

        // CAPTURA TELA
        //cy.screenshot('SEGURADO - CAMPO OBSERVAÇÃO ANTES DA EDIÇÃO')

        // OBSERVAÇÃO - APAGA A INFORMAÇÃO
        cy.get('#obs').clear()
       
        
        // Obtemos o numero aleátorio entre 0 até 255
        var numero = new Uint8Array(1);
        window.crypto.getRandomValues(numero);

        const observacao = 'TESTANDO EDIÇÃO CAMPO OBSERVAÇÃO ' + numero

        // OBSERVAÇÃO - INCLUIR UMA NOVA INFORMAÇÃO
        cy.get('#obs').type(observacao)
        cy.wait(2000)

        // CAPTURA TELA
        //cy.screenshot('SEGURADO - CAMPO OBSERVAÇÃO APÓS EDIÇÃO')

    })


    it('EDIÇÃO - ENDEREÇO - CAMPO COMPLEMENTO', () => {
        
        cy.wait(2000)

        // CAPTURA TELA
        //cy.screenshot('SEGURADO - ENDEREÇO COMPLEMENTO ANTES DA EDIÇÃO')

        // OBSERVAÇÃO - APAGA A INFORMAÇÃO
        cy.get('#complemento').clear()

        // Obtemos o numero aleátorio entre 0 até 255
        var complemento = new Uint8Array(1);
        window.crypto.getRandomValues(complemento);

        // OBSERVAÇÃO - INCLUIR UMA NOVA INFORMAÇÃO
        cy.get('#complemento').type('CASA DE ESQUINA ' + complemento)
        cy.wait(2000)

        // CAPTURA TELA
        //cy.screenshot('SEGURADO - ENDEREÇO COMPLEMENTO APÓS A EDIÇÃO')

    })
    
    it('EDIÇÃO - BOTÃO SALVAR', () => {
        cy.get('.pull-right > .blue').click()
    })
    

    it('VALIDAÇÃO MENSAGEM SUCESSO', () => {
        cy.get('#action-messages > p').should('contain','O segurado KAIO OLIVEIRA foi atualizado com sucesso.')
        cy.get('.pull-right > .blue').click()
        cy.wait(2000)

        // CAPTURA TELA
        //cy.screenshot('SEGURADO - MENSAGEM DE SUCESSO')
    })

  })


