describe('Teste do Painel', () => {

    it('Verificar se as informações consultadas no Painel estão sendo retornadas corretamente', () => {

        // Acessar o High Users
        cy.visit('http://wsphttp.dsv.bradseg.com.br/JPSA-HighUse/painel/painel.do')

        // Acessar a tela de monitoramento
        cy.get('.nav > :nth-child(1) > a').click()
        
        // Informar as datas para busca
        cy.get('#dataInicio').type('01/11/2019')
        cy.get('.inline-block').click()
        cy.get('#dataFim').type('30/11/2019')
        
        // Acionar o botão para a consulta
        cy.get('.bradseg-btn').click()
        
        // Verificar se a data pesquisada retornou na consulta corretamente
        cy.get('li > strong').should('have.text', '01/11/2019 - 30/11/2019')
        
        // Verificar se a empresa pesquisada foi retornada na consulta corretamente
        cy.get(':nth-child(5) > .bradseg-table > tbody > tr > td').should('not.have.text', 'Nenhum registro encontrado.')

        // Verificar se o link que permite o download do relatório está presente na tela
        cy.get('#tabelaPeriodo > tbody > tr > td').should('not.have.text', 'Nenhum registro encontrado.')

        cy.screenshot()                
    })

})