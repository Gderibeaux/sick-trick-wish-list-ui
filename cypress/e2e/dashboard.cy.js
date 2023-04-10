describe('dashboard', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
  it('should show us the title', () => {
    cy.contains('h1', 'Sick Trick Wish List' )
  })
  it('should show at least 3 cards', () => {
    cy.get('div[class=trick-container]')
    .children().should('have.length', 3)
  })
  it('should show at the form with the 3 buttons', () => {
    cy.get('form')
    .children().should('have.length', 3)
  })
  it('should show us that stance was selected', () => {
    cy.get('select[name="stance"]').select('switch')
    cy.get('select[name="stance"]').should('have.value', 'switch')
  
  })
  it('should show us that obstalce was selected', () => {
    cy.get('select[name="obstacle"]').select('flatground')
    cy.get('select[name="obstacle"]').should('have.value', 'flatground')
  })

  it('should show us the updated container after form submit', () => {
    cy.get('select[name="stance"]').select('switch')
    cy.get('select[name="obstacle"]').select('flatground')
    cy.get('button').click()
    cy.get('.tricks h3').last().should('have.text', 'switch')
    cy.get('.tricks p').last().should('have.text', 'flatground')
  })
})