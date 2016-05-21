var wins = 0;
var victoryCounter = 0;
var guessesLeft = 10;
var lettersUsed = "";
var answerArray = ["MOUNT RUSHMORE", "NIAGARA FALLS", "WASHINGTON MONUMENT", "GATEWAY ARCH", "CARLSBAD CAVERNS", "BROOKLYN BRIDGE"];
var hintArray = ["Chiselled into the Black Hills...", "Cascading on the border...","The obelisk...", "The gateway to the west...", "The Hall of the Giants lies within...", "Above the East River..."];
var currentAnswer;
var currentHint;

function selectAnswer() {
  var randomNumber = Math.floor(Math.random() * 6);
  currentHint = hintArray[randomNumber];
  currentAnswer = answerArray[randomNumber];
  console.log(randomNumber);
}

selectAnswer();
console.log(currentHint + currentAnswer);

var targetArray = currentAnswer.split("");
var answerDiv = "";

function generateAnswerDiv() {
  for (var i = 0; i < targetArray.length; i++) {
    answerDiv += "<p class='target-letters'>" + targetArray[i] + "</p>";
  }
}

generateAnswerDiv();

updateHTML();

function updateHTML() {
var html =
        "<h4>Hint: " + currentHint + "</h4>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Letters Used: " + lettersUsed + "</p>" +
        answerDiv;

        document.querySelector("#game").innerHTML = html;
}

// Captures Key Clicks
document.onkeyup = function(event) {
  // Sets a counter, if counter is 0, that means the user's guess did not match
  var counter = 0;
  // Determines which exact key was selected. Make it lowercase
  var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
  for (var i = 0; i < targetArray.length;  i++) {
    if (userGuess === targetArray[i]) {
      console.log(targetArray[i] + "you matched");
      //currentAnswer[i].setAttribute("class", "visible");
      // Adds one to the counter, meaning the user's guess was correct (so the loss if statement below doesn't trigger)
      victoryCounter++;
      console.log(victoryCounter);
      counter++;
      if (victoryCounter === (targetArray.length -1)) {
        wins++;
        updateHTML();
      }
    }
  }
  if (counter === 0) {
    guessesLeft--;
    updateHTML();
  }
  // Resets the counter for the next letter guess
  counter = 0;
  lettersUsed += userGuess;
  updateHTML();
};