const canvas = document.getElementById('dice');
const ctx = canvas.getContext('2d');
let scorePlayerOne = 0;


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
    const resultElement = document.getElementById('diceResult');
    
    // Roll dice, generate random number, add it to player one's score
    rollButton.addEventListener('click', function() {
        const randomNumber = Math.floor(Math.random() * 6) + 1;

        scorePlayerOne += randomNumber;
        resultElement.textContent = randomNumber;

        const scorePlayerOneElement = document.querySelector('.score');
        scorePlayerOneElement.textContent = scorePlayerOne;
    });

    // Reset game
    function resetScores() {
        const scores = document.querySelectorAll('.score');
        scores.forEach(score => {
            score.textContent = '0';
        });
    }
    newGameButton.addEventListener('click', function() {
        resetScores();
    });
});



