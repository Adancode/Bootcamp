

document.onkeyup = function(event) {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var answer;
    var score = 0;
    if (userGuess === "t") {
      answer = true;
    }
    if (userGuess === "f") {
      answer = false;
    }
var quiz = {
     q1: ["The year is 2000?", false],
     q2: ["The year is 2001?", false],
     q3: ["The year is 2002?", false],
     q4: ["The year is 2003?", false],
     q5: ["The year is 2004?", false],
     q6: ["The year is 2005?", false],
     q7: ["The year is 2006?", false],
     q8: ["The year is 2007?", false],
     q9: ["The year is 2008?", false],
     q10:["The year is 2016?", true],
 };

for (var key in quiz) {
  answer = confirm(quiz[key][0]);
  if (answer === quiz[key][1]) {
    score = score + 10;
  }
  if (score === 100) {
    alert ("You got a perfect score!");
  }
}

console.log(score);

};
