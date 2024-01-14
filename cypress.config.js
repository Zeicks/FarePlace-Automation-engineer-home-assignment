const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 10000,
  responseTimeout: 40000,
  requestTimeout: 40000,
  video: true,
  chromeWebSecurity: false,
  waitForAnimations: true,
  retries: 2,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
