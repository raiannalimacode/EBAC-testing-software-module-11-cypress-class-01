/// <reference types="cypress"/> 

context('Functionality Addresses', () => {
  beforeEach(() => {
    cy.visit('minha-conta')
    cy.fixture('perfil').then(data => {
      cy.login(data.usuario, data.senha)
    })
  });

  it('Deve fazer cadastro de faturamento com sucesso', () => {
  });
});