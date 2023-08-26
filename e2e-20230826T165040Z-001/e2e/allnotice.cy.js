///<reference types="cypress" />

describe('Teacher Home Page - Create Notice', () => {
  beforeEach(() => {
    cy.visit('http://localhost/UIUSAT6/view_all_notices.php'); // Adjust the URL accordingly
    cy.get('[name=username]').type('ASD'); // Replace with your teacher username
    cy.get('[name=password]').type('111'); // Replace with your teacher password
    cy.get('[type=submit]').click();
    cy.url().should('include', 'http://localhost/UIUSAT6/teacherhome.php');
  });

  it('should navigate to create notice page', () => {
    cy.contains('Create Notice').click();
    cy.url().should('include', 'http://localhost/UIUSAT6/createnotice.php');
  });

  it('should create a notice', () => {
    cy.contains('Create Notice').click();
    cy.url().should('include', 'http://localhost/UIUSAT6/createnotice.php');

    cy.get('input[name="notice_name"]').type('Sample Notice'); // Replace with notice name
    cy.get('textarea[name="notice_content"]').type('This is a sample notice content.'); // Replace with notice content
    cy.get('input[name="notice_keywords"]').type('sample, notice, test'); // Replace with keywords
    cy.get('button[name="submit"]').click();

    cy.url().should('include', 'teacherhome.php');
    cy.contains('Sample Notice'); // Make sure the notice appears in the list
  });
});
