var p1Display = document.getElementById("p1Display"); //Player 1 Score
var p2Display = document.getElementById("p2Display"); //Player 2 Score
var p1Btn = document.getElementById("p1"); //Player 1 Control Button
var p2Btn = document.getElementById("p2"); //Player 1 Control Button
var resetButton = document.getElementById("reset"); //Reset Score Button
var gameOver = false; //setting gameOver to false, for if statement below
var numInput = document.getElementById("input1"); //input variable for setting winning score
var winningScoreDisplay = document.getElementById("scoreSet"); //shows number that winning score is. Reflects what is in the input
var p1Score = 0; //Player 1 starting score
var p2Score = 0; //Player 2 starting score
var winningScore = 5; //Arbitrary default score value, could be anything

// Adds one to Player 1 score, until it reaches winning score
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
// Adds one to Player 2 score, until it reaches winning score
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

//Calls the reset() function
resetButton.addEventListener("click", function() {
  reset();
});

//Resets score back to default, without refreshing page
function reset() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("text-success");
  p2Display.classList.remove("text-success");
  gameOver = false;
}

//Grabs user input and controls the winning score
numInput.addEventListener("change", function() {
  winningScoreDisplay.textContent = this.value;
  winningScore = Number(this.value);
  reset();
});
