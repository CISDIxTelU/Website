/// <reference types="cypress" />

describe('detail lesson', () => {
    // course dipilih
    it('detail lesson successfully load', () => {
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
        cy.get('.grid #card0').click()
        cy.get('#title').should('have.text', 'Amet Nam porro veli')
        cy.get('#accordion').should('have.text', 'Ina Aguilar')
        cy.get('#accordion').click()
        cy.get('#dropdown').should('have.text', 'Priscilla Lee')
        cy.get('#dropdown').click()
        cy.wait(2000)
    })   

    // course dipilih tidak ada
    it('detail lesson empty', () => {
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
        cy.get('.grid #card0').click()
        cy.get('#title').should('have.text', 'Amet Nam porro veli')
        cy.get('#accordion').should('have.text', 'Ina Aguilar')
        cy.get('#accordion').click()
        cy.visit('http://localhost:3000/course/13')
        cy.get('#error').should('have.text', 'Tidak ada materi')
    })   
})