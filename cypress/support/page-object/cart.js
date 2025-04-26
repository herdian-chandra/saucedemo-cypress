class cart {
  title = '[data-test="title"]';
  checkoutButton = '[data-test="checkout"]';

  verifyTitle(title) {
    cy.get(this.title).should("be.visible").contains(title);
  }

  clickCheckoutButton(checkoutButton) {
    cy.get(this.checkoutButton).should("be.visible").click();
  }
}

export default new cart();
