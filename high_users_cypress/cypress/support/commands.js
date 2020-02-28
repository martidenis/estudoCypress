// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


    var cpf = gerarCPF();

    function gerarCPF() {

        var comPontos = false;
  
        var n = 9;
        var n1 = randomiza(n);
        var n2 = randomiza(n);
        var n3 = randomiza(n);
        var n4 = randomiza(n);
        var n5 = randomiza(n);
        var n6 = randomiza(n);
        var n7 = randomiza(n);
        var n8 = randomiza(n);
        var n9 = randomiza(n);
        var d1 = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10;
        d1 = 11 - (mod(d1, 11));
        if (d1 >= 10) d1 = 0;
        var d2 = d1 * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11;
        d2 = 11 - (mod(d2, 11));
        if (d2 >= 10) d2 = 0;
        var cpf = comPontos ? '' + n1 + n2 + n3 + '.' + n4 + n5 + n6 + '.' + n7 + n8 + n9 + '-' + d1 + d2
          : '' + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + d1 + d2;
  
        return cpf
      }
  
      function randomiza(n) {
        var ranNum = Math.round(Math.random() * n);
        return ranNum;
      }
  
      function mod(dividendo, divisor) {
        return Math.round(dividendo - (Math.floor(dividendo / divisor) * divisor));
      }

      Cypress.Commands.add('inserirCPF', (cpfCliente) => {
        cy.get(cpfCliente).type(cpf)
        console.log('CPF gerado:', cpf)
    })


    //   Cypress.Commands.add('loginAcesso', (usuario, senha) => {
    //     cy.get(usuario).type('08332494796')
    //     cy.get(senha).type('Ebix@123')
    // })


            
    Cypress.Commands.add("loginAcesso", () => {
        cy.visit('http://wsphttp.dsv.bradseg.com.br/CVCR-PortalDeVendas/acesso/login.do')
        cy.get('#login').type('08332494796') //32700454847
        cy.get('#senha').type('Ebix@123')
      
        cy.get('.form-login > .btn').click()
      
        cy.request({
          url: 'http://wsphttp.dsv.bradseg.com.br/CVCR-PortalDeVendas/gerarToken.do',
          method: 'POST',
        }).then(res => {
          console.log(res)
          return res.body.token
        })
      })

        
      ///////  INICIO - COMMANDS DENTAL  ///////

        //  Cypress.Commands.add('loginAcessoResidencial', (usuario, senha) => {
        //     cy.get(usuario).type('08332494796')
        //     cy.get(senha).type('Ebix@123')
        //  })  
    
        Cypress.Commands.add("homeDental", () => {
            cy.loginAcesso().then(token => {
            cy.visit('http://wsphttp.dsv.bradseg.com.br/CVCR-VendaDental/seguro/dental/home.do?t=' + token)
            })
        })

      ////////////// FIM //////////////////



      ///////  INICIO - COMMANDS AUTO  ///////

      Cypress.Commands.add('loginAcessoAuto', (usuario, senha) => {
         cy.visit('http://wsphttp.dsv.bradseg.com.br/CVCR-PortalDeVendas/acesso/login.do')
         cy.get(usuario).type('42226813772')
         cy.get(senha).type('Ebix@123')

         cy.get('.form-login > .btn').click()

         cy.request({
            url: 'http://wsphttp.dsv.bradseg.com.br/CVCR-PortalDeVendas/gerarToken.do',
            method: 'POST',
          }).then(res => {
            console.log(res)
            return res.body.token
          })
        })    
     

      Cypress.Commands.add("homeAuto", () => {
        cy.loginAcesso().then(token => {
          cy.visit('http://wsphttp.dsv.bradseg.com.br/CVCR-VendaAutomovel/seguro/auto/home.do?t=' + token)
        })
      })

      ////////////// FIM //////////////////


      /////// INICIO - COMMANDS CAPITALIZAÇÃO  ///////

      Cypress.Commands.add('loginAcessoCapi', (usuario, senha) => {
         cy.visit('http://wsphttp.dsv.bradseg.com.br/CVCR-PortalDeVendas/acesso/login.do')
         cy.get(usuario).type('65862381708')
         cy.get(senha).type('Ebix@123')
      
         cy.request({
            url: 'http://wsphttp.dsv.bradseg.com.br/CVCR-PortalDeVendas/gerarToken.do',
            method: 'POST',
          }).then(res => {
            console.log(res)
            return res.body.token
          })
      }) 

      Cypress.Commands.add("homeCapitalizacao", () => {
        cy.loginAcesso().then(token => {
          cy.visit('http://wsphttp.dsv.bradseg.com.br/CVCR-VendaCapitalizacao/seguro/capitalizacao/home.do?t=' + token)
        })
      })

    ////////////// FIM //////////////////


    /////// INICIO - COMMANDS RESIDENCIAL  ///////

    //  Cypress.Commands.add('loginAcessoResidencial', (usuario, senha) => {
    //     cy.get(usuario).type('08332494796')
    //     cy.get(senha).type('Ebix@123')
    //  })  


      Cypress.Commands.add("homeResidencial", () => {
        cy.loginAcesso().then(token => {
          cy.visit('http://wsphttp.dsv.bradseg.com.br/CVCR-BilheteResidencial/seguro/residencial/home.do?t=' + token)
        })
      })
 
     ////////////// FIM ////////////////// 



    // COMMANDS PARA PREENCHIMENTO DE DATA AUTOMATICA COM ACRESCIMO DE 1 DIA 
    Cypress.Commands.add("dataSistema", (dataAtualAgendamento) => {
        let d = new Date(); // data atual
        d.setDate(d.getDate() + 1); // somar 2 dias

        let dataFormatada = d.getDate().toString().padStart(2, '0') + '/'  + (d.getMonth() + 1).toString().padStart(2, '0') + '/' + d.getFullYear();
        console.log(dataFormatada);
        cy.get(dataAtualAgendamento).type(dataFormatada).click() 

        // var data = new Date()
        // var dataAtual = data.getDate()+1 + '/' + ("0" + (data.getMonth()+1)).slice(-2) + '/' + data.getFullYear()
        // cy.get('#dataAgendamento').type(dataAtual).click() 
    })

    // COMMANDS PARA PREENCHIMENTO DE DATA AUTOMATICA COM ACRESCIMO DE 15 DIAS 
    Cypress.Commands.add("dataAgendamentoPlano", (dataPgt) => {
        let d = new Date(); // data atual
        d.setDate(d.getDate() + 15); // somar 2 dias

        let dataFormatada = d.getDate().toString().padStart(2, '0') + '/'  + (d.getMonth() + 1).toString().padStart(2, '0') + '/' + d.getFullYear();
        console.log(dataFormatada);
        cy.get(dataPgt).type(dataFormatada).click() 
    })