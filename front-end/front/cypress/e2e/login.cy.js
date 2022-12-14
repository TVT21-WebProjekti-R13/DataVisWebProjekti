describe('click buttons to get chart pages', () => {
  it('click button to get temperaturedata page', () => {
    cy.visit('http://localhost:3000/login')
    cy.get(':nth-child(3) > a').click()
    cy.url().should('include', 'http://localhost:3000/view/temperaturedata')
  })

  it('click button to get emissionsources page', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('.MuiToolbar-root > :nth-child(7)').click()
    cy.url().should('include', 'http://localhost:3000/view/emissionsources')
  })

  it('click login button to get to login page', () => {
    cy.visit('http://localhost:3000/view/emissionsources')
    cy.get('.MuiButton-contained > a').click()
    cy.url().should('include', 'http://localhost:3000/login')
  })
})