/// <reference types="cypress" />
describe('Should test at a functional level', () => {
    before(() => {
    cy.clearCookies()
    })
    
    beforeEach(() => {
    
    })
    
    it('Login com sucesso', () => {
    cy.visit('http://wsphttp.dsv.bradseg.com.br/CVCR-PortalDeVendas/acesso/login.do')
    
    //Preencher Login e Senha - FUNÇÃO LOGINACESSO - COMMANDS
    cy.loginAcesso('#login','#senha')
    
    //cy.get('#login').type('08332494796')//32700454847
    //cy.get('#senha').type('Ebix@123')
    
    //Clicar no botão para efetuar login
    cy.get('.form-login > .btn').click()
    
    //Clicar no botão para selecionar o produto (Dental)
    
    cy.TokenGerado()
    
    // cy.request({
    // method: 'POST',
    // url: 'http://wsphttp.dsv.bradseg.com.br/CVCR-PortalDeVendas/acesso/autenticar.do',
    // body: {
    // login: '08332494796',
    // senha: 'Ebix@123'
    // // url: 'http://wsphttp.dsv.bradseg.com.br/CVCR-PortalDeVendas/utils.js'
    // }
    // }).its('allRequestResponses').should('not.be.empty')
    // cy.log('allRequestResponses')
    // .then(token => {
    // cy.request({
    // url: 'http://wsphttp.dsv.bradseg.com.br/CVCR-PortalDeVendas/gerarToken.do',
    // method: 'POST',
    // // headers: {
    // body: {
    // Response: `JWT ${token}`
    // }
    // }).then(res => {
    
    // console.log(res)
    // return res.body.token
    // }).then(token => {
    
    // console.log('token:', token)
    // const test = cy.visit('http://wsphttp.dsv.bradseg.com.br/CVCR-VendaDental/seguro/dental/home.do?t=' + token)
    // })
    
    // cy.visit('http://wsphttp.dsv.bradseg.com.br/CVCR-VendaDental/seguro/dental/atendimento/novoAtendimento.do')
    
    // })
    
    // RESPONSAVEL FINANCEIRO
    // Combo Perfil Atendimento
    cy.get('#tipoPerfilAtendimento').select('2')
    //cy.wait(5000)
    
    // Inserindo o CPF do responsável financeiro
    cy.get('.col-md-3').type('36074187649')
    //cy.wait(4000)
    
    // Clicar na busca
    cy.get('#buscarResponsavelFinanceiro').click()
    
    // Clicar na conta
    cy.get('#conta0 > :nth-child(1) > input').click()
    
    // Clicar no proximo
    cy.get('.btnProximo').click()
    
    //TITULAR
    
    
    //Chamando a função que gera um CPF randomicamente
    cy.inserirCPF('#cpfTitular')
    
    
    //cy.get('#cpfTitular').type(cpf)
    //cy.wait(5000)
    //Buscar CPF
    cy.get('#buscaTitular').click()
    //Nome Ttiular
    cy.get('#nomeTitular').type('JEREMIASS SILVA')
    
    //Nome mae
    cy.get('#nomeMaeTitular').type('MARIA SILVA')
    
    //Email
    cy.get('#emailTitular').type('testes@gmail.com')
    
    //Nascimento
    cy.get('#dataNascimentoTitular').type('30/11/1988')
    
    
    //Estado civil
    cy.get('#estadoCivilTitular').select('3')
    //Sexo
    cy.get('#sexoTitular').select('3')
    //CEP
    cy.get('#cepTitular').type('24120120')
    //Bucar CEP
    cy.get('#buscaCepTitular').click()
    //Numero
    cy.get('#numeroTitular').type('43')
    //Complemento
    cy.get('#complementoTitular').type('5643')
    //DDD
    cy.get('#dddFoneContatoTitular').type('21')
    //TEL
    cy.get('#foneContatoTitular').type('45327565')
    //Tipo Fone
    cy.get('#tipoTelefoneTitular').select('RESIDENCIAL')
    //Proximo
    cy.get('.btnProximo').click()
    
    //DEPENDENTE
    cy.get('.btnProximo').click()
    cy.wait(5000)
    
    
    //PLANO
    cy.get('#codigoPlano').select('259')
    //PAGAMENTO
    cy.get('#periodoCobrancaPlano').select('MENSAL')
    //DATA
    cy.get('#dataPrimeiroPagamento').type('10/03/2020')
    // Clique na tela
    cy.get('#valorPremioTitular').click()
    //ProximO
    cy.get('.btnProximo').click()
    
    //EFETIVACAO
    
    cy.get('.btnGerarProposta').click()
    
    
    //it('VALIDAÇÃO MENSAGEM SUCESSO', () => {
    cy.get('#titulo-modal').should('contain', 'Portal de Vendas - Efetivação realizada com sucesso.')
    cy.wait(4000)
    
    
    cy.get('#mensagens-modal > :nth-child(3) > :nth-child(1)').then(($text) => {
    const txt = $text.text().substr(10, 16)
    console.log('Variável txt: ' + txt)
    
    
    
    cy.get('#mensagens-modal > .pull-right > .btn-primary-green').click()
    
    
    //RETORNAR PARA CONSULTA
    cy.get('#linkProduto').click()
    
    //Clique em consulta
    cy.visit('http://wsphttp.dsv.bradseg.com.br/CVCR-VendaDental/seguro/dental/consulta/iniciarConsultaCpf.do')
    
    //Informar CPF
    cy.get('#cpfRespFinanc').type('36074187649')
    
    //Consultar
    cy.get('#btn-consultar-proposta').click()
    
    //Proximo
    cy.get('.last > .page-link').click()
    
    console.log()
    
    
    })
    
    
    })
    
    
    })