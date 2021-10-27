Cypress.Commands.add('interceptGraphQlCalls', () => {
  cy.intercept('POST', "https://salary-sight-be.herokuapp.com/graphql", (req) => {
    if (req.body.operationName === 'posts') {
      req.reply({
        fixture: 'cards.json',
        headers: {
          'access-control-allow-origin': '*'
        }
      })
    }
    if (req.body.operationName === 'input') {
      req.reply({
        fixture: 'postSalary.json',
        headers: {
          'access-control-allow-origin': '*'
        }
      })
    }
  })
})
