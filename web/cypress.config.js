const { defineConfig } = require("cypress");

module.exports = defineConfig({
	viewportHeight: 900,
	viewportWidth: 1440,
	video: true,
	chromeWebSecurity: false,

	e2e: {
		baseUrl: "http://localhost:3000",
		defaultCommandTimeout: 9000,
		pageLoadTimeout: 120000,
		experimentalRunAllSpecs: true,
		hideXHRInCommandLog: true,
		specPattern: "cypress/e2e/**/*.cy.js",
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
});
