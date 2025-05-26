const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  reporter: "cypress-mochawesome-reporter",
  env: {
    development: "https://www.google.com/",
    stage: "https://www.tokopedia.com/",
    production: "https://www.saucedemo.com/",
    orangeHRM:
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    userId: "",
    password: "",
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
