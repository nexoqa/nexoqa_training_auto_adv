// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const getTable = (subject, options = {}) => {
    if (subject.get().length > 1) throw new Error(`Selector "${subject.selector}" returned more than 1 element.`)

    const tableElement = subject.get()[0]
    let headers = [...tableElement.querySelectorAll('thead th')].map(e => e.textContent)

    // transform rows into array of array of strings for each td
    const rows = [...tableElement.querySelectorAll('tbody tr')].map(row => {
        return [...row.querySelectorAll('td')].map(e => e.textContent)
    })
    
    // return structured object from headers and rows variables
    return rows.map(row =>
        row.reduce((acc, curr, idx) => {
            if (options.onlyColumns && !options.onlyColumns.includes(headers[idx])) {
                // dont include columns that are not present in onlyColumns
                return { ...acc }
            }
            return { ...acc, [headers[idx]]: curr }
        }, {})
    )
}

Cypress.Commands.add('getTable', { prevSubject: true }, getTable)