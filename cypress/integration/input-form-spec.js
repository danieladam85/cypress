describe('Input-form', () => {
    it('opens the Rabobank website', ()  => {
        cy.visit('http://rabobank.nl')
        cy.get('#ra_searchfield')
            .type("test")
            .type({enter})


})