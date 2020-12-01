// will give JS the 'go' to process the function below.
document.getElementById("sub").addEventListener("click", theQs);

function theQs() {
	// Variable desc. - 'score' as it reads, is the 'score.' It will increment in the score.
	var score = 0;

	// Brings inputs to JS
	var q1 = document.getElementById("q1");
	var q2 = document.getElementById("q2");
	var q3 = document.getElementById("q3");
	var q4 = document.getElementById("q4");

	// Array consisting of the answers
	const ans = {
		q1: "FATHER OF CAPITALISM",
		q2: "HI",
		q3: "WHEN THE GUBBERMENT DOES STUFF",
		q4: "THEIR CHAINS",
	};

	const ifWrong1 = document.getElementById("ifWrong1");
	const ifWrong2 = document.getElementById("ifWrong2");
	const ifWrong3 = document.getElementById("ifWrong3");
	const ifWrong4 = document.getElementById("ifWrong4");

	// If statements used to check if the inputs match, if they do, it adds 1 to the score.
	if (q1.value.toUpperCase() === ans.q1) {
		score += 1;
	} else {
		ifWrong1.innerHTML = `WRONG! The answer for Number 1, was: 'Father of Capitalism'`;
	}
	if (q2.value.toUpperCase() === ans.q2) {
		score += 1;
	} else {
		ifWrong2.innerHTML = `WRONG! The answer for Number 2, was: 'hi'`;
	}
	if (q3.value.toUpperCase() === ans.q3) {
		score += 1;
	} else {
		ifWrong3.innerHTML = `WRONG! The answer for Number 3, was: 'When the Gubberment does stuff'`;
	}
	if (q4.value.toUpperCase() === ans.q4) {
		score += 1;
	} else {
		ifWrong4.innerHTML = `WRONG! The answer for Number 4, was: 'Their chains'`;
	}
	console.log(score);

	// Output Display
	const mark = document.getElementById("mark");
	// Display Mark -->

	mark.innerHTML = `You receive a ${score}/4!`;
}
