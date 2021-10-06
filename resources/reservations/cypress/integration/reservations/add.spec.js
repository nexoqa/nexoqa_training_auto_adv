import ReservationsPage from '../../pages/ReservationsPage';

describe('example to-do app', () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('https://s2obcn.github.io/reservationList.html')
      })
    it('displays two todo items by default', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
        const expected = [
            {
                "City": "Rio de Janeiro",
                "Country": "Brazil"
            }, {
                "Country": "USA",
                "City": "Los Angeles"
            }
        ]

        ReservationsPage.addReservation()
     
        cy.get('#tblList').find('tbody>tr').first().within(() => {
            cy.get('td').eq(2).contains('h')
        })
    })
})