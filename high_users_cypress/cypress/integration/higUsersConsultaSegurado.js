/// <reference types="cypress" />
describe('PROJETO HIGH USERS - CONSULTA SEGURADO', () => {
    before(() => {
      // cy.clearCookies()
    })
  
    beforeEach(() => {
    }) 

    it('Menu Administrativo - SEGURADO', () => {
        cy.visit('http://wsphttp.dsv.bradseg.com.br/JPSA-HighUse/administracao/inicioSegurado.do')
    })
    

    it('PESQUISAR - INSERIR CPF DO SEGURADO', () => {
        cy.get('#cpf_segurado').type('13046744790')

        // CLICA NO BOTÃO PESQUISAR
        cy.get('.padding-top-50px > .bradseg-btn').click();
    })
    

    it('VALIDA CAMPO CPF - RESULTADO PESQUISA', () => {
        cy.get('[data-text-format="cpf"]').should('contain','130.467.447-90')
    
    })
      

     it('CLICA NO ICONE LUPA', () => {
        cy.get('[onclick="detalhar(782)"] > .icon').click()

        // verifica se o CPF retornou na consulta corretamente
        cy.get(':nth-child(1) > .col-md-3 > p').should('have.text','130.467.447-90')
        cy.wait(2000)

        // CAPTURA TELA
        cy.screenshot('SEGURADO - MENSAGEM DE SUCESSO')         
     })

  })


