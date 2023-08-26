///<reference types="cypress" />
describe('View Players', () => {
  beforeEach(() => {
    // Visit the view players page
    cy.visit('http://localhost/SuperUniverse/players.php');
  });

  it('should display a list of users', () => {
    // Verify that at least one user is displayed
    cy.get('.options a').should('have.length.gt', 0);
  });

  it('should navigate to a user profile page when clicking on a user', () => {
    // Click on the first user in the list
    cy.get('.options a').first().click();

    // Verify that the URL changes to the user's profile page
    cy.url().should('include', 'profile4.php');
  });
});