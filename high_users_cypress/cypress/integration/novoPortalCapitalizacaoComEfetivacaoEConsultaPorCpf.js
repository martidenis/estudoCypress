/// <reference types="cypress" />
describe('Should test at a functional level', () => {
  before(() => {
    // cy.clearCookies()
  })

  beforeEach(() => {

  })


  it('Efetivação Com Efetivação Consulta por CPF', () => {

    // Login AUTO
    cy.loginAcessoCapi('#login','#senha')


    cy.homeCapitalizacao().then(() => {
        cy.visit('http://wsphttp.dsv.bradseg.com.br/CVCR-VendaCapitalizacao/seguro/capitalizacao/atendimento/novoAtendimento.do')
  })


    // Inserindo o CPF
    cy.get('#cpfIdentificacao').type('81444087568')

    cy.get('#cpfIdentificacao').should('have.value', '81444087568')


    // Clica no botão BUSCAR do CPF
    cy.get('#buscarIdentificacao > a > .icon-nav-busca').click()


    //Selecionar o SEXO      
    if (cy.get('#cmbSexo').should('not.have.value', 'value')) {
      cy.get('#cmbSexo').select('Feminino').should('have.value', '4')
    }

    //Selecionar o TIPO DE DOCUMENTO CNH
    cy.get('#cmbTipoDocumento').select('2').should('have.value', '2')

    //Selecionar os DADOS BANCARIOS  
    cy.get('#contas > :nth-child(1) > :nth-child(1) > .radio > label > input').click().should('be.checked')

    // CLICA NO BOTÃO PROXIMO
    cy.get('.design-process-content > .pull-right > .btnProximo').click()

    // Selecionar o PRODUTO - PÉ QUENTE BRADESCO 100
    cy.get('#cmbProdutos').select('4').should('have.value', '4')

    //Selecionar o DIA DO DEBITO
    cy.get('#datepicker').type('07/03/2020').click()


    //Clicar no botao PROXIMO
    cy.get('#novoAtendimento > .pull-right > .btnProximo').click()

    // CLICA NO BOTÃO EFETIVAR
    cy.get('#efetivacao > .design-process-content > form > .pull-right > .btn-primary-green').click()
    cy.wait(4000)


    // Cria a variavel para guardar o número da proposta
    cy.get('#mensagens-modal > :nth-child(3) > :nth-child(1)').then(($text) => {
      const numero = $text.text().substr(10, 16)
      console.log(numero)


      // Acessar a funcionalidade de consulta por CPF
      cy.visit('http://wsphttp.dsv.bradseg.com.br/CVCR-VendaCapitalizacao/seguro/capitalizacao/historico/inicioHistorico.do')


      // Inserir o CPF do Proponente
      cy.get('#cpfIdentificacao').type('81444087568')


      // Clica no Botão Consultar
      cy.get('#consultar').click()

      // Captura o numero da proposta antes da "/"
      cy.get('tbody > :nth-child(1) > :nth-child(2)').then(($text) => {
        const consultaProposta = $text.text().substr(0, 8)
        console.log('valor da consultar ' + consultaProposta)


        // Valida o numero da proposta gerada com o resultado da consulta
        if (numero == consultaProposta) {
          cy.get(':nth-child(1) > .actions > .pull-left > .menu-invisible > a > .icon-nav-busca').click()

        }

        //Clicar no botão EXIBIR o HISTORICO DA PROPOSTA
        cy.get('#dadosProposta > .btn').click()

        //Verificar se tem a coluna PROPOSTA/OFERTA	
        cy.get('#tabelaHistoricoProposta > thead > tr > :nth-child(1)').should('have.text', 'PROPOSTA/OFERTA')
        
      })

      //cy.get('#dadosProposta > .pull-left').should('contain', 'HISTÓRICO DE PROPOSTA1')

      // CAPTURA TELA
      /// cy.screenshot('SEGURADO - MENSAGEM DE SUCESSO')



    })

  })

})


