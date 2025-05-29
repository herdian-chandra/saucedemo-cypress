const { defineConfig } = require("cypress");
// for implementing bdd
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: true,
    html: true,
    Json: false,
  },
  env: {
    development: "https://www.google.com/",
    stage: "https://www.tokopedia.com/",
    production: "https://www.saucedemo.com/",
    orangeHRM:
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  },
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    // specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      on("file:preprocessor", cucumber());
    },
  },
});
