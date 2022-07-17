/// <reference types="cypress" />

describe('detail course', () => {
    // course jika dipilih
    it('detail course successfully', () => {
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
        cy.wait(2000)
        cy.screenshot('detail-course')
    })   

    //  detail course is empty
    it('detail course empty', () => {
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
        cy.visit('http://localhost:3000/course/14')
        cy.get('#error').should('have.text', 'Tidak ada materi')
        cy.wait(2000)
        cy.screenshot('detail course empty')
    })   
})