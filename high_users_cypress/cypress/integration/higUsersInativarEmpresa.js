/// <reference types="cypress" />
describe('PROJETO HIGH USERS - CONSULTA SEGURADO', () => {
    before(() => {
      // cy.clearCookies()
    })
  
    beforeEach(() => {
    }) 

    it('Menu Administrativo - Empresa', () => {
         // Acessar o High Users
        cy.visit('http://wsphttp.dsv.bradseg.com.br/JPSA-HighUse/painel/painel.do') 

        // Acessa o Menu Administrativo > Empresa
        cy.get(':nth-child(3) > .dropdown-toggle').click()
        cy.get('.open > .dropdown-menu > :nth-child(2) > a').click()

        // Clica em pesquisar
        cy.get('.padding-top-50px > .bradseg-btn').click()

    })
    
    it('Consulta CPNJ já Cadastrado no Sistema', () => {
        cy.get('#cnpj').type('07.825.425/0001-89')

        // Clica em pesquisar
        cy.get('.padding-top-50px > .bradseg-btn').click()

        // Verifica Status
        //cy.get('tbody > tr > :nth-child(6)').should('contain','ATIVO')
        
    })


    it('Inativar uma Empresa', () => {

        // clicar no ícone da LAPIS para edição
        cy.get('[onclick="editar(6001, 571)"] > .icon').click() 
        console.log('passou aqui')


        // Seleciona a opção de INATIVO do Status e verifica se o mesmo está selecionado
        cy.get('#estipulante_situacaoCadastralINATIVO').click().should('be.checked')


        // clica em SIM 
        cy.get('#modal-inativar > .modal-vertical-helper > .modal-dialog > .modal-content > .modal-body > div > .blue').click()
        cy.wait(2000)


        // Valida Mensagem de Inativar uma empresa
        cy.get('#modal-inativar > .modal-vertical-helper > .modal-dialog > .modal-content > .modal-body > h4').should('contain.text','Ao inativar essa empresa os segurados associados a ela também serão inativados, deseja continuar?')
         
 
        // clica no botão SALVAR
        cy.get('.pull-right > .blue').click()


        // Valida de Mensagem de Sucesso (Empresa atualizada com Sucesso)
        cy.get('#action-messages > p').should('contain','Empresa atualizada com sucesso.')


        // CAPTURA TELA
        cy.screenshot('Inativação da Empresa Efetuada com Sucesso') 

        // clica no botão cancelar
        cy.get('.pull-right > .cinza').click()
    })

 
    it('Consulta Empresa Inativa', () => {

        // Informa o CNPJ
        cy.get('#cnpj').type('07.825.425/0001-89')


        // Informe o Status que deseja fazer a pesquisa
        cy.get('#status').select('INATIVO').should('have.value','INATIVO')


        // Clica em pesquisar
        cy.get('.padding-top-50px > .bradseg-btn').click()


        // Valida se o resultado da pesquisa 
        cy.get('tbody > tr > :nth-child(6)').should('contain','INATIVO')
    })
})