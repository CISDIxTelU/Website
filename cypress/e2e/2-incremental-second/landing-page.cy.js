/// <reference types="cypress" />

describe('landing page', () => {
    it('loads successfully landing page', () => {
        cy.visit('http://localhost:3000/')
        cy.get('.grid #card').should('have.length', 3)
    })
})