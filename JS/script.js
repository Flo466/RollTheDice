const canvas = document.getElementById('dice');
const ctx = canvas.getContext('2d');
let activePlayer = 1;
let playerOneScore = 0;
let playerTwoScore = 0;

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

    function switchPlayers(currentPlayer) {
        return (currentPlayer === 1) ? 2 : 1;
    }

    // Roll dice, generate random number, add it to player one's score
    rollButton.addEventListener('click', function() {
        const randomNumber = Math.floor(Math.random() * 6) + 1;

        if (randomNumber !== 1) {
            if (activePlayer === 1) {
                playerOneScore += randomNumber;
            } else {
                playerTwoScore += randomNumber;
            }
        } else {
            if (activePlayer === 1) {
                playerOneScore = 0;
            } else {
                playerTwoScore = 0;
            }
            activePlayer = switchPlayers(activePlayer);
        }
    
        diceResult.textContent = randomNumber;
    
        const activePlayerScoreElement = document.querySelector(activePlayer === 1 ? '.score-player-one' : '.score-player-two');
        activePlayerScoreElement.textContent = (activePlayer === 1) ? playerOneScore : playerTwoScore;
    });

    function resetScores() {
        const scores = document.querySelectorAll('.score');
        scores.forEach(score => {
            score.textContent = '0';
            diceResult.textContent = '-'
        });
    }

    // Reset game
    newGameButton.addEventListener('click', function() {
        playerOneScore = 0;
        playerTwoScore = 0;
        resetScores();
    });
});
