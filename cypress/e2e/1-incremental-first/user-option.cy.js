/// <reference types="cypress" />

describe('login option', () => {
    it('loads successfully login option', () => {
        cy.visit('http://localhost:3000/login-option')
        cy.get('h2').should('have.text', 'Login Sebagai...')
        cy.wait(2000)
        cy.screenshot('login-option')
    })

    it('click peserta in login option', () => {
        cy.visit('http://localhost:3000/login-option')
        cy.get('#peserta').click()
        cy.wait(2000)
        cy.screenshot('login-option-peserta')
    })
})