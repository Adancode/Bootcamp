function fizzBuzz() {
	var array = [];
	for (var i = 1; i < 101; i++) {
		array.push(i);
	}

	var results = {};

	for (var i = 0; i < array.length; i++) {
		if (array[i] % 3 === 0) {
			results[i + 1] = "Fizz";
		}
		if (array[i] % 5 === 0) {
			results[i + 1] = "Buzz";
		}
		if ((array[i] % 5 === 0) && (array[i] % 3 === 0)) {
			results[i + 1] = "FizzBuzz";
		}
	}

	console.log(results);
}

fizzBuzz();
























function fizzBuzz() {
	var array = [];
	for (var i = 1; i < 101; i++) {
		array.push(i);
		if ((array[i - 1] % 5 === 0) && (array[i  - 1] % 3 === 0)) {
			array[i - 1] = "FizzBuzz";
		}
		if (array[i - 1] % 3 === 0) {
			array[i - 1] = "Fizz";
		}
		if (array[i - 1] % 5 === 0) {
			array[i - 1] = "Buzz";
		}	
	}
	console.log(array);
}

fizzBuzz();
















function fizzBuzz() {
	var array = [];
	for (var i = 1; i < 101; i++) {
		array.push(i);
	}

	for (var i = 0; i < array.length; i++) {
		if (array[i] % 3 === 0) {
			result = "Fizz";
		}
		if (array[i] % 5 === 0) {
			result = "Buzz";
		}
		if ((array[i] % 5 === 0) && (array[i] % 3 === 0)) {
			result = "FizzBuzz";
		}
		else {
			result = i;
		}
		resultArray.push(result);
	}
	console.log(resultArray);
}

fizzBuzz();



















function fizzBuzz() {
	var array = [];
	var finalArray = [];

	for (var i = 1; i < 101; i++) {
		array.push(i);
	}
	for (var j = 0; j < array.length; j++) {
		if((array[j] % 5 === 0) && (array[j] % 3 === 0)) {
			finalArray.push("FizzBuzz");
		}
		else if (array[j] % 5 === 0) {
			finalArray.push("Fizz");
		}
		else if (array[j] % 5 === 0) {
			finalArray.push("FizzBuzz");
		}
		else {
			finalArray.push(j + 1);
		}
	}
	console.log(array);
	console.log(finalArray);
}

fizzBuzz();

function fizzBuzz() {
	var array = [];

	for (var i = 1; i < 101; i++) {
		array.push(i);
	}
	for (var j = 0; j < array.length; j++) {
		if((array[j] % 5 === 0) && (array[j] % 3 === 0)) {
				console.log("FizzBuzz");
			}
			else if (array[j] % 5 === 0) {
				console.log("Fizz");
			}
			else if (array[j] % 5 === 0) {
				console.log("FizzBuzz");
			}
			else {
				console.log(j + 1);
		}
	}
}

fizzBuzz();


