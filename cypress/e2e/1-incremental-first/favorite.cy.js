/// <reference types="cypress" />

describe('favorite', () => {
    // favorite sudah berhasil
    it('favorite successfully', () => {
        cy.viewport(1920, 1080)
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
        cy.get('#favorite').click()
        cy.get('h1').should('have.text', 'Favorit')
        cy.wait(2000)
        cy.screenshot('favorite')
    })
    
    // favorite jika tidak kosong
    it('favorite data not empty', () => {
        cy.viewport(1920, 1080)
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
        cy.get('#favorite').click()
        cy.get('#title').should('have.text', 'Priscilla Lee')
    })

    // favorite jika kosong
    it('favorite done data empty', () => {
        cy.viewport(1920, 1080)
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
        cy.get('#favorite').click()
        cy.get('#errorDone').should('have.text', 'Tidak ada materi favorit')
        cy.wait(2000)
        cy.screenshot('favorite-empty')
    })
})