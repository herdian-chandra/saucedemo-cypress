class checkoutComplete {
  title = '[data-test="complete-header"]';

  verifyTitle(title) {
    cy.get(this.title).should("be.visible").contains(title);
  }
}

export default new checkoutComplete();
