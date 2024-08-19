/// <reference types="cypress"/> 
import AddressPage from "../support/page-objects/address.page";

context('Functionality Addresses', () => {
  beforeEach(() => {
    cy.visit('minha-conta')
    cy.fixture('perfil').then(data => {
      cy.login(data.usuario, data.senha)
    })
  });

  it.only('Deve fazer cadastro de faturamento com sucesso', () => {
    AddressPage.editAdressInvoicing('Raianna', 'Lima', 'Google', 'Brasil', 'Rua da Republica', '100', 'Porto Alegre', 'Rio Grande do Sul', '98777654', '(51) 988887777', 'rai@yahoo.com')
    cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
  });
});