/// <reference types="cypress" />

describe('courses', () => {
    // course tidak kosong
    it('courses render card', () => {
        cy.visit('http://localhost:3000/')
        cy.get('#login').click()
        cy.get('h2').should('have.text', 'Login Sebagai...')
        cy.get('#peserta').click()
        cy.get('#email')
            .type('kader')
        cy.get('#password')
            .type('password')
        cy.get('#login').click()
        cy.get('#greeting').should('have.text', 'Halo!')
        cy.get('.grid #card').should('have.length', 3)
        cy.wait(2000)
        cy.screenshot('courses')
    })   
})