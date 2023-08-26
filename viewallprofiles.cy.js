///<reference types="cypress" />


describe('View All Profiles Page', () => {
  beforeEach(() => {
    // Log in as an authenticated user before each test
    cy.visit('http://localhost/UIUSAT6/view_all_profiles.php'); // Replace with the actual URL
    cy.get('[name=username]').type('011193023'); // Replace with your username
    cy.get('[name=password]').type('011193023'); // Replace with your password
    cy.get('[type=submit]').click();
    cy.url().should('include', 'student_home.php'); // Replace with the actual redirection URL
  });

  it('should navigate to view all profiles', () => {
    cy.get('[name=searchtext]').type('John'); // Replace with search text
    cy.get('[name=searchtype]').select('Students'); // Replace with search type
    cy.get('[name=submitsearch]').click();
    cy.url().should('include', 'view_all_profiles.php'); // Replace with the actual URL
  });

  it('should display search results', () => {
    cy.get('.profile-item').should('have.length', 3); // Assuming 3 search results
    // ... Add more assertions to validate displayed profiles
  });

  it('should navigate to a profile', () => {
    cy.get('.profile-item').first().click(); // Click on the first profile
    cy.url().should('include', 'profile_details.php'); // Replace with the actual profile details URL
    // ... Add more assertions to validate the displayed profile details
  });

  // ... Add more test cases as needed
});
