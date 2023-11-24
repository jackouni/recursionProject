// Make a Function named 'fibs'
/* 
    • Takes a Number
    • Returns an array of numbers in the Fibonacci Sequence up to the passed number 
*/

/* Base Case(s):
    • if n === 0 { return [0] }
    • if n === 1 { return [0, 1] }
*/

/* Determining The Fibonnaci Number:
    • n in sequence === arr[arr.length - 1]
    • Previous number in sequence === arr[arr.length - 2]
    • Previous previous number in sequence === arr[arr.length - 3]
    • Finding value of n === arr[arr.length - 2] + arr[arr.length - 3]
    • We'll have to pass the array onto each new iteration.
    • arr.push(arr[arr.length - 1] + arr[arr.length - 2])
*/

function fibs(n) {
	let arr = [0, 1];
	if (n === 0) {
		return [0];
	}
	if (n === 1) {
		return [0, 1];
	}

	for (let i = 1; i < n - 1; i++) {
		arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
	}

	return arr;
}

function fibsRec(n) {
	if (n <= 0) {
		console.log("ERROR: Enter a valid number, it needs to be more than 0.");
	} else if (n === 1) {
		return [0];
	} else if (n === 2) {
		return [0, 1];
	} else {
		let currentSequence = fibsRec(n - 1);
		currentSequence.push(currentSequence[currentSequence.length - 1] + currentSequence[currentSequence.length - 2]);
		return currentSequence;
	}
}

fibsRec(8);
