/// <reference types="cypress" />
describe('PROJETO HIGH USERS - CADASTRO SEGURADO', () => {
    before(() => {
      // cy.clearCookies()
    })
  
    beforeEach(() => {
    }) 

    it('Menu Administrativo - SEGURADO', () => {
        cy.visit('http://wsphttp.dsv.bradseg.com.br/JPSA-HighUse/administracao/inicioSegurado.do')
    })
    

    it('CLICA NO BOTÃO CADASTRAR', () => {
        cy.get('#btn-cadastrar').click()
    })


    it('SELECIONE EMPRESA', () => {
        cy.get('#empresa').select('25136/571/2757').should('have.value','25136/571/2757')
    })
    

    it('INSERIR UM CPF', () => {
        cy.get('#cpf').type('81040542018')

        cy.get('#busca-cpf').click()
    })


    it('SELECIONE EMPRESA', () => {
        cy.get('#empresa').select('25136/571/2757').should('have.value','25136/571/2757')
    })

    it('VALIDA CAMPO SEXO', () => {
        cy.get('#formCadastroSegurado_usuarioHU_dadosSegurado_pessoaFisica_sexoMASCULINO').click()
    })


    it('VALIDA NÚMERO DO CARTÃO', () => {
        cy.get('#cartao').type('749900146450001')
    })


    it('VALIDA PLANO', () => {
       cy.get('#formCadastroSegurado_usuarioHU_dadosSegurado_tipoPlanoEMPRESARIAL').click()
    })


    it('VALIDA SUBFATURA', () => {
        cy.get('#subfatura').type('1')
    })
    

    it('VALIDA NUMERO DE CONSULTAS ELETIVAS', () => {
       cy.get('#nrConsultasEletivas').type('10')
    })


    it('VALIDA NUMERO DE CONSULTAS PS', () => {
        cy.get('#nrConsultasPs').type('5')
    })
    

    it('VALIDA CAMPO OBSERVAÇÃO', () => {
        cy.get('#obs').type('TESTE LEO')
    })
    

    it('ENDEREÇO - VALIDA CAMPO CEP', () => {
        cy.get('#cep').type('21351110')

        // CLICA NA LUPA
        cy.get('#busca-endereco').click()
    })
    

    it('ENDEREÇO - VALIDA CAMPO NÚMERO', () => {
        cy.get('#numero').type('126')
    })


    it('ENDEREÇO - VALIDA CAMPO COMPLETO', () => {
        cy.get('#complemento').type('CASA 2')
    })



    it('CONTATOS - VALIDA CAMPO EMAIL', () => {
        cy.get('#email').type('leonardo@ebix.com')
    })


    it('CONTATOS - VALIDA CAMPO TIPO EMAIL', () => {
        cy.get('#tipo-email').select('PRINCIPAL').should('have.value','PRINCIPAL')

        //CLICA NO BOTÃO ADD EMAIL
        cy.get(':nth-child(1) > .padding-top-50px > .bradseg-btn').click()
    })
    

    it('CONTATOS - VALIDA CAMPO TELEFONE', () => {
        cy.get('#telefone').type('219989856325')
    })
    
    
    it('CONTATOS - VALIDA CAMPO TIPO TELEFONE', () => {
        cy.get('#tipo-telefone').select('CELULAR').should('have.value','CELULAR')

        // CLICA NO BOTÃO ADD TELEFONE
        cy.get(':nth-child(2) > .padding-top-50px > .bradseg-btn').click()
    })
   

    // it('CLICA NO BOTÃO SAVAR', () => {
    //   cy.get('.pull-right > .blue').click()
    // })
    
    

  })


