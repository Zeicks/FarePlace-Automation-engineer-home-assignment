# Test runner: Cypress 

Command for running Cypress:
`npx cypress open`

# Run:

- `npm i`
- `npm install -D cypress-xpath`

# Running from the terminal:

 Running autotest through Chrome:

`npx cypress run --spec "./cypress/e2e/login.cy.js" --browser chrome`

Running autotest through Electron:

`npx cypress run --spec "./cypress/e2e/login.cy.js*" --browser electron`

Running autotest through Chromium:

`npx cypress run --spec "./cypress/e2e/login.cy.js*" --browser chromium`

Running autotest through Edge:

`npx cypress run --spec "./cypress/e2e/login.cy.js" --browser edge`

Running autotest through Firefox:

`npx cypress run --spec "./cypress/e2e/login.cy.js" --browser firefox`
