// cypress/integration/hangman.spec.js

describe('Hangman Game', () => {
  beforeEach(() => {
    // Visit the Hangman game page before each test
    cy.visit('http://localhost/SuperUniverse/game.php'); // Update with your actual URL
  });

  it('should play and win the Hangman game', () => {
    // Define a word to guess (for example, "BATMAN")
    const wordToGuess = "BATMAN";

    // Play the Hangman game by guessing each letter in the word
    cy.get('button[name="kp"]').each(($button) => {
      const letter = $button.text();
      cy.get('button[name="kp"]').contains(letter).click();
      cy.get('.hangman-image img').should('have.attr', 'src', '/snake/hangman_nohead.png'); // Check if image updates

      if (wordToGuess.includes(letter)) {
        cy.get('.hangman-guess').should('contain', letter);
      }
    });

    // Verify that the game is marked as complete and the player won
    cy.get('h1').should('contain', 'GAME COMPLETE');
    cy.get('p').should('contain', 'You Won! HURRAY! :)');

    // Verify that points are added to the user's profile
    cy.request('http://localhost/SuperUniverse/profile3.php') // Replace with the actual profile page URL
      .its('body')
      .should('contain', 'Points: 32'); // Update with the expected points value after winning

    // You may need to adjust the URL and points verification based on your actual implementation
  });
});
