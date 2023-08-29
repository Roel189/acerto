///<reference types="cypress"/>

//Importando Page Objects, dividi em duas páginas: Main, que se refere à página principal e 
//Cadastro, que é a página de formulário
import Cadastro from '../support/pages/Cadastro';
import Main from '../support/pages/Main';

const main = new Main();
const cadastro = new Cadastro();
before(() => {
    //Acessa o site da aplicação
    main.acessar();
  })

describe('Bugers - Cadastro de Entregadores', () => {
    it('Validar que o cadastro de novo entregador ocorre com sucesso', () => {
        main.clicarIniciarCadastro();

        //Main.clicarIniciarCadastro();
        //Função que preencherá todos os campos necessários para aconclusão do cadastro.
        cadastro.cadastrarEntregador();
        //Mensagem de confirmação de recebimento de dados via modal.
        cy.contains('Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.').should('be.visible')
        cadastro.clicarBtnFechar();
    });
    it('Validar que caso o Upload não tenha sido concluído, que o entregador não seja cadastrado', () => {
        main.clicarIniciarCadastro();

        //Aqui traz o preenchimento de cada um dos métodos referentes ao preenchimento do formulário de forma separada
        //Dessa maneira, facilita a manipulaçao e remoção de algum dado obrigatório referente ao formulario
        //Nesse teste o upload de cnh acaba não ocorrendo
        cadastro.preencherNome().type('Alessandra Oliveira Rodrigues')
        cadastro.preencherEmail().type('alessandra@email.com')
        cadastro.preencherWhats().type('11985463210')
        cadastro.preencherCpf().type('10706629680')
        cadastro.preencherCep().type('53421-440');  
        cadastro.clicarBuscarEndereco();
        cadastro.preencherNroEndereco().type('78');
        cadastro.clicarMetodoEntrega("moto");
        cadastro.clicarCadastrar();
        //Como não foi adicionado o upload de imagem de CNH a mensagem de erro cobrando este campo aparecerá e estará sendo verificada.
        cy.contains('Adicione uma foto da sua CNH').should('be.visible')      
    });
    
});