const el = require('./elements').ELEMENTS;

export default class Main {
 
    acessar(){
        cy.visit(el.home);

    }
    clicarIniciarCadastro(){
        cy.contains(el.btnIniciarCadastro).should('be.visible').click();
    }
    
}
//export default new Main()
