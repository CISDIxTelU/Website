/// <reference types="cypress" />

describe('login', () => {
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
        cy.get('#placeholder').click()
        cy.get('button').should('have.text', 'Buka Profil Diri')
    })   
})