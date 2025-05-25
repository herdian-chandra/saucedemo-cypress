import inventory from "../../support/page-object/inventory";
import loginPage from "../../support/page-object/loginPage";

const data = require("../../fixtures/testDataAccount.json");

describe("POM user login test case", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("production"));
  });

  it("Success Login", () => {
    loginPage.inputUsername(data.validUser.username);
    loginPage.inputPassword(data.validUser.password);
    loginPage.clickLoginButton();
    inventory.verifyTitlePage("Products");
  });

  it("Login without username", () => {
    loginPage.inputPassword(data.withoutUsername.password);
    loginPage.clickLoginButton();
    loginPage.verifyErrorMessage(data.withoutUsername.errorMsg);
  });

  it("Login without password", () => {
    loginPage.inputUsername(data.withoutPassword.username);
    loginPage.clickLoginButton();
    loginPage.verifyErrorMessage(data.withoutPassword.errorMsg);
  });

  it("Login with wrong username", () => {
    loginPage.inputUsername(data.invalidUsername.username);
    loginPage.inputPassword(data.invalidUsername.password);
    loginPage.clickLoginButton();
    loginPage.verifyErrorMessage("do not match");
  });

  it("Login with wrong password", () => {
    loginPage.inputUsername(data.invalidPassword.username);
    loginPage.inputPassword(data.invalidPassword.password);
    loginPage.clickLoginButton();
    loginPage.verifyErrorMessage("do not match");
  });

  it("Login with lock user account", () => {
    loginPage.inputUsername(data.lockedOutUser.username);
    loginPage.inputPassword(data.lockedOutUser.password);
    loginPage.clickLoginButton();
    loginPage.verifyErrorMessage(data.lockedOutUser.errorMsg);
  });
});
