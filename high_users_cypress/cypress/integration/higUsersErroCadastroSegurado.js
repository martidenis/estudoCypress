/// <reference types="cypress" />
describe('PROJETO HIGH USERS - ERRO AO CADASTRAR O SEGURADO', () => {
    before(() => {
      // cy.clearCookies()
    })
  
    beforeEach(() => {
    }) 

    it('Menu Administrativo - SEGURADO', () => {
        cy.visit('http://wsphttp.dsv.bradseg.com.br/JPSA-HighUse/administracao/inicioSegurado.do')
        cy.wait(2000)

        // CAPTURA TELA
        //cy.screenshot('MENU ATENDIMENTO - Segurado')
    })
    

    it('CLICA NO BOTÃO CADASTRAR', () => {
        cy.get('#btn-cadastrar').click()
    })


    it('SELECIONE EMPRESA', () => {
        cy.get('#empresa').select('25136/571/2757').should('have.value','25136/571/2757')
        cy.wait(2000)

        // CAPTURA TELA
        //cy.screenshot('SEGURADO - SELECIONA EMPRESA')
    })
    

    it('INSERIR UM CPF', () => {
        cy.get('#cpf').type('81040542018')

        cy.get('#busca-cpf').click()
    })

    it('VALIDANDO O CPF CADASTRADO NO SISTEMA', () => {
         // CPF NÃO CADASTRADO NO CADP
         cy.get('#action-errors').should('contain','Nenhum resultado encontrado para o CPF 810.405.420-18')
         cy.wait(2000)

         // CAPTURA TELA
         //cy.screenshot('SEGURADO - CPF NÃO LOCALIZADO')

    })


    it('VALIDA CAMPO SEXO', () => {
        cy.get('#formCadastroSegurado_usuarioHU_dadosSegurado_pessoaFisica_sexoMASCULINO').click()
        cy.wait(2000)

        // CAPTURA TELA
        //cy.screenshot('SEGURADO - CAMPO SEXO')
    })


    it('VALIDA DATA NASCIMENTO', () => {
        cy.get('#dataNascimento').type('06/01/1988')
        cy.wait(2000)

        // CAPTURA TELA
       // cy.screenshot('SEGURADO - PREENCHIMENTO DATA NASCIMENTO')
    })


    it('VALIDA NÚMERO DO CARTÃO', () => {
        cy.get('#cartao').type('749900146450001')
        cy.wait(2000)

        // CAPTURA TELA
        //cy.screenshot('SEGURADO - PRENCHIMENTO NÚMERO CARTÃO')
    })


    it('VALIDA PLANO', () => {
       cy.get('#formCadastroSegurado_usuarioHU_dadosSegurado_tipoPlanoEMPRESARIAL').click()
       cy.wait(2000)

       // CAPTURA TELA
       //cy.screenshot('SEGURADO - PREENCHIMENTO PLANO')
    })


    it('VALIDA SUBFATURA', () => {
        cy.get('#subfatura').type('1')
        cy.wait(2000)

        // CAPTURA TELA
        //cy.screenshot('SEGURADO - PREENCHIMENTO SUBFATURA')
    })
    

    it('VALIDA NUMERO DE CONSULTAS ELETIVAS', () => {
       cy.get('#nrConsultasEletivas').type('10')
       cy.wait(2000)

       // CAPTURA TELA
       //cy.screenshot('SEGURADO - VALIDA NÚMERO DE CONSULTAAS ELETIVAS')
    })


    it('VALIDA NUMERO DE CONSULTAS PS', () => {
        cy.get('#nrConsultasPs').type('5')
        cy.wait(2000)

        // CAPTURA TELA
        //cy.screenshot('SEGURADO - PREENCHIMENTO NÚMERO CONSULTAS PS')
    })
    

    it('VALIDA CAMPO OBSERVAÇÃO', () => {
        cy.get('#obs').type('Testando Cadastramento com Erro por CPF')
        cy.wait(2000)

        // CAPTURA TELA
        //cy.screenshot('SEGURADO - PREENCHIMENTO OBSERVAÇÃO')
    })
    

    it('ENDEREÇO - VALIDA CAMPO CEP', () => {
        cy.get('#cep').type('21645396')

        // CLICA NA LUPA
        cy.get('#busca-endereco').click()
        cy.wait(2000)

        // CAPTURA TELA
        //cy.screenshot('SEGURADO - PREENCHIMENTO CEP')
    })
    

    it('ENDEREÇO - VALIDA CAMPO NÚMERO', () => {
        cy.get('#numero').type('987')
    })


    it('ENDEREÇO - VALIDA CAMPO COMPLETO', () => {
        cy.get('#complemento').type('bloco 1')
    })


    it('CONTATOS - VALIDA CAMPO EMAIL', () => {
        cy.get('#email').type('leoliveira@ebix.com')
    })


    it('CONTATOS - VALIDA CAMPO TIPO EMAIL', () => {
        cy.get('#tipo-email').select('PRINCIPAL').should('have.value','PRINCIPAL')

        //CLICA NO BOTÃO ADD EMAIL
        cy.get(':nth-child(1) > .padding-top-50px > .bradseg-btn').click()
        cy.wait(2000)

        // CAPTURA TELA
        //cy.screenshot('SEGURADO - PREENCHIMENTO EMAIL')
    })
    

    it('CONTATOS - VALIDA CAMPO TELEFONE', () => {
        cy.get('#telefone').type('219989856325')
    })
    
    
    it('CONTATOS - VALIDA CAMPO TIPO TELEFONE', () => {
        cy.get('#tipo-telefone').select('CELULAR').should('have.value','CELULAR')

        // CLICA NO BOTÃO ADD TELEFONE
        cy.get(':nth-child(2) > .padding-top-50px > .bradseg-btn').click()
        cy.wait(2000)

        // CAPTURA TELA
        //cy.screenshot('SEGURADO - PREENCHIMENTO TELEFONE')
    })
   

    it('CLICA NO BOTÃO SAVAR', () => {
       cy.get('.pull-right > .blue').click()
    })


    it('VALIDAÇÃO MENSAGEM DE ERRO', () => {
        cy.get('#custom-messages > p').should('contain.text','O campo Nome  é obrigatório.')
        cy.wait(2000)

        // CAPTURA TELA
        //cy.screenshot('SEGURADO - Erro Campo Nome é Obrigatório')
    })

  })


