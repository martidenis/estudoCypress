/// <reference types="cypress" />
describe('PORTAL DE VENDAS - GERAÇÃO DE PROPOSTA + CONSULTA', () => {
  before(() => {
    // cy.clearCookies()
  })

  beforeEach(() => {

  })

  
  it('Gerar Proposta para o produto Auto e realizar consulta da proposta gerada', () => {

    // Login AUTO
    cy.loginAcessoAuto('#login','#senha')

    cy.homeAuto().then(() => {
      cy.visit('http://wsphttp.dsv.bradseg.com.br/CVCR-VendaAutomovel/seguro/auto/iniciarCotacao.do')
  })
  

    //Aba Solicitante
  
    //Selecionar o tipo de solicitante
    cy.get('#absc_cmbTipoSolicitante').select('10')

    //Informar o nome do solicitante
    cy.get('#absc_txtNmContato').type('JACIR ZAMBONI')

    //Preencher o telefone
    cy.get('#absc_txtDddFoneContato').click().type('21')
    cy.get('#absc_txtFoneContato').type('30176599')
  
    //Preencher o CPF
    cy.get('#absc_txtCpfCnpjSeg').type('33717133934')

    //Preencher o CEP de pernoite
    cy.get('#absegc_txtCepPernoiteSolic').type('85857350')

    
    //Clicar no botão Próximo
    cy.get('#absc_txtDddFoneContato').click()

    //Avançar para a próxima aba
    cy.get('.btnProximo').click()

    //Aba Seguro

    //Clicar no botão Próximo
    cy.get('.btnProximo').click()

    //Aba Automóvel

    //Preencher o campo Chassi
    cy.get('#abac_txtCdChassi').type('9BD17106LA5498229')
    //Pesquisar pelo chassi
    cy.get(':nth-child(3) > a > .icon-nav-busca').click()

    //Selecionar a placa
    cy.get('[data-num-portas="2"] > .abac_txtResCdModVeic').click()

    //Selecionar o tipo de combustível
    cy.get('#abac_cmbCombustivel').select('1')

    //Selecionar o tipo de uso do veículo
    cy.get('#abac_cmbUsoVeiculo').select('44')

    //Avançar para a próxima aba
    cy.get('.btnProximo').click()


    //Aba Perfil

    // Informar se o segurado é o proprietário do veículo
    cy.get('#abps_cmbSeguradoEoProprietario').select('S')

    //Informar o tipo de pessoa. Física ou Jurídica
    cy.get('#abps_cmbTipoPessoaSeg').select('F')

    //Informar se o segurado é principal condutor do veículo
    cy.get('#abps_cmbSegPrincCondVeic').select('S')

    //Fechar os alertas abertos
    cy.get('#botoes-modal > .btn').click()
    cy.get('#botoes-modal > .btn').click()
  
    //Informar o CPF do segurado
    cy.get('#abps_txtCpfCnpjSegurado').type('33717133934')

    //Informar o sexo do segurado
    cy.get('#abps_cmbSexoSegurado').select('M')

    //Estado civil
    cy.get('#abps_cmbEstadoCivilSegurado').select('2')

    //Informar novamente o nome do segurado
    //cy.get('#abps_txtNomeSegurado').type('JACIR ZAMBONI')

    //Data de Nascimento
    //cy.get('#abps_txtDtNascSeg').type('10/06/1957')

    //Avançar para a próxima aba
    cy.get('.btnProximo').click()



    //Aba QAR

    //Informar se o segurado deseja cobertura para condutores com idade entre 18 e 25 anos
    cy.get('#abqc_cmbCondutorEntre18e25').select('4')

    //Fechar alerta aberto
    cy.get('#modal-msg-error > .modal-dialog > .modal-content > .modal-header > .close').click()

    //Informar se o veículo pernoita em garagem ou local protegido
    cy.get('#abqc_cmbGaragemPernoite').select('3')

    //Informar se existe mais de um veículo na residência do segurado
    cy.get('#abqc_cmbMaisDeUmVeiculo').select('N')

    //Informar a principal atividade profissional do condutor
    cy.get('#abqc_cmbAtividadeCondutor').select('7')

    //Informar se o condutor utiliza o veículo para ir até o seu local de trabalho
    cy.get('#abqc_cmbUtilizacaoTrabalho').select('2')

    //Informar a quilometragem média mensal de uso do veículo
    cy.get('#abqc_cmbKmMediaMensal').select('1')

    //Avançar para a próxima aba
    cy.get('.btnProximo').click()

      
      //Aba cobertura

      //Informar o tipo de cobertura para o veículo
      cy.get('#abcc_cmbProdutoCobertura').select('0')

      //Informar a lotação do veículo
      cy.get('#abcc_txtLotacaoVeiculo').type('4')

      //Acionar o cálculo
      cy.get('.tab-content > .pull-right > .btn-primary-green').click()

      cy.get('strong').then(($text)=>{
        const numero = $text.text().substr(0,7)
        console.log(numero)


       //CAPTURA TELA
       cy.screenshot('SEGURADO - MENSAGEM DE SUCESSO')
    

   })

})

})
