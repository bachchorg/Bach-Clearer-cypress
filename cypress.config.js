const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1200,
    baseUrl: 'https://boost-pfs-demo.myshopify.com/',
    verticalLayoutUrl: '/collections/vertical-layout',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
});
