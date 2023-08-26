// cypress/integration/login.spec.js

// This test script assumes your application is running locally on port 3000.
///<reference types="cypress" />
describe('Login', () => {
  beforeEach(() => {
    // Visit the login page before each test
    cy.visit('http://localhost/SuperUniverse/index.php'); // Update with your actual URL
  });

  it('should log in with valid credentials', () => {
    // Fill in the email and password fields and submit the form
    cy.get('input[name="email"]').type('umi@gmail.com'); // Replace with a valid email
    cy.get('input[name="password"]').type(1111); // Replace with a valid password
    cy.get('button[name="submit"]').click();

    // Check if the user is redirected to the homepage after login
    cy.url().should('eq', 'http://localhost/SuperUniverse/homepage.php'); // Update with the actual URL after successful login
  });

  it('should display an error message for invalid credentials', () => {
    // Fill in the email and password fields with invalid data and submit the form
    cy.get('input[name="email"]').type('cdbd@gmail.com'); // Replace with an invalid email
    cy.get('input[name="password"]').type(2324); // Replace with an invalid password
    cy.get('button[name="submit"]').click();

    // Check if an error message is displayed
    cy.get('script')
      .should('contain.text', "Oh No! Email or Password is Wrong OR You Do Not Have An Account.");
  });
});
