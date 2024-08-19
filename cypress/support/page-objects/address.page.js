class AddressPage {

  editAdressInvoicing(name, lastName, enterprise, country, address, addressNumber, city, state, cep, phoneNumber, email) {
    cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
    cy.get(':nth-child(1) > .title > .edit').click()
    cy.get('#billing_first_name').clear().type(name)
    cy.get('#billing_last_name').clear().type(lastName)
    cy.get('#billing_company').clear().type(enterprise)
    cy.get('#select2-billing_country-container').click().type(country).get('[aria-selected="true"]').click()
    cy.get('#billing_address_1').clear().type(address)
    cy.get('#billing_address_2').clear().type(addressNumber)
    cy.get('#billing_city').clear().type(city)
    cy.get('#select2-billing_state-container').click().type(state + '{enter}')
    cy.get('#billing_postcode').clear().type(cep)
    cy.get('#billing_phone').clear().type(phoneNumber)
    cy.get('#billing_email').clear().type(email)
    cy.get('.button').click()
  }

  editAddressDelivery() {
    // elementos + ações
  }

}

export default new AddressPage()