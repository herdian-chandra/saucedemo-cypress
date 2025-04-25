const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      development: "https://www.google.com/",
      stage: "https://www.tokopedia.com/",
      production: "https://www.saucedemo.com/",
      orangeHRM:
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
