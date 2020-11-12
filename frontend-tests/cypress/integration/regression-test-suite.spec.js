/// <reference types="cypress" />

// This is a test suite
describe ('Regression test suite', function(){

    // This is pre-conditions
    it('Perform valid login', function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')
        
        //This is test case 001
        cy.get(':nth-child(1) > .btn').click()
        cy.contains('Rooms')
        cy.get('h2 > .btn').click()
        cy.contains('New Room')
        cy.get(':nth-child(1) > select').select('Single')
        cy.get(':nth-child(2) > input').type('103')
        cy.get(':nth-child(3) > input').type('1')
        cy.get('.checkbox').click()
        cy.get(':nth-child(5) > input').type('1200')
        cy.get(':nth-child(6) > label')
        cy.get(':nth-child(6) > select').select('ensuite')
        cy.get('a.btn:nth-child(2)').click()
        cy.contains('Room 103')
        cy.get('.user > .btn').click()
        cy.contains('Login')

        //Test case 001 finished
    })
        // This is pre-conditions
    it('Perform valid login', function(){
        //cy.visit('http://localhost:3000')
        //cy.title().should('include', 'Hotel')
        //cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')
        
        //This is test case 002
        cy.get(':nth-child(1) > .btn').click()
        cy.contains('Rooms')
        cy.get(':nth-child(3) > .action > img').click()


    })



})