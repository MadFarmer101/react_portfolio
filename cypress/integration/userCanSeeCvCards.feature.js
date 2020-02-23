describe('User can see list of education and job experience', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
      cy.get('#cv-tab').click();
    })
  
    it('displays info', () => {
      cy.get('#info-1').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'Info');
        cy.get('.description').should('contain', 'Janko Radakovic');
        cy.get('.description').should('contain', 'Male');
        cy.get('.description').should('contain', '03/05/1984');
        cy.get('.description').should('contain', 'Osijek, Croatia');
      })
    });
  
    it('displays first education card', () => {
      cy.get('#info-2').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'Education');
        cy.get('.date').should('contain', '2003. - 2008.');
        cy.get('.description').should('contain', "Bachelor's degree in Economics");
        cy.get('.description').should('contain', "Vern' Business School in Zagreb, Croatia");
      })
    });

    it('displays second education card', () => {
        cy.get('#info-3').within(() => {
          cy.get(('.image')).should('exist');
          cy.get('.ui.header').should('contain', 'Craft Academy');
          cy.get('.date').should('contain', 'Feb 2020. - May 2020.');
          cy.get('.description').should('contain', "Coding Boot Camp");
          cy.get('.description').should('contain', "Programming languages: Ruby and JavaScript");
          cy.get('.description').should('contain', "Framework: Ruby on Rails");
          cy.get('.description').should('contain', "Library: React");
        })
      });
  
    it('displays first job experience', () => {
      cy.get('#info-4').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'BestDeal.hr');
        cy.get('.date').should('contain', '2010. - 2012.');
        cy.get('.description').should('contain', "Manager of a Startup");
        cy.get('.description').should('contain', "A website for online shopping");
      })
    }); 

    it('displays second job experience', () => {
        cy.get('#info-5').within(() => {
          cy.get(('.image')).should('exist');
          cy.get('.ui.header').should('contain', 'Carnival Cruise Line');
          cy.get('.date').should('contain', '2012. - 2017.');
          cy.get('.description').should('contain', "Casino Dealer");
          cy.get('.description').should('contain', "Miami, FL, USA");
          cy.get('.description').should('contain', "Traveled the globe");
          
        })
      });

      it('displays third job experience', () => {
        cy.get('#info-6').within(() => {
          cy.get(('.image')).should('exist');
          cy.get('.ui.header').should('contain', "Casino Admiral");
          cy.get('.date').should('contain', '2017. - 2018.');
          cy.get('.description').should('contain', "Assistant Casino Manager");
          cy.get('.description').should('contain', "Zadar, Croatia");
        })
      });

      it('displays fourth job experience', () => {
        cy.get('#info-7').within(() => {
          cy.get(('.image')).should('exist');
          cy.get('.ui.header').should('contain', "Casino Cosmopol");
          cy.get('.date').should('contain', '2018. - ongoing');
          cy.get('.description').should('contain', "Casino Dealer");
          cy.get('.description').should('contain', "Stockholm, Sweden");
        })
      });
      
      it('displays hobbies', () => {
        cy.get('#info-8').within(() => {
          cy.get(('.image')).should('exist');
          cy.get('.ui.header').should('contain', 'Hobbies');
          cy.get('.description').should('contain', "Travelling");
          cy.get('.description').should('contain', "Cooking");
          cy.get('.description').should('contain', "Investment banking");
          cy.get('.description').should('contain', "NBA");
          cy.get('.description').should('contain', "Fantasy Premier League");
        })
      });

      it('displays interesting facts', () => {
        cy.get('#info-9').within(() => {
          cy.get(('.image')).should('exist');
          cy.get('.ui.header').should('contain', 'Interesting Facts');
          cy.get('.description').should('contain', "Orange belt in Judo");
          cy.get('.description').should('contain', "Was a professional Bridge player");
          cy.get('.description').should('contain', "Won a CSC Award for a best Advertising Campaign in 2009.");
        })
      });
  });