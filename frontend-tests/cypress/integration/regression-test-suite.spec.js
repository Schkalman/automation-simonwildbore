/// <reference types="cypress" />

// This is a test suite
describe ('Regression test suite', function(){

    // This is pre-conditions
    it('Perform valid login and create new room', function(){
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
    it('Perform valid login and delete room', function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')
        
        //This is test case 002
        cy.get(':nth-child(1) > .btn').click()
        cy.contains('Rooms')
        cy.get(':nth-child(3) > .action > img').click()
        cy.get('.menu > :nth-child(2)').click()
        cy.contains('Rooms')
        cy.get('.user > .btn').click()
        cy.contains('Login')

        //Test case 002 finished
        


    })

        // This is pre-conditions
    it('Perform valid login and create new client', function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')

        //This is test case 003
        cy.get('.blocks > :nth-child(2) > .btn').click()
        cy.contains('Clients')
        cy.get('h2 > .btn').click()
        cy.contains('New Client')
        cy.get(':nth-child(1) > input').type('Charlie Lindblom')
        cy.get(':nth-child(2) > input').type('charlie.lindblom@email.com')
        cy.get(':nth-child(3) > input').type('0700000003')
        cy.get('a.btn:nth-child(2)').click()
        cy.contains('Charlie Lindblom')
        cy.get('.user > .btn').click()
        cy.contains('Login')

        //Test case 003 finished

    })

    // This is pre-conditions
    it('Perform valid login and delete client', function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')

        //This is test case 004
        cy.get('.blocks > :nth-child(2) > .btn').click()
        cy.contains('Clients')
        cy.get(':nth-child(3) > .action > img').click()
        cy.get('.menu > :nth-child(2)').click()
        cy.contains('Clients')
        cy.get('.user > .btn').click()
        cy.contains('Login')

        //Test case 4 finished

    })


    // This is pre-conditions
    it('Perform valid login and create new reservation', function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')


        //This is test case 005
        cy.get(':nth-child(4) > .btn').click()
        cy.contains('Reservations')
        cy.get('h2 > .btn').click()
        cy.contains('New Reservation')
        cy.get(':nth-child(1) > input').type('2020-11-20')
        cy.get(':nth-child(2) > input').type('2020-11-21')
        cy.get(':nth-child(3) > select').select('Jonas Hellman (#1)')
        cy.get(':nth-child(4) > select').select('Floor 1, Room 101')
        cy.get(':nth-child(5) > select').select('ID: 1')
        cy.get('a.btn:nth-child(2)').click()
        cy.contains('2020-11-20')
        cy.get('.user > .btn').click()
        cy.contains('Login')

        //Test case 005 finished

    })


    // This is pre-conditions
    it('Perform valid login and delete reservation', function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')


        //This is test case 006
        cy.get(':nth-child(4) > .btn').click()
        cy.contains('Reservations')
        cy.get(':nth-child(2) > .action > img').click()
        cy.get('.menu > a:nth-child(2)').click()
        cy.contains('Reservations')
        cy.get('.user > .btn').click()
        cy.contains('Login')


        //Test case 006 finished


    })



    // This is pre-conditions
    it('Perform valid login and create new bill', function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')


        //This is test case 007
        cy.get(':nth-child(3) > .btn').click()
        cy.contains('Bills')
        cy.get('h2 > .btn').click()
        cy.contains('New Bill')
        cy.get('input').type('1200')
        cy.get('.checkbox').click()
        cy.get('a.btn:nth-child(2)').click()
        cy.contains('Bills')
        cy.get('.user > .btn').click()
        cy.contains('Login')


        //Test case 007 finished




    })



// This is pre-conditions
    it('Perform valid login and delete bill', function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')


        //This is test case 008
        cy.get(':nth-child(3) > .btn').click()
        cy.contains('Bills')
        cy.get(':nth-child(2) > .action > img').click()
        cy.get('.menu > :nth-child(2)').click()
        cy.contains('Bills')
        cy.get('.user > .btn').click()
        cy.contains('Login')


        //Test case 008 finished






    


        

    
    })


})