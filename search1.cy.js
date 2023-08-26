describe('Search Functionality', () => {
  beforeEach(() => {
    // Visit your webpage before each test
    cy.visit('http://localhost/SuperUniverse/homepage.php'); // Update with your actual URL
  });

  it('should search for superheroes by name', () => {
    // Enter a superhero name in the search input field
    const superheroName = 'Superman'; // Replace with a valid superhero name
    cy.get('input[name="searchsn"]').type(superheroName);

    // Click the search button
    cy.get('button[name="submitsearch"]').click();

    // Verify that the search results page is displayed
    cy.url().should('include', 'http://localhost/SuperUniverse/search1.php'); // Update with your actual search results page URL

    // Verify that the search result contains the entered superhero name
    cy.get('.search-results').should('contain', superheroName);
  });

  

  // Add more test cases for other search scenarios as needed

});
