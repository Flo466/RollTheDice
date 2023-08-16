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

// Reset scores clicking NEW GAME BUTTON
function resetScores() {
    const scores = document.querySelectorAll('.score');
    scores.forEach(score => {
        score.textContent = 'O';
    });
}

// Roll dice and add value to player's score
document.addEventListener('DOMContentLoaded', function() {
    const rollButton = document.getElementById('rollButton');
    const resultElement = document.getElementById('diceResult');

    rollButton.addEventListener('click', function() {
        const randomNumber = Math.floor(Math.random() * 6) + 1;

        scorePlayerOne += randomNumber;
        resultElement.textContent = randomNumber;

        const activePlayerScoreElement = document.querySelector('.score-player-one');
        activePlayerScoreElement.textContent = scorePlayerOne;
    });
});


