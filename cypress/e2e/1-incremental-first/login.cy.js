/// <reference types="cypress" />

describe('login', () => {
    // login load page
    it('loads successfully login', () => {
        cy.visit('http://localhost:3000/')
        cy.get('#login').click()
        cy.get('h2').should('have.text', 'Login Sebagai...')
        cy.get('#peserta').click()
        cy.wait(2000)
        cy.screenshot('login')
    })

    // login tidak berhasil
    it('login not successfully', () => {
        cy.visit('http://localhost:3000/')
        cy.get('#login').click()
        cy.get('h2').should('have.text', 'Login Sebagai...')
        cy.get('#peserta').click()
        cy.get('#email')
            .type('kaders')
        cy.get('#password')
            .type('password')
        cy.get('#login').click()
        cy.get('#message').should('have.text', 'Invalid login details')
        cy.wait(2000)
        cy.screenshot('login-not-success')
    })

    // login berhasil
    it('login successfully', () => {
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
        cy.wait(2000)
        cy.screenshot('login-success')
    })   
})