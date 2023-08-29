//import user from '../../../fixtures/user.json'
const el = require('./elements').ELEMENTS;

export default class Cadastro {
 //metodo retorna o objeto referente ao campo nome pronto para ser instanciado.
    preencherNome(){
        return cy.get(el.nome);

    }
     //metodo retorna o objeto referente ao campo cpf pronto para ser instanciado.
    preencherCpf(){
        return cy.get(el.cpf);
    }
     //metodo retorna o objeto referente ao campo Whatsapp pronto para ser instanciado.
    preencherWhats(){
        return cy.get(el.whatsapp);
    }

     //metodo retorna o objeto referente ao campo email pronto para ser instanciado.
    preencherEmail(){
        return cy.get(el.email);
    }
     //metodo retorna o objeto referente ao campo cep pronto para ser instanciado.
    preencherCep(){
        return cy.get(el.cep);
    }
     //metodo retorna o objeto referente ao botão para buscar CEP pronto para ser clicado.
    clicarBuscarEndereco(){
        return cy.get(el.btnBuscarCep).click();
    }
    //metodo retorna o objeto referente ao campo numero do endereço pronto para ser instanciado.
    preencherNroEndereco(){
        return cy.get(el.nroEnd);
    }
    //metodo para clicar no metodo de entrega conforme for escolhido para compor o teste
    clicarMetodoEntrega(metodo) {
        if(metodo == "bicicleta"){
            return cy.get(el.bike).click();
        }
        if(metodo == 'moto'){
            return cy.get(el.moto).click();
        }
        if(metodo == 'carro'){
            return cy.get(el.carro).click();
        }
    }
    uploadArquivo(){
        const fileCNH = "cnh1.jpg";
        return cy.contains(el.upload, {force: true}).attachFile(fileCNH, {subjectType: 'drag-n-drop'});
    } 
    clicarCadastrar() {
        cy.get(el.btnCadastrar).click();
    }
    //Clica no botão Fechar após a conclusão do cadastro
    clicarBtnFechar(){
        cy.contains(el.btnFechar).click();
    }
    erroCNH(){
        cy.contains(el.erroCNH)
    }
    //Simula o cadastro de Entregador de forma completa
    cadastrarEntregador(){
        
            cy.get(el.nome).type('Marcos Araujo Pinto');

            cy.get(el.cpf).type('11149353368');
        
            cy.get(el.whatsapp).type('(81) 98134-8020');

            cy.get(el.email).type('MarcosAraujoPinto@teleworm.us');

            cy.get(el.cep).type('53421-440');

            cy.get(el.btnBuscarCep).click();

            cy.get(el.nroEnd).type('53');

            cy.get(el.bike).click();

            const fileCNH = "cnh1.jpg";
            cy.contains(el.upload, {force: true}).attachFile(fileCNH, {subjectType: 'drag-n-drop'});

            cy.get(el.btnCadastrar).click();
        
    }
}
