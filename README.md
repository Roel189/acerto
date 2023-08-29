# Acerto

# Testes Cypress - Bugers App

Este repositório contém testes automatizados desenvolvidos com o framework Cypress para a aplicação Bugers. Os testes visam validar o cadastro de entregadores na plataforma.

## Estrutura do Projeto

O projeto de testes está organizado da seguinte forma:

- `cypress/` : Contém os arquivos de teste, configurações e suporte.
  - `integration/` : Pasta onde estão localizados os arquivos de teste.
    - `cadastro.spec.js` : Contém os testes relacionados ao cadastro de entregadores.
  - `support/` : Pasta onde estão localizadas as Page Objects e arquivos de suporte.
    - `pages/` : Contém as Page Objects da aplicação.
      - `Cadastro.js` : Representa a Page Object da página de formulário de cadastro.
      - `Main.js` : Representa a Page Object da página principal.
    - `commands.js` : Contém comandos personalizados para reutilização nos testes.
- `cypress.json` : Arquivo de configuração do Cypress.

## Pré-requisitos

- Node.js e npm devem estar instalados na máquina.
- O repositório da aplicação Bugers deve estar configurado e acessível.

## Como Executar os Testes

1. Clone este repositório para sua máquina local.
2. Abra um terminal na raiz do projeto e execute os seguintes comandos:

npm install

Isso iniciará a execução dos testes automatizados usando o framework Cypress.

## Testes Automatizados

### Caso de Teste 1: Cadastro de Novo Entregador com Sucesso

Este teste valida que um novo entregador pode ser cadastrado com sucesso através do formulário.

```javascript
it('Validar que o cadastro de novo entregador ocorre com sucesso', () => {
    // Passos para acessar o formulário de cadastro
    main.clicarIniciarCadastro();

    // Preenche os campos do formulário e cadastra o entregador
    cadastro.cadastrarEntregador();

    // Verifica a mensagem de confirmação exibida
    cy.contains('Recebemos os seus dados...').should('be.visible');
    cadastro.clicarBtnFechar();
});
```
### Caso de Teste 2: Cadastro de Entregador sem Sucesso

```javascript
it('Validar que caso o Upload não tenha sido concluído...', () => {
    // Passos para acessar o formulário de cadastro
    main.clicarIniciarCadastro();

    // Preenche os campos do formulário sem o upload de CNH
    // ...

    // Tenta cadastrar o entregador
    cadastro.clicarCadastrar();

    // Verifica a mensagem de erro exibida
    cy.contains('Adicione uma foto da sua CNH').should('be.visible');
});
