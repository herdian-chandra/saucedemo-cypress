import inventory from "../../support/page-object/inventory";
import loginPage from "../../support/page-object/loginPage";

describe("POM user login test case", () => {
  beforeEach(() => {
    //visit url first
    // cy.visit("https://www.saucedemo.com/");
    cy.visit(Cypress.env("production"));
  });

  it("Success Login", () => {
    loginPage.inputUsername("standard_user");
    loginPage.inputPassword("secret_sauce");
    loginPage.clickLoginButton();
    inventory.verifyTitlePage("Products");
  });

  it("Login without username", () => {
    loginPage.inputPassword("secret_sauce");
    loginPage.clickLoginButton();
    loginPage.verifyErrorMessage("Username is required");
  });

  it("Login without password", () => {
    loginPage.inputUsername("standard_user");
    loginPage.clickLoginButton();
    loginPage.verifyErrorMessage("Password is required");
  });

  it("Login with wrong username", () => {
    loginPage.inputUsername("wrong_username");
    loginPage.inputPassword("secret_sauce");
    loginPage.clickLoginButton();
    loginPage.verifyErrorMessage("do not match");
  });

  it("Login with wrong password", () => {
    loginPage.inputUsername("standard_user");
    loginPage.inputPassword("wrong_password");
    loginPage.clickLoginButton();
    loginPage.verifyErrorMessage("do not match");
  });

  it("Login with lock user account", () => {
    loginPage.inputUsername("locked_out_user");
    loginPage.inputPassword("secret_sauce");
    loginPage.clickLoginButton();
    loginPage.verifyErrorMessage("locked out");
  });
});
