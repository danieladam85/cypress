describe('Input-form', () => {
    it('opens the Rabobank website', () => {
        cy.visit('http://rabobank.nl')

    })
    it('searches for test', () => {
        cy.get('#ra_searchfield')
            .type("test")
            .type("{enter}")
        cy.get('#cookiewall_popup .primary-button')
            .click()
    })
    it('searches for adviesplanner', () => {
        cy.get('#cookiewall_popup .primary-button')
            .click()
        cy.get('#zoek')
            .clear()
            .type("adviesplanner")
            .type("{enter}")

    })

})