///<reference types="cypress" />

describe('Registration Process', () => {
  beforeEach(() => {
    // Visit the registration page
    cy.visit('http://localhost/SuperUniverse/register.php');
  });

  it('should successfully register a user', () => {
    // Fill in registration form
    cy.get('input[name="username"]').type('121212121');
    cy.get('input[name="email"]').type('umio@gmail.com');
    cy.get('input[name="password"]').type('123');
    cy.get('input[name="cpassword"]').type('123');

    // Submit the registration form
    cy.get('button[name="submit"]').click();

    // Verify that registration is successful
    cy.get('script').should('contain', 'Your registration is complete');
  });

  it('should show an error when registering with an existing email', () => {
    // Fill in registration form with an existing email
    cy.get('input[name="username"]').type('111111111');
    cy.get('input[name="email"]').type('a@b.c');
    cy.get('input[name="password"]').type('123');
    cy.get('input[name="cpassword"]').type('123');

    // Submit the registration form
    cy.get('button[name="submit"]').click();

    // Verify that an error message is displayed
    cy.get('script').should('contain', 'This email already exists');
  });

  it('should show an error when passwords do not match', () => {
    // Fill in registration form with mismatched passwords
    cy.get('input[name="username"]').type('111111111');
    cy.get('input[name="email"]').type('q@c.c');
    cy.get('input[name="password"]').type('123');
    cy.get('input[name="cpassword"]').type('mismatchedpassword');

    // Submit the registration form
    cy.get('button[name="submit"]').click();

    // Verify that an error message is displayed
    cy.get('script').should('contain', 'Password does not match');
  });
});
