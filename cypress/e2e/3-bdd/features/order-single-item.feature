Feature: E2E Journey Order Single Item

  Scenario: Journey order single item
    Given I open the SauceDemo login page
    When I input the username "standard_user" and password "secret_sauce"
    And I click the login button
    Then I should be redirected to the Inventory page
    When I click 1 product of "Sauce Labs Bolt T-Shirt"
    And I click the cart icon and I should be redirected to Cart page
    When I click the Checkout button
    And I input the Firstname "Herdian", Lastname "Chandra", Postalcode "12345", and click the Continue button
    Then I verify and finish the order