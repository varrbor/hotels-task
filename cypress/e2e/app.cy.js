describe('Hotels task', () => {
  it('test case 1: should calculate results for 3 free premium rooms and 3 free econom rooms', () => {
    cy.visit('http://localhost:3000/')

    cy.get('.input-premium').clear().type(3)

    cy.get('.input-econom').clear().type(3)

    cy.get('button').click()

    cy.get('.res-premium-occupied').contains('3').should('be.visible')
    cy.get('.res-econom-occupied').contains('3').should('be.visible')
    cy.get('.res-premium-profit').contains('738').should('be.visible')
    cy.get('.res-econom-profit').contains('167').should('be.visible')
  })

  it('test case 2: should calculate results for 7 free premium rooms and 5 free econom rooms', () => {
    cy.visit('http://localhost:3000/')

    cy.get('.input-premium').clear().type(7)

    cy.get('.input-econom').clear().type(5)

    cy.get('button').click()

    cy.get('.res-premium-occupied').contains('6').should('be.visible')
    cy.get('.res-econom-occupied').contains('4').should('be.visible')
    cy.get('.res-premium-profit').contains('1054').should('be.visible')
    cy.get('.res-econom-profit').contains('189').should('be.visible')
  })

  it('test case 3: should calculate results for 2 free premium rooms and 7 free econom rooms', () => {
    cy.visit('http://localhost:3000/')

    cy.get('.input-premium').clear().type(2)

    cy.get('.input-econom').clear().type(7)

    cy.get('button').click()

    cy.get('.res-premium-occupied').contains('2').should('be.visible')
    cy.get('.res-econom-occupied').contains('4').should('be.visible')
    cy.get('.res-premium-profit').contains('583').should('be.visible')
    cy.get('.res-econom-profit').contains('189').should('be.visible')
  })

  it('test case 4: should calculate results for 7 free premium rooms and 1 free econom rooms', () => {
    cy.visit('http://localhost:3000/')

    cy.get('.input-premium').clear().type(7)

    cy.get('.input-econom').clear().type(1)

    cy.get('button').click()

    cy.get('.res-premium-occupied').contains('7').should('be.visible')
    cy.get('.res-econom-occupied').contains('1').should('be.visible')
    cy.get('.res-premium-profit').contains('1153').should('be.visible')
    cy.get('.res-econom-profit').contains('45').should('be.visible')
  })
})
