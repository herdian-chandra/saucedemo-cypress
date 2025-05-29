const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");
import loginPage from "../../../support/page-object/loginPage";
import inventory from "../../../support/page-object/inventory";
import cart from "../../../support/page-object/cart";
import checkoutStepOne from "../../../support/page-object/checkout-step-one";
import checkoutStepTwo from "../../../support/page-object/checkout-step-two";
import checkoutComplete from "../../../support/page-object/checkout-complete";

Given("I open the SauceDemo login page", () => {
  cy.visit(Cypress.env("production"));
});

When(
  "I input the username {string} and password {string}",
  (username, password) => {
    loginPage.inputUsername(username);
    loginPage.inputPassword(password);
  }
);

When("I click the login button", () => {
  loginPage.clickLoginButton();
});

Then("I should be redirected to the Inventory page", () => {
  inventory.verifyTitlePage("Products");
});

When("I click 1 product of {string}", (productName) => {
  // inventory.choosePrduct();
  cy.xpath(
    `//div[@data-test='inventory-item-name' and contains(., '${productName}')]`
  ).click();
});

When("I click the cart icon and I should be redirected to Cart page", () => {
  inventory.clickCartIcon();
  cart.verifyTitle("Your Cart");
});

When("I click the Checkout button", () => {
  cart.clickCheckoutButton();
});

When(
  "I input the Firstname {string}, Lastname {string}, Postalcode {string}, and click the Continue button",
  (firstName, lastName, postalCode) => {
    checkoutStepOne.inputFirstName(firstName);
    checkoutStepOne.inputLastName(lastName);
    checkoutStepOne.inputPostalCode(postalCode);
    checkoutStepOne.clickContinueButton();
  }
);

Then("I verify and finish the order", () => {
  checkoutStepTwo.verifyTitle("Checkout: Overview");
  checkoutStepTwo.clickFinishButton();
  checkoutComplete.verifyTitle("Thank you for your order!");
});
