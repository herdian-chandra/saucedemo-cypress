class checkoutStepOne {
  title = '[data-test="title"]';
  firstName = '[data-test="firstName"]';
  lastName = '[data-test="lastName"]';
  postalCode = '[data-test="postalCode"]';
  continueButton = '[data-test="continue"]';

  verifyTitle(title) {
    cy.get(this.title).should("be.visible").contains(title);
  }

  inputFirstName(firstName) {
    cy.get(this.firstName).should("be.visible").clear().type(firstName);
  }

  inputLastName(lastName) {
    cy.get(this.lastName).should("be.visible").clear().type(lastName);
  }

  inputPostalCode(postalCode) {
    cy.get(this.postalCode).should("be.visible").clear().type(postalCode);
  }

  clickContinueButton(continueButton) {
    cy.get(this.continueButton).should("be.visible").click();
  }
}

export default new checkoutStepOne();
