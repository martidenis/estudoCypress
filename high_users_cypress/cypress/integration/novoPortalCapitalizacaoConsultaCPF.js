/// <reference types="cypress" />
describe('PORTAL DE VENDAS (CAPITALIZAÇÃO) - CONSULTA POR CPF', () => {
    before(() => {
      cy.clearCookies()
    })
  
    beforeEach(() => {
  
    })


    it('Consulta Por CPF', () => {

      // Login AUTO
      cy.loginAcessoCapi('#login','#senha') 


      cy.homeCapitalizacao().then(() => {
          cy.visit('http://wsphttp.dsv.bradseg.com.br/CVCR-VendaCapitalizacao/seguro/capitalizacao/historico/inicioHistorico.do')
    })

    // Inserindo o CPF
    cy.get('#cpfIdentificacao').type('81444087568')

    cy.get('#cpfIdentificacao').should('have.value','81444087568')

    //Clicar em CONSULTAR
    cy.get('#consultar').click()
    

    //Clicar em DETALHAR registro
    cy.get(':nth-child(1) > .actions > .pull-left > .menu-invisible > a > .icon-nav-busca').click()
    cy.wait(4000)


    //Clicar no botão EXIBIR o HISTORICO DA PROPOSTA
    cy.get('#dadosProposta > .btn').click()
    cy.wait(3000)
    

    //Verificar se tem a coluna PROPOSTA/OFERTA	
    cy.get('#tabelaHistoricoProposta > thead > tr > :nth-child(1)').should('have.text', 'PROPOSTA/OFERTA')


    // Clica no botão "Proximo"
    cy.get('.btnProximo').click()
            
    })


    //   // CAPTURA TELA
    //   /cy.screenshot('SEGURADO - MENSAGEM DE SUCESSO')
    // })


  })



