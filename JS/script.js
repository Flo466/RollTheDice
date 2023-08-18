const canvas = document.getElementById('dice');
const ctx = canvas.getContext('2d');
let activePlayer = 1;
let playerOneScore = 0;
let playerTwoScore = 0;
let playerOneCurrentScore = 0;
let playerTwoCurrentScore = 0;


// Creta new image
const image = new Image();
image.src = "./Images/default_dice.png";

// Loading image
image.onload = () => {
  // draw image
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
};

document.addEventListener('DOMContentLoaded', function() {

    const rollButton = document.getElementById('rollButton');
    const newGameButton = document.getElementById('newGameButton');
    const diceResult = document.getElementById('diceResult');
    const holdButton = document.getElementById('hold-btn');

    const playerOneScoreElement = document.querySelector('.score-player-one');
    const playerTwoScoreElement = document.querySelector('.score-player-two');
    const playerOneCurrentScoreElement = document.querySelector('.crnt-score-player-One');
    const playerTwoCurrentScoreElement = document.querySelector('.crnt-score-player-Two');

    let playerOneScore = 0;
    let playerTwoScore = 0;
    let playerOneCurrentScore = 0;
    let playerTwoCurrentScore = 0;
    let activePlayer = 1;

    function switchPlayers(currentPlayer) {
        return (currentPlayer === 1) ? 2 : 1;
    }

    function resetScore(selector) {
        document.querySelectorAll(selector).forEach(score => {
            score.textContent = '0';
        });
    }

    function updateScores() {
        playerOneScoreElement.textContent = playerOneScore;
        playerTwoScoreElement.textContent = playerTwoScore;
        playerOneCurrentScoreElement.textContent = playerOneCurrentScore;
        playerTwoCurrentScoreElement.textContent = playerTwoCurrentScore;
    }

    function rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    rollButton.addEventListener('click', function() {
        const randomNumber = rollDice();

        if (randomNumber !== 1) {
            (activePlayer === 1) ? playerOneScore += randomNumber : playerTwoScore += randomNumber;
        } else {
            resetScore(activePlayer === 1 ? '.score-player-one' : '.score-player-two');
            (activePlayer === 1) ? playerOneScore = 0 : playerTwoScore = 0;
            activePlayer = switchPlayers(activePlayer);
        }

        diceResult.textContent = randomNumber;
        updateScores();
    });

    holdButton.addEventListener('click', function() {
        if (activePlayer === 1) {
            playerOneCurrentScore += playerOneScore;
            playerOneScore = 0;
            resetScore('.score-player-one');
        } else {
            playerTwoCurrentScore += playerTwoScore;
            playerTwoScore = 0;
            resetScore('.score-player-two');
        }

        activePlayer = switchPlayers(activePlayer);
        updateScores();
    });

    newGameButton.addEventListener('click', function() {
        playerOneScore = 0;
        playerTwoScore = 0;
        playerOneCurrentScore = 0;
        playerTwoCurrentScore = 0;
        resetScore('.score');
        updateScores();
    });
});
