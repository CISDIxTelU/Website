/// <reference types="cypress" />

describe('profile', () => {
    it('profile successfully', () => {
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
        cy.get('#placeholder').click()
        cy.visit('http://localhost:3000/profile')
        cy.get('.text-2xl').should('have.text', 'Profile')
    })   
})