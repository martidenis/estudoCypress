describe('Teste do Monitoramento Segurado', () => {

    it('Verificar se as informações consultadas no Monitoramento Segurado estão sendo retornadas corretamente', () => {

        // Acessar o High Users
        cy.visit('http://wsphttp.dsv.bradseg.com.br/JPSA-HighUse/painel/painel.do')

        // Acessar a tela de monitoramento
        cy.get(':nth-child(4) > .dropdown-toggle').click()
        cy.get('.open > .dropdown-menu > :nth-child(3) > a').click()

        // Seleção da empresa
        cy.get('#empresa').select('CAMBOINHAS (Apólice: 11111 / Cia: 244)')

        // Informar as datas para busca
        cy.get('#dataInicio').type('01/12/2019')
        cy.get('.inline-block').click()
        cy.get('#dataFim').type('31/12/2019')

        // Acionar o botão para a consulta
        cy.get('.bradseg-btn').click()

        // Verificar se a empresa pesquisada foi retornada na consulta corretamente
        cy.get('.unstyle > :nth-child(1) > strong').should('have.text', 'CAMBOINHAS')

        // Verificar se a data e a empresa pesquisadas retornaram na consulta corretamente
        cy.get('svg > :nth-child(3) > text').should('have.text', 'Empresa: CAMBOINHAS- Período: 01/12/2019 - 31/12/2019')

        // Verificar se o link que permite o download do relatório está presente na tela
        cy.get('.text-right > a > span').should('have.text', 'Exportar para XLS')

        cy.screenshot()
    })

})