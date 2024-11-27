it("mój drugi auto test", () => {
    cy.visit("https://www.edu.goit.global/account/login")
    cy.login('testowyqa@qa.team', 'QA!automation-1')
    cy.get('.eckniwg2').click()
    cy.get('#open-navigation-menu-mobile').click()
    
    cy.get(':nth-child(8) > .next-bve2vl').click()
})