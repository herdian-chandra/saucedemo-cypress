const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    Json: true,
  },
  env: {
    development: "https://www.google.com/",
    stage: "https://www.tokopedia.com/",
    production: "https://www.saucedemo.com/",
    orangeHRM:
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
