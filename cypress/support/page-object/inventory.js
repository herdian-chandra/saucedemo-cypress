class inventory {
  titlePage = '[class="title"]';
  product = '[data-test="add-to-cart-sauce-labs-bike-light"]'; //still hardcode
  remove = '[data-test="remove-sauce-labs-bike-light"]'; //still hardcode
  cartIcon = '[data-test="shopping-cart-link"]';

  verifyTitlePage(titlePage) {
    cy.get(this.titlePage).contains(titlePage);
  }

  choosePrduct() {
    cy.get(this.product).should("be.visible").contains("Add to cart").click();
  }

  assertButtonBecameRemove() {
    cy.get(this.remove).should("be.visible").contains("Remove");
  }

  clickCartIcon(cartIcon) {
    cy.get(this.cartIcon).should("be.visible").click();
  }
}

export default new inventory();
