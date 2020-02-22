describe('User can navigate the app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    })
  
    describe('to CV tab and it', () => {
      beforeEach(() => {
        cy.get('#about-tab').click();
      });
  
      it('displays CV header', () => {
        cy.get('#cvcard-header').should('contain', 'Curriculum Vitae');
      });

      it('displays an image in a CV header', () => {
        cy.get('.image').should('exist');
      });
  
      it('displays component name in url', () => {
        cy.url().should("contain", "cv");
      });
  
      it('does not display My Projects header ', () => {
        cy.get('#projects-header').should('not.exist');
      });
  
      it('does not display Hello world', () => {
        cy.get('#hello').should('not.exist');
      });
    });
  
    describe('to My Projects tab and it',() => {
      beforeEach(() => {
        cy.get('#projects-tab').click();
      });
  
      it('displays My Projects header', () => {
        cy.get('#projects-header').should('contain', 'My Projects');
      });
  
      it('displays component name in url', () => {
        cy.url().should("contain", "projects");
      })
  
      it('does not display CV header ', () => {
        cy.get('#cvcard-header').should('not.exist');
      });
  
      it('does not display main page', () => {
        cy.get('#hello').should('not.exist');
      });
    });
  
    describe('back to My Portfolio/Hello tab and it',() => {
      beforeEach(() => {
        cy.get('#about-tab').click();
        cy.get('#header').click();
      });
  
      it('Clicks the buttons', () => {
        cy.get('#hello').click()
      });
  
      it('displays correct url', () => {
        cy.url()
          .should("not.contain", "projects")
          .and("not.contain", "cv");    
      })
  
      it('does not display CV header ', () => {
        cy.get('#cvcards-header').should('not.exist');
      });
  
      it('does not display My Projects header', () => {
        cy.get('#projects-header').should('not.exist');
      });
    });
  });
