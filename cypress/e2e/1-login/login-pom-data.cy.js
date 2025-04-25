import loginPage from "../../support/page-object/loginPage";
const testDataAccount = require("../../fixtures/testDataAccount.json");

describe("Failed login", () => {
  beforeEach(() => {
    //visit url first
    // cy.visit("https://www.saucedemo.com/");
    cy.visit(Cypress.env("production"));
  });

  for (let i = 0; i <= testDataAccount.length; i++) {
    it("Failed login multiple data", () => {
      loginPage.inputUsername(testDataAccount[i].username);
      loginPage.inputPassword(testDataAccount[i].password);
      loginPage.clickLoginButton();
      loginPage.verifyErrorMessage(testDataAccount[i].errorMessage);
    });
  }
});
