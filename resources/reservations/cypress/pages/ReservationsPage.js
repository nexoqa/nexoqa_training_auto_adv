class ReservationsPage {
    visit () {
      cy.visit('/')
    }
  
    addReservation () {
        cy.get('#btnAdd').click()
        cy.get('#txtName').type("h")
        cy.get('#txtPhone').type("88")
        cy.get('#txtEmail').type("ho@es.es")
        cy.get('#txtDate').type("2021-07-09")
        cy.get('#txtNumber').type("2", {force: true})
        cy.get('#txtSearch').type("12:00")
        cy.get('#txtColor').type("#4e2727")
        cy.get('#btnSave').click()
    }

}
export default new ReservationsPage();
