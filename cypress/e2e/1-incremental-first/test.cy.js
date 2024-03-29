/// <reference types="cypress" />

describe('test course', () => {
    // pretest dipilih
    it('pre test course', () => {
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
        cy.get('#preTest').click()
        cy.get('.container #card').should('have.length', 2)
        cy.wait(2000)
        cy.screenshot('pre-test')
    })

    // pretest description
    it('pre test description answer', () => {
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
        cy.get('#preTest').click()
        cy.get('#explain').should('have.text', 'Sesi Pembahasan')
        // pretest description incorrect
        cy.get('div').should('have.class', 'border-red-400')
        cy.wait(2000)
        cy.screenshot('pre-test-description')
    })

    // pretest show score
    it('pre test show score', () => {
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
        cy.get('#preTest').click()
        cy.get('#explain').should('have.text', 'Sesi Pembahasan')
        cy.wait(2000)
        cy.get('#submit').click()
        cy.get('#score').should('have.text', 'Nilai anda')
        cy.wait(2000)
        cy.screenshot('pre-test-score')

    })

    // posttest dipilih
    it('post test course', () => {
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
        cy.get('#postTest').click()
        cy.get('.container #card').should('have.length', 2)
        cy.wait(2000)
        cy.screenshot('post-test')
    })

    // posttest description
    it('post test description answer', () => {
        cy.visit('http://localhost:3000/')
        cy.get('#login').click()
        cy.get('h2').should('have.text', 'Login Sebagai...')
        cy.get('#peserta').click()
        cy.get('#email')
            .type('trainer')
        cy.get('#password')
            .type('password')
        cy.get('#login').click()
        cy.get('#greeting').should('have.text', 'Halo!')
        cy.get('.grid #card0').click()
        cy.get('#title').should('have.text', 'Amet Nam porro veli')
        cy.get('#postTest').click()
        cy.get('#explain').should('have.text', 'Sesi Pembahasan')
        // posttest description incorrect
        cy.get('div').should('have.class', 'border-red-400')
        // posttest description correct
        cy.get('div').should('have.class', 'border-green-400')
        cy.wait(2000)
        cy.screenshot('post-test-description')
    })

    // posttest show score
    it('post test show score', () => {
        cy.visit('http://localhost:3000/')
        cy.get('#login').click()
        cy.get('h2').should('have.text', 'Login Sebagai...')
        cy.get('#peserta').click()
        cy.get('#email')
            .type('trainer')
        cy.get('#password')
            .type('password')
        cy.get('#login').click()
        cy.get('#greeting').should('have.text', 'Halo!')
        cy.get('.grid #card0').click()
        cy.get('#title').should('have.text', 'Amet Nam porro veli')
        cy.get('#postTest').click()
        cy.get('#explain').should('have.text', 'Sesi Pembahasan')
        cy.wait(2000)
        cy.get('#submit').click()
        cy.get('#score').should('have.text', 'Nilai anda')
        cy.wait(2000)
        cy.screenshot('post-test-score')
    })
})