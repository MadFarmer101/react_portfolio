describe('User can see list of education and job experience', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
      cy.get('#about-tab').click();
    })
  
    it('displays info', () => {
      cy.get('#info-1').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'Info');
        cy.get('.description').should('contain', 'Janko Radakovic');
      })
    });
  
    it('displays first education card', () => {
      cy.get('#info-2').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'Education');
        cy.get('.description').should('contain', 'Degree in Economics at Vern Business School in Zagreb, Croatia.');
      })
    });

    it('displays second education card', () => {
        cy.get('#info-3').within(() => {
          cy.get(('.image')).should('exist');
          cy.get('.ui.header').should('contain', 'Coding Boot Camp');
          cy.get('.description').should('contain', "Learnig to code at Craft Academy in Stockholm, Sweden.");
        })
      });
  
    it('displays first job experience', () => {
      cy.get('#info-4').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'BestDeal');
        cy.get('.description').should('contain', "Created a site for online shopping");
      })
    }); 

    it('displays second job experience', () => {
        cy.get('#info-5').within(() => {
          cy.get(('.image')).should('exist');
          cy.get('.ui.header').should('contain', 'Casino Dealer');
          cy.get('.description').should('contain', "Worked as a Casino Dealer on a Cruise Ship for Carnival Cruise Line");
        })
      });

      it('displays third job experience', () => {
        cy.get('#info-6').within(() => {
          cy.get(('.image')).should('exist');
          cy.get('.ui.header').should('contain', 'Assistant Casino Manger');
          cy.get('.description').should('contain', "Worked as a Assistant Manger in Casino Grand Admiral, Zadar, Croatia");
        })
      });

      it('displays fourth job experience', () => {
        cy.get('#info-7').within(() => {
          cy.get(('.image')).should('exist');
          cy.get('.ui.header').should('contain', 'Casino Dealer');
          cy.get('.description').should('contain', "Working as a Casino Dealer at Casino Cosmopol, Stockholm, Sweden");
        })
      });
      
      it('displays hobbies', () => {
        cy.get('#info-8').within(() => {
          cy.get(('.image')).should('exist');
          cy.get('.ui.header').should('contain', 'Hobbies');
          cy.get('.description').should('contain', "Fantasy");
        })
      });

      it('displays interesting facts', () => {
        cy.get('#info-9').within(() => {
          cy.get(('.image')).should('exist');
          cy.get('.ui.header').should('contain', 'Interesting Facts');
          cy.get('.description').should('contain', "Orange belt in Judo");
        })
      });
  });