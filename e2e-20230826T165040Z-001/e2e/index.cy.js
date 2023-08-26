///<reference types="cypress" />

describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost/UIUSAT6/index.php'); // Replace with your website URL
  });

  it('should display login form', () => {
    cy.contains('Welcome to UIUSAT');
    cy.get('input[name="username"]').should('exist');
    cy.get('input[name="pass"]').should('exist');
    cy.get('button[name="submit"]').should('exist');
  });

  it('should show error for invalid login', () => {
    cy.get('input[name="username"]').type('invaliduser');
    cy.get('input[name="pass"]').type('invalidpass');
    cy.get('button[name="submit"]').click();
    cy.contains('Oh No! Email or Password is Wrong OR You Do Not Have An Account.');
  });

  it('should successfully log in as student', () => {
    cy.get('input[name="username"]').type('011193023'); // Replace with a valid student username
    cy.get('input[name="pass"]').type('011193023'); // Replace with a valid student password
    cy.get('button[name="submit"]').click();
    cy.url().should('include', 'studenthome.php');
    cy.getCookie('PHPSESSID').should('exist'); // Ensure session cookie is set
  });

  it('should successfully log in as teacher', () => {
    cy.get('input[name="username"]').type('ASD'); // Replace with a valid teacher username
    cy.get('input[name="pass"]').type('111'); // Replace with a valid teacher password
    cy.get('button[name="submit"]').click();
    cy.url().should('include', 'teacherhome.php');
    cy.getCookie('PHPSESSID').should('exist'); // Ensure session cookie is set
  });
});
