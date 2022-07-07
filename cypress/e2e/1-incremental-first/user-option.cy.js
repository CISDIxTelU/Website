/// <reference types="cypress" />

describe('login option', () => {
    it('loads successfully login option', () => {
        cy.visit('http://localhost:3000/login-option')
        cy.get('h2').should('have.text', 'Login Sebagai...')
    })

    it('click peserta in login option', () => {
        cy.visit('http://localhost:3000/login-option')
        cy.get('#peserta').click()
    })
})