const canvas = document.getElementById('dice');
const ctx = canvas.getContext('2d');

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
