describe("User login test case", () => {
  beforeEach(() => {
    //visit url first
    // cy.visit("https://www.saucedemo.com/");
    cy.visit(Cypress.env("production"));
  });

  it("Success Login", () => {
    cy.get('[data-test="username"]').should("be.visible").type("standard_user");
    cy.get('[data-test="password"]').should("be.visible").type("secret_sauce");
    cy.get('[data-test="login-button" ]').click();
    cy.get('[class="title"]').contains("Products");
  });

  it("Login without username", () => {
    cy.get('[data-test="password"]').should("be.visible").type("secret_sauce");
    cy.get('[data-test="login-button" ]').click();
    cy.get('[data-test="error"]')
      .should("be.visible")
      .contains("Username is required");
  });

  it("Login without password", () => {
    cy.get('[data-test="username"]').should("be.visible").type("standard_user");
    cy.get('[data-test="login-button" ]').click();
    cy.get('[data-test="error"]')
      .should("be.visible")
      .contains("Password is required");
  });

  it("Login with wrong username", () => {
    cy.get('[data-test="password"]')
      .should("be.visible")
      .type("wrong_username");
    cy.get('[data-test="username"]').should("be.visible").type("standard_user");
    cy.get('[data-test="login-button" ]').click();
    cy.get('[data-test="error"]').should("be.visible").contains("do not match");
  });

  it("Login with wrong password", () => {
    cy.get('[data-test="password"]').should("be.visible").type("standard_user");
    cy.get('[data-test="username"]')
      .should("be.visible")
      .type("wrong_password");
    cy.get('[data-test="login-button" ]').click();
    cy.get('[data-test="error"]').should("be.visible").contains("do not match");
  });

  it("Login with lock user account", () => {
    cy.get('[data-test="username"]')
      .should("be.visible")
      .type("locked_out_user");
    cy.get('[data-test="password"]').should("be.visible").type("secret_sauce");
    cy.get('[data-test="login-button" ]').click();
    cy.get('[data-test="error"]').should("be.visible").contains("locked out");
  });
});
