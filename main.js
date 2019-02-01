var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var p1Btn = document.getElementById("p1");
var p2Btn = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var gameOver = false;
var numInput = document.getElementById("input1");
var winningScoreDisplay = document.getElementById("scoreSet");
var p1Score = 0;
var p2Score = 0;
var winningScore = 5;

p1Btn.addEventListener("click", function() {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      p1Display.classList.add("text-success");
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Btn.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      p2Display.classList.add("text-success");
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});

resetButton.addEventListener("click", function() {
  reset();
});

function reset() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("text-success");
  p2Display.classList.remove("text-success");
  gameOver = false;
}

numInput.addEventListener("change", function() {
  winningScoreDisplay.textContent = this.value;
  winningScore = Number(this.value);
  reset();
});
