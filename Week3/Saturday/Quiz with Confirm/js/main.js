

/*document.onkeyup = function(event) {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var answer;
    var score = 0;
		var counter = 0;
var quiz = {
     q1: ["Adam is the greatest?", true],
     q2: ["The Coding Boot Camp at UT Rocks?", true],
     q3: ["The Kardashians should go away?", true],
     q4: ["Taco Bell serves real food?", false],
     q5: ["Winter is coming?", true]
 };

for (var key in quiz) {
  answer = confirm(quiz[key][0]);
	counter++;
  if (answer === quiz[key][1]) {
    score = score + 20;
  }
  if (score === 100) {
    alert ("You got a " + score + "! Perfect score!");
  }
	if (counter === 5 && score !== 100) {
		alert ("You got a " + score + ".  Better luck next time!");
	}
}

console.log(score);

};*/


document.onkeyup = function(event) {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var answer;
    var score = 0;
		var counter = 0;
var quiz = {
     q1: ["Adam is the greatest?", "t"],
     q2: ["The Coding Boot Camp at UT Rocks?", "t"],
     q3: ["The Kardashians should go away?", "t"],
     q4: ["Taco Bell serves real food?", "f"],
     q5: ["Winter is coming?", "t"]
 };

for (var key in quiz) {
  answer = prompt(quiz[key][0]);
	counter++;
  if (answer === quiz[key][1]) {
    score = score + 20;
  }
  if (score === 100) {
    alert ("You got a " + score + "! Perfect score!");
  }
	if (counter === 5 && score !== 100) {
		alert ("You got a " + score + ".  Better luck next time!");
	}
}

console.log(score);

};
