import loginPage from "../../support/page-object/loginPage";
import inventory from "../../support/page-object/inventory";
import cart from "../../support/page-object/cart";
import checkoutStepOne from "../../support/page-object/checkout-step-one";
import checkoutStepTwo from "../../support/page-object/checkout-step-two";
import checkoutComplete from "../../support/page-object/checkout-complete";

const listOfProducts = require("../../fixtures/testDataProducts.json");
//alterntive way to call fixture
/**
 * cy.fixture('name_of_file_fixture').then(function(data){
 *  this.data = data
 * })
 * and store it in beforeEach
 */

describe("E2E Journey Order Multiple Item", () => {
  beforeEach(() => {
    //visit url first
    // cy.visit("https://www.saucedemo.com/");
    cy.visit(Cypress.env("production"));
  });

  it("Journey order multiple item", () => {
    /**
     * login
     */
    // loginPage.inputUsername("standard_user");
    // loginPage.inputPassword("secret_sauce");
    // loginPage.clickLoginButton();
    loginPage.loginSuccess("standard_user", "secret_sauce");

    /**
     * inventory
     */
    inventory.verifyTitlePage("Products");
    //loop the product base on how many data
    for (let product of listOfProducts) {
      cy.get(product.idProduct).should("be.visible").click();
    }
    inventory.clickCartIcon();

    /**
     * cart
     */
    cart.verifyTitle("Your Cart");
    cart.clickCheckoutButton();

    /**
     * checkout-step-one
     */
    checkoutStepOne.verifyTitle("Checkout: Your Information");
    checkoutStepOne.inputFirstName("Herdian");
    checkoutStepOne.inputLastName("Chandra");
    checkoutStepOne.inputPostalCode("12345");
    checkoutStepOne.clickContinueButton();

    /**
     * checkout-step-two
     */
    checkoutStepTwo.verifyTitle("Checkout: Overview");
    checkoutStepTwo.clickFinishButton();

    /**
     * checkout-complete
     */
    checkoutComplete.verifyTitle("Thank you for your order!");
  });
});
