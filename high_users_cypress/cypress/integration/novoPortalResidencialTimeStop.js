/// <reference types="cypress" />
describe('PORTAL DE VENDAS (RESIDENCIAL) - GERAÇÃO DE PROPOSTA + CONSULTA (TIME STOP)', () => {
    before(() => {
      // cy.clearCookies()
    })
  
    beforeEach(() => {

    })

    it('Gerar Proposta para o produto Residencial e realizar consulta por CPF (Time Stop)', () => {
        cy.homeResidencial().then(() => {
            cy.visit('http://wsphttp.dsv.bradseg.com.br/CVCR-BilheteResidencial/seguro/residencial/atendimento.do')
    })

            
    // Inserindo o CPF
    cy.get('#cpfIdentificacao').type('81444087568')
    //cy.wait(5000)

    cy.get('#cpfIdentificacao').should('have.value','81444087568')
    //cy.wait(5000)


    // Clica no botão BUSCAR
    cy.get('#buscarIdentificacao > a > .icon-nav-busca').click()
    //cy.wait(5000)

    

    if(cy.get('#cmbSexo').should('not.have.value','value')){
        cy.get('#cmbSexo').select('Feminino').should('have.value','4')
        //cy.wait(5000)
    }
    

    //it('ABA IDENTIFICAÇÃO - CONDIÇÃO PARA O CAMPO ESTADO CIVIL', () => {
        // if(cy.get('#cmbEstadoCivil').should('be.empty','')){
        //     cy.get('#cmbEstadoCivil').select('Separado(a)').should('have.value','8')
        // }
    //})


        cy.get('#cmbFaixaSalarial').select('3').should('have.value','3')
        //cy.wait(5000)

        cy.get('#cmbTipoDocumento').select('2').should('have.value','2')
        //cy.wait(5000)
 

        cy.get('#emailSolicitante').type('teste@gmail.com')
        //cy.wait(5000)
        

        cy.get('#cmbTipoTelefoneResidencial').select('Residencial').should('have.value','1')
        //cy.wait(5000)

    
        cy.get('#contas > :nth-child(1) > :nth-child(1) > .radio > label > input').click().should('be.checked')
        cy.wait(3000)

        cy.screenshot('Dados Preenchidos Aba Identifição');

        // CLICA NO BOTÃO PROXIMO
        cy.get('.design-process-content > .pull-right > .btnProximo').click()
        cy.wait(5000)

      // FUNÇÃO PARA PREENCHIMENTO DA DATA AUTOMATICA - DATA AGENDAMENTO
      cy.dataSistema('#dataAgendamento').click()
      //cy.wait(5000)

      cy.get('.box-white > .row > .col-sm-4 > .input-group > .input-group-addon').click()
      //cy.wait(5000)
    
      cy.get(':nth-child(3) > :nth-child(1) > .radio > label > .codigoPlano').click()


      cy.screenshot('Dados Preenchidos Aba Residencial Mensal');

      
      cy.get('.grupo-btns-aba-residencial > .btnProximo').click()
      cy.wait(5000)
        

      // CLICA NO BOTÃO EFETIVAR
      cy.get('#Efetivacao > .design-process-content > form > .pull-right > .btnGerarProposta').click()
      cy.wait(5000)

      // Valida Mensagem de Efetivação
      cy.get('#titulo-modal').should('contain','Portal de Vendas - Efetivação realizada com sucesso.')

      //cy.get('#titulo-modal').should('contain.text','Alerta')

      cy.wait(4000)

      cy.screenshot('Efetivação Proposta')


      // Cria a variavel para guardar o número da proposta
      cy.get('#mensagens-modal > :nth-child(3) > :nth-child(1)').then(($text)=>{
        const numero = $text.text().substr(10,16)
        console.log(numero)


      // clica no botão reiniciar  
      cy.get('#mensagens-modal > .pull-right > .btn-primary-green').click()


      // Acessa o Menu de Consulta
      cy.visit('http://wsphttp.dsv.bradseg.com.br/CVCR-BilheteResidencial/seguro/residencial/consulta/iniciarConsultaCpf.do')


      // Inserir o CPF do Proponente 
      cy.get('#cpfProponente').type('81444087568')
      cy.wait(4000)


      // Clica no Botão Consultar
      cy.get('#btn-consultar-proposta').click()
      cy.wait(4000)


      cy.screenshot('Propostas Efetivadas')

 
      // Captura o numero da proposta antes da "/"
      cy.get('tbody > :nth-child(1) > :nth-child(2)').then(($text)=>{
        const consultaProposta = $text.text().substr(0,7)
        console.log('valor da consultar ' + consultaProposta)
     

      // Valida o numero da proposta gerada com o resultado da consulta
      if(numero == consultaProposta){
        console.log('valor numero' + numero)
        //cy.get(':nth-child(1) > .actions > .pull-left > .menu-invisible > a > .icon-nav-busca').click()
         
      }
    })  

    })

    })

  })