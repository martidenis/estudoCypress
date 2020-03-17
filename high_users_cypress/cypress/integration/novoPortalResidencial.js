/// <reference types="cypress" />
describe('PORTAL DE VENDAS (RESIDENCIAL) - GERAÇÃO DE PROPOSTA + CONSULTA', () => {
    before(() => {
      // cy.clearCookies()
    })
  
    beforeEach(() => {

    })

    
      it('Gerar Proposta para o produto Residencial e realizar consulta por CPF', () => {
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
        //cy.wait(3000)

        //cy.screenshot('Dados Preenchidos Residencial');

        // CLICA NO BOTÃO PROXIMO
        cy.get('.design-process-content > .pull-right > .btnProximo').click()
        //cy.wait(5000)

    
      // FUNÇÃO PARA PREENCHIMENTO DA DATA AUTOMATICA - DATA AGENDAMENTO
      cy.dataSistema('#dataAgendamento').click()

        
      //cy.get('#dataAgendamento').type('29/02/2020').click()
      //cy.wait(5000)

      cy.get('.box-white > .row > .col-sm-4 > .input-group > .input-group-addon').click()
      //cy.wait(5000)
    
      cy.get(':nth-child(3) > :nth-child(1) > .radio > label > .codigoPlano').click()

      cy.get('.grupo-btns-aba-residencial > .btnProximo').click()
      //cy.wait(2000)
        

      // CLICA NO BOTÃO EFETIVAR
      cy.get('#Efetivacao > .design-process-content > form > .pull-right > .btnGerarProposta').click()


      // Valida Mensagem de Efetivação
      cy.get('#titulo-modal').should('contain','Portal de Vendas - Efetivação realizada com sucesso.')


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


      // Clica no Botão Consultar
      cy.get('#btn-consultar-proposta').click()

 
      // Captura o numero da proposta antes da "/"
      cy.get('tbody > :nth-child(1) > :nth-child(2)').then(($text)=>{
        const propostaGerada = $text.text().substr(0,7)
        console.log('valor da consultar ' + propostaGerada)
     

      // Valida o numero da proposta gerada com o resultado da consulta
      if(numero == propostaGerada){
        console.log('valor numero' + numero)
        //cy.get(':nth-child(1) > .actions > .pull-left > .menu-invisible > a > .icon-nav-busca').click()
        
        cy.get('.icon-seta-dupla-direita-b').click()

      cy.get('.active > .page-link').then(($text) => {

        const pagina = $text.text().substr(0, 7)

        console.log('numero da pagina: ' + pagina)

        console.log(pagina)

        cy.get('.icon-seta-dupla-b').click()



        for (let i = 1; i <= pagina; i++) {

          var proposta

          cy.get('tbody > :nth-child(1) > :nth-child(2)').then(($text) => {
            const proposta = $text.text().substr(0, 7)
            console.log('numero da proposta: ' + proposta)

            if (proposta !== null) {

              if (proposta == propostaGerada) {

                console.log('Proposta' + proposta + 'é igual a ' + propostaGerada)

                console.log('Proposta encontrada')

                //cy.pause().end()

                expect(true).to.equal(true)

              } else {

                console.log('Proposta' + proposta + 'é diferente a ' + propostaGerada)

                cy.get('tbody > :nth-child(3) > :nth-child(2)').then(($text) => {

                  const proposta = $text.text().substr(0, 7)

                  console.log('numero da proposta: ' + proposta)

                  if (proposta == propostaGerada) {

                    console.log('Proposta' + proposta + 'é igual a ' + propostaGerada)

                    console.log('Proposta encontrada')

                    expect(true).to.equal(true)

                  } else {

                    console.log('Proposta' + proposta + 'é diferente a ' + propostaGerada)

                    cy.get('tbody > :nth-child(5) > :nth-child(2)').then(($text) => {

                      const proposta = $text.text().substr(0, 7)

                      console.log('numero da proposta: ' + proposta)

                      if (proposta == propostaGerada) {

                        console.log('Proposta' + proposta + 'é igual a ' + propostaGerada)

                        console.log('Proposta encontrada')

                        expect(true).to.equal(true)

                      } else {

                        console.log('Proposta' + proposta + 'é diferente a ' + propostaGerada)

                        if (cy.get('tbody > :nth-child(7) > :nth-child(2)') !== null) {

                          cy.get('tbody > :nth-child(7) > :nth-child(2)').then(($text) => {

                            const proposta = $text.text().substr(0, 7)

                            console.log('numero da proposta: ' + proposta)

                            if (proposta == propostaGerada) {

                              console.log('Proposta' + proposta + 'é igual a ' + propostaGerada)

                              console.log('Proposta encontrada')

                              expect(true).to.equal(true)

                            } else {

                              console.log('Proposta' + proposta + 'é diferente a ' + propostaGerada)

                              if (cy.get('tbody > :nth-child(9) > :nth-child(2)') !== null) {

                                cy.get('tbody > :nth-child(9) > :nth-child(2)').then(($text) => {

                                  const proposta = $text.text().substr(0, 7)

                                  console.log('numero da proposta: ' + proposta)

                                  if (proposta == propostaGerada) {

                                    console.log('Proposta' + proposta + 'é igual a ' + propostaGerada)

                                    console.log('Proposta encontrada')

                                    expect(true).to.equal(true)

                                  } else {

                                    console.log('Proposta' + proposta + 'é diferente a ' + propostaGerada)

                                    cy.get('.icon-seta-direita-b').click()

                                  }
                                })
                              }
                            }
                          })
                        }
                      }
                    })
                  }
                })
              }
              console.log(i)
            }
          })
        }
      })
  
      }
    })  

    })

    })

  })



