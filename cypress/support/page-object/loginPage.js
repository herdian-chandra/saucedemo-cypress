class loginPage {
  username = '[data-test="username"]';
  password = '[data-test="password"]';
  loginButton = '[data-test="login-button"]';
  titlePage = '[class="title"]';
  errorMessage = '[data-test="error"]';

  inputUsername(username) {
    cy.get(this.username).should("be.visible").clear().type(username);
  }
  inputPassword(password) {
    cy.get(this.password).should("be.visible").clear().type(password);
  }
  clickLoginButton(loginButton) {
    cy.get(this.loginButton).should("be.visible").click();
  }
  verifyTitlePage(titlePage) {
    cy.get(this.titlePage).contains(titlePage);
  }
  verifyErrorMessage(errorMessage) {
    cy.get(this.errorMessage).should("be.visible").contains(errorMessage);
  }
}

export default new loginPage();
