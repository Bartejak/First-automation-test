describe("Pierwszy test auto", () => {

    it("1 Otwieranie strony LMS", () => {
        cy.visit("https://www.edu.goit.global/account/login")
    })

    it("2 Znajdź wejście z pocztą, wpisz email i hasło", () => {
        cy.visit("https://www.edu.goit.global/account/login")
        cy.get('#user_email').type("user888@gmail.com")
        cy.get('#user_password').type("1234567890")
    })
    it("3 sprawdzenie przycisku submit", () => {
        cy.visit("https://www.edu.goit.global/account/login")
        cy.get('[type="submit"]').should("have.text", "Log in")
    })
    it("4 logowanie do strony", () => {
        cy.visit("https://www.edu.goit.global/account/login")
        cy.get('#user_email').type("user888@gmail.com")
        cy.get('#user_password').type("1234567890")
        cy.get('[type="submit"]').click()
    })
    it("5 logowanie i wylogowanie", () => {
        cy.visit("https://www.edu.goit.global/account/login")
        cy.get('#user_email').type("user888@gmail.com")
        cy.get('#user_password').type("1234567890")
        cy.get('[type="submit"]').click()
        cy.get('#open-navigation-menu-mobile').click();
        cy.get(':nth-child(10) > .next-bve2vl')

    


})
})
