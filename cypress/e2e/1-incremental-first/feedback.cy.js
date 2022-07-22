/// <reference types="cypress" />

describe('feedback course', () => {
    // feedback dipilih
    it('feedback course successfully load', () => {
        cy.visit('http://localhost:3000/')
        cy.get('#login').click()
        cy.get('h2').should('have.text', 'Login Sebagai...')
        cy.get('#peserta').click()
        cy.get('#email')
            .type('admin')
        cy.get('#password')
            .type('password')
        cy.get('#login').click()
        cy.get('#greeting').should('have.text', 'Halo!')
        cy.get('.grid #card0').click()
        cy.get('#title').should('have.text', 'Amet Nam porro veli')
        cy.get('#accordion').should('have.text', 'Ina Aguilar')
        cy.get('#feedback').click()
        cy.get('#feedback').should('have.text', 'Feedback')
        cy.wait(2000)
        cy.screenshot('feedback')
    })   

    it('feedback course add', () => {
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
        cy.get('.grid #card1').click()
        // cy.get('#title').should('have.text', 'Nesciunt asperiores')
        cy.get('#feedback').click()
        cy.get('#feedback').should('have.text', 'Feedback')
        cy.get('textarea').type('sangat bagus dan bermanfaat')
        // cy.get('#rating').type('')
        cy.get('#mui-6').check({force: true})
        cy.get('#submit').click()
        cy.wait(2000)
        cy.get('.bg-green-300').should('have.text', 'terima kasih telah mengisi feedback')
        cy.wait(2000)
        cy.screenshot('feedback-course-add')
    })   

    it('feedback course error if already add', () => {
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
        cy.get('#feedback').click()
        cy.get('#feedback').should('have.text', 'Feedback')
        cy.get('textarea').type('sangat bagus dan bermanfaat')
        // cy.get('#rating').type('')
        cy.get('#mui-6').check({force: true})
        cy.get('#submit').click()
        cy.wait(2000)
        cy.get('.bg-red-300').should('have.text', 'Feedback already added')
        cy.wait(2000)
        cy.screenshot('feedback-course-already-add')
    })   
})