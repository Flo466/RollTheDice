// Initialize game state variables
let activePlayer = 1;
let playerOneScore = 0;
let playerTwoScore = 0;
let playerOneCurrentScore = 0;
let playerTwoCurrentScore = 0;

// Dices paths
const diceImages = {
    1: './Images/dado_1.svg',
    2: './Images/dado_2.svg',
    3: './Images/dado_3.svg',
    4: './Images/dado_4.svg',
    5: './Images/dado_5.svg',
    6: './Images/dado_6.svg'
};


const canvas = document.getElementById('dice');
const ctx = canvas.getContext('2d');
const defaultDiceImage = new Image();
defaultDiceImage.src = diceImages[1];

// Display image dice image
function displayDiceImage(diceNumber) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const diceImage = new Image();
    diceImage.src = diceImages[diceNumber];
    
    diceImage.onload = function() {
        ctx.drawImage(diceImage, 0, 0, canvas.width, canvas.height);
    };
}

// Initial call displaying default image
displayDiceImage(1);

document.addEventListener('DOMContentLoaded', function() {

    // Get DOM elements
    const rollButton = document.getElementById('rollButton');
    const newGameButton = document.getElementById('newGameButton');
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
            if (activePlayer === 1) {
                playerOneScore = 0;
            } else {
                playerTwoScore = 0;
            }
            activePlayer = switchPlayers(activePlayer);
        }

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

        // Call the end game function   
        endGame(playerOneCurrentScore, playerTwoCurrentScore);
    });

    // Event listener for new game button
    newGameButton.addEventListener('click', function() {
        // Reset all scores and displayed scores
        playerOneScore = 0;
        playerTwoScore = 0;
        playerOneCurrentScore = 0;
        playerTwoCurrentScore = 0;
        resetScore('.score');
        displayDiceImage(1);
    });
});