///<reference types="cypress" />

describe('Student Home Page', () => {
  beforeEach(() => {
    // Log in before each test
    cy.visit('http://localhost/UIUSAT6/studenthome.php'); // Replace with the actual URL
    cy.get('[name=username]').type('011193023'); // Replace with your student username
    cy.get('[name=password]').type('011193023'); // Replace with your student password
    cy.get('[type=submit]').click();
    cy.url().should('include', 'student_home.php'); // Replace with the actual redirection URL
  });

  it('should display student information', () => {
    cy.contains('Welcome, Student'); // Replace with the actual student name display
    cy.contains('Department:');
    cy.contains('Email:');
    cy.contains('Phone:');
    // ... Add more assertions for other displayed student information
  });

  it('should display upcoming events', () => {
    cy.contains('Upcoming Events');
    cy.get('.event-item').should('have.length', 3); // Assuming 3 events are displayed
    // ... Add more assertions to validate event details
  });

  it('should display recent notices', () => {
    cy.contains('Recent Notices');
    cy.get('.notice-item').should('have.length', 3); // Assuming 3 notices are displayed
    // ... Add more assertions to validate notice details
  });

  it('should perform a search', () => {
    cy.get('[name=searchtext]').type('Test Event');
    cy.get('[name=searchtype]').select('Events');
    cy.get('[name=submitsearch]').click();
    cy.url().should('include', 'view_all_events.php'); // Replace with the actual search results page URL
    // ... Add more assertions for the search results
  });

  // ... Add more test cases as needed
});
