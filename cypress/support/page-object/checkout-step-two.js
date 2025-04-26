class checkoutStepTwo {
  title = '[data-test="title"]';
  finishButton = '[data-test="finish"]';

  verifyTitle(title) {
    cy.get(this.title).should("be.visible").contains(title);
  }

  clickFinishButton(finishButton) {
    cy.get(this.finishButton).should("be.visible").click();
  }
}

export default new checkoutStepTwo();
