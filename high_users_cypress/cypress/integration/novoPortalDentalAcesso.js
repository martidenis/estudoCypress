/// <reference types="cypress" />
describe('PORTAL DE VENDAS (DENTAL) - GERAÇÃO DE PROPOSTA + CONSULTA', () => {
  before(() => {
    cy.clearCookies()
  })

  beforeEach(() => {

  })

  it('Gerar Proposta para o produto Dental e realizar consulta por CPF', () => {

    cy.homeDental().then(() => {
      cy.visit('http://wsphttp.dsv.bradseg.com.br/CVCR-VendaDental/seguro/dental/atendimento/novoAtendimento.do')
    })

    

    // RESPONSAVEL FINANCEIRO
    // Combo Perfil Atendimento
    cy.get('#tipoPerfilAtendimento').select('2')
    cy.wait(5000)

    // Inserindo o CPF do responsável financeiro
    cy.get('.col-md-3').type('36074187649')
    cy.wait(4000)

    // Clicar na busca
    cy.get('#buscarResponsavelFinanceiro').click()

    // Clicar na conta
    cy.get('#conta0 > :nth-child(1) > input').click()

    // Clicar no proximo
    cy.get('.btnProximo').click()

    // TITULAR


    // Chamando a função que gera um CPF randomicamente
    cy.inserirCPF('#cpfTitular')


    //cy.get('#cpfTitular').type(cpf)
    // cy.wait(5000)
    // Buscar CPF
    cy.get('#buscaTitular').click()

    // Nome Ttiular
    cy.get('#nomeTitular').type('JEREMIASS SILVA')

    // Nome mae
    cy.get('#nomeMaeTitular').type('MARIA SILVA')

    // Email
    cy.get('#emailTitular').type('testes@gmail.com')

    // Nascimento
    cy.get('#dataNascimentoTitular').type('30/11/1988')


    // Estado civil
    cy.get('#estadoCivilTitular').select('3')

    // Sexo
    cy.get('#sexoTitular').select('3')

    // CEP
    cy.get('#cepTitular').type('24120120')

    // Bucar CEP
    cy.get('#buscaCepTitular').click()

    // Numero
    cy.get('#numeroTitular').type('43')

    // Complemento
    cy.get('#complementoTitular').type('5643')

    // DDD
    cy.get('#dddFoneContatoTitular').type('21')

    // TEL 
    cy.get('#foneContatoTitular').type('45327565')

    // Tipo Fone
    cy.get('#tipoTelefoneTitular').select('RESIDENCIAL')

    // Proximo
    cy.get('.btnProximo').click()

    // DEPENDENTE
    cy.get('.btnProximo').click()
    cy.wait(5000)


    // PLANO
    cy.get('#codigoPlano').select('259')

    // PAGAMENTO 
    cy.get('#periodoCobrancaPlano').select('MENSAL')

    // FUNÇÃO COMMANDS - DATA
    cy.dataAgendamentoPlano('#dataPrimeiroPagamento')


    // Clique na tela
    cy.get('#valorPremioTitular').click()

    // ProximO
    cy.get('.btnProximo').click()

    // EFETIVACAO
    cy.get('.btnGerarProposta').click()

    //it('VALIDAÇÃO MENSAGEM SUCESSO', () => {
    cy.get('#titulo-modal').should('contain', 'Portal de Vendas - Efetivação realizada com sucesso.')
    cy.wait(4000)


    cy.get('#mensagens-modal > :nth-child(3) > :nth-child(1)').then(($text) => {
      //const txt = $text.text().substr(10, 16)
      const propostaGerada = $text.text().substr(10, 16)
      console.log('Variável txt: ' + propostaGerada)
      cy.wait(4000)

      cy.get('#mensagens-modal > .pull-right > .btn-primary-green').click()
      cy.wait(4000)

      // RETORNAR PARA CONSULTA
      //cy.get('#linkProduto').click()
         

      //Clique em consulta
      cy.visit('http://wsphttp.dsv.bradseg.com.br/CVCR-VendaDental/seguro/dental/consulta/iniciarConsultaCpf.do')

      //Informar CPF
      cy.get('#cpfRespFinanc').type('36074187649')

      //Consultar
      cy.get('#btn-consultar-proposta').click()


    //})




    //it('FOR', () => {

      //const propostaGerada = 65631

      cy.get('.icon-seta-dupla-direita-b').click()

      cy.get('.active > .page-link').then(($text) => {

        const pagina = $text.text().substr(0, 5)

        console.log('numero da pagina: ' + pagina)

        console.log(pagina)

        cy.get('.icon-seta-dupla-b').click()



        for (let i = 1; i <= pagina; i++) {

          var proposta

          cy.get('tbody > :nth-child(1) > :nth-child(2)').then(($text) => {
            const proposta = $text.text().substr(0, 5)
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

                  const proposta = $text.text().substr(0, 5)

                  console.log('numero da proposta: ' + proposta)

                  if (proposta == propostaGerada) {

                    console.log('Proposta' + proposta + 'é igual a ' + propostaGerada)

                    console.log('Proposta encontrada')

                    expect(true).to.equal(true)

                  } else {

                    console.log('Proposta' + proposta + 'é diferente a ' + propostaGerada)

                    cy.get('tbody > :nth-child(5) > :nth-child(2)').then(($text) => {

                      const proposta = $text.text().substr(0, 5)

                      console.log('numero da proposta: ' + proposta)

                      if (proposta == propostaGerada) {

                        console.log('Proposta' + proposta + 'é igual a ' + propostaGerada)

                        console.log('Proposta encontrada')

                        expect(true).to.equal(true)

                      } else {

                        console.log('Proposta' + proposta + 'é diferente a ' + propostaGerada)

                        if (cy.get(':nth-child(7) > :nth-child(2)') !== null) {

                          cy.get(':nth-child(7) > :nth-child(2)').then(($text) => {

                            const proposta = $text.text().substr(0, 5)

                            console.log('numero da proposta: ' + proposta)

                            if (proposta == propostaGerada) {

                              console.log('Proposta' + proposta + 'é igual a ' + propostaGerada)

                              console.log('Proposta encontrada')

                              expect(true).to.equal(true)

                            } else {

                              console.log('Proposta' + proposta + 'é diferente a ' + propostaGerada)

                              if (cy.get(':nth-child(9) > :nth-child(2)') !== null) {

                                cy.get('tbody > :nth-child(9) > :nth-child(2)').then(($text) => {

                                  const proposta = $text.text().substr(0, 5)

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
    })
  })
})
