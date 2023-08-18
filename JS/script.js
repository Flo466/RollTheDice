const canvas = document.getElementById('dice');
const ctx = canvas.getContext('2d');

// Initialize game state variables
let activePlayer = 1;
let playerOneScore = 0;
let playerTwoScore = 0;
let playerOneCurrentScore = 0;
let playerTwoCurrentScore = 0;

// Create new image for dice
const image = new Image();
image.src = "./Images/default_dice.png";

// Load image and draw on canvas
image.onload = () => {
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
};

document.addEventListener('DOMContentLoaded', function() {

    // Get DOM elements
    const rollButton = document.getElementById('rollButton');
    const newGameButton = document.getElementById('newGameButton');
    const diceResult = document.getElementById('diceResult');
    const holdButton = document.getElementById('hold-btn');


    // Event listener for roll button
    rollButton.addEventListener('click', function() {
        const randomNumber = rollDice();

        if (randomNumber !== 1) {
            // Update scores based on active player
            (activePlayer === 1) ? playerOneScore += randomNumber : playerTwoScore += randomNumber;
        } else {
            // Reset scores and switch players when a 1 is rolled
            resetScore(activePlayer === 1 ? '.score-player-one' : '.score-player-two');
            (activePlayer === 1) ? playerOneScore = 0 : playerTwoScore = 0;
            activePlayer = switchPlayers(activePlayer);
        }

        diceResult.textContent = randomNumber;
        updateScores(playerOneScore, playerTwoScore, playerOneCurrentScore, playerTwoCurrentScore);
    });

    // Event listener for hold button
    holdButton.addEventListener('click', function() {
        // Add current score to total and reset current score for active player
        if (activePlayer === 1) {
            playerOneCurrentScore += playerOneScore;
            playerOneScore = 0;
            resetScore('.score-player-one');
        } else {
            playerTwoCurrentScore += playerTwoScore;
            playerTwoScore = 0;
            resetScore('.score-player-two');
        }

        // Switch players and update displayed scores
        activePlayer = switchPlayers(activePlayer);
        updateScores(playerOneScore, playerTwoScore, playerOneCurrentScore, playerTwoCurrentScore);
    });

    // Event listener for new game button
    newGameButton.addEventListener('click', function() {
        // Reset all scores and displayed scores
        playerOneScore = 0;
        playerTwoScore = 0;
        playerOneCurrentScore = 0;
        playerTwoCurrentScore = 0;
        resetScore('.score');
    });
});
