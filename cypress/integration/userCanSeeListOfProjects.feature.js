describe('User can see list of projects', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
        cy.get('#projects-tab').click();
    });

    it('displays first project', () => {
        cy.get('#project-1').within(() => {
            cy.get(('.image')).should('exist');
            cy.get('.ui.header').should('contain', 'BMI Calculator');
            cy.get('.description').should('contain', 'This was my first application. Please do not sue me!');
        })
    });

    it('displays second project', () => {
        cy.get('#project-2').within(() => {
            cy.get(('.image')).should('exist');
            cy.get('.ui.header').should('contain', 'Address Book');
            cy.get('.description').should('contain', 'You have a lot of contacts and nowhere to put them. Here is the solution...(Just be careful not to burn your bridges, because a contact cannot be deleted)');
        })
    });

    it('displays third project', () => {
        cy.get('#project-3').within(() => {
            cy.get(('.image')).should('exist');
            cy.get('.ui.header').should('contain', 'ATM App');
            cy.get('.description').should('contain', 'Need some cash? Or even better, wanna deposit some cash into my super secure ATM? Please, be my guest. That is why it is here...');
        })
    });
});