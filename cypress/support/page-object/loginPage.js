class loginPage {
  username = '[data-test="username"]';
  password = '[data-test="password"]';
  loginButton = '[data-test="login-button"]';
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
  verifyErrorMessage(errorMessage) {
    cy.get(this.errorMessage).should("be.visible").contains(errorMessage);
  }

  loginSuccess(username, password) {
    this.inputUsername(username);
    this.inputPassword(password);
    this.clickLoginButton(this.loginButton);
  }
}

export default new loginPage();
