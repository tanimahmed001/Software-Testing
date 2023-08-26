///<reference types="cypress" />

describe('Registration', () => {
  it('should successfully register a student', () => {
    cy.visit('http://localhost/UIUSAT6/registration.php'); // Replace with the actual URL

    // Fill in the registration form
    cy.get('[name=student-id]').type('011193023'); // Replace with desired student ID
    cy.get('[name=email]').type('nirjonaakter@gmail.com');
    cy.get('[name=full-name]').type('nirjona');
    cy.get('[name=phone]').type('01995348605');
    cy.get('[name=dept]').type('BSCSE');
    cy.get('[name=gender]').select('Female');
    cy.get('[name=dob]').type('2000-03-06');
    cy.get('[name=password]').type('011193023');
    cy.get('[name=confirm-pass]').type('011193023');
    cy.get('[name=submit]').click();

    // Assert successful registration
    cy.contains('Registration is complete');
    cy.url().should('include', 'index.php'); // Replace with the actual redirection URL
  });

  it('should successfully register a verifier', () => {
    cy.visit('your_registration_page_url'); // Replace with the actual URL

    // Fill in the registration form for a verifier
    cy.get('[name=student-id]').type('987654321'); // Replace with desired verifier ID
    cy.get('[name=email]').type('verifier@example.com');
    cy.get('[name=full-name]').type('Jane Smith');
    cy.get('[name=phone]').type('9876543210');
    cy.get('[name=dept]').type('Engineering');
    cy.get('[name=gender]').select('Female');
    cy.get('[name=dob]').type('1990-05-15');
    cy.get('[name=designation]').type('Senior Verifier');
    cy.get('[name=password]').type('password456');
    cy.get('[name=confirm-pass]').type('password456');
    cy.get('[name=submit]').click();

    // Assert successful registration
    cy.contains('Registration is complete');
    cy.url().should('include', 'index.php'); // Replace with the actual redirection URL
  });

  it('should show error for mismatching passwords', () => {
    cy.visit('http://localhost/UIUSAT6/registration.php'); // Replace with the actual URL

    // Fill in the registration form with mismatching passwords
    cy.get('[name=student-id]').type('111111111'); // Replace with desired student ID
    cy.get('[name=email]').type('mismatch@example.com');
    cy.get('[name=full-name]').type('Mismatch User');
    cy.get('[name=phone]').type('1111111111');
    cy.get('[name=dept]').type('Physics');
    cy.get('[name=gender]').select('Other');
    cy.get('[name=dob]').type('1988-10-20');
    cy.get('[name=password]').type('mismatch123');
    cy.get('[name=confirm-pass]').type('mismatch456'); // Mismatched password
    cy.get('[name=submit]').click();

    // Assert password mismatch error
    cy.contains('Passwords did not match.');
  });
});
