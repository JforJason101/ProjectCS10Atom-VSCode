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
		qq1: "SANTA CLAUS",
		q2: "HI",
		qq2: "HOW ABOUT NO",
		qqq2: "HOW ABOUT NO!",
		q3: "WHEN THE GUBBERMENT DOES STUFF",
		qq3: "WHEN NO IPHONE",
		q4: "NOTHING BUT THEIR CHAINS",
		qq4: "THEIR CHAINS",
	};

	// Will display the answer if wrong
	const ifWrong1 = document.getElementById("ifWrong1");
	const ifWrong2 = document.getElementById("ifWrong2");
	const ifWrong3 = document.getElementById("ifWrong3");
	const ifWrong4 = document.getElementById("ifWrong4");

	// If statements used to check if the inputs match. If they do, it adds 1 to the score.
	if (q1.value.toUpperCase() === ans.q1 || q1.value.toUpperCase() === ans.qq1) {
		score += 1;
	} else {
		ifWrong1.innerHTML = `WRONG! The answer for Number 1, was: 'Father of Capitalism' or 'Santa Claus'`;
	}
	if (
		q2.value.toUpperCase() === ans.q2 ||
		q2.value.toUpperCase() === ans.qq2 ||
		q2.value.toUpperCase() === ans.qqq2
	) {
		score += 1;
	} else {
		ifWrong2.innerHTML = `WRONG! The answer for Number 2, was: 'hi' or 'how about no'`;
	}
	if (q3.value.toUpperCase() === ans.q3 || q3.value.toUpperCase() === ans.qq3) {
		score += 1;
	} else {
		ifWrong3.innerHTML = `WRONG! The answer for Number 3, was: 'When the Gubberment does stuff' or 'When no iPhone'`;
	}
	if (q4.value.toUpperCase() === ans.q4 || q4.value.toUpperCase() === ans.qq4) {
		score += 1;
	} else {
		ifWrong4.innerHTML = `WRONG! The answer for Number 4, was: 'Nothing but their chains' or 'Their chains'`;
	}
	console.log(score);

	// Output Display
	const mark = document.getElementById("mark");
	// Display Mark -->
	// This makes the score into a percentage
	const percent = (score / 4) * 100;

	mark.innerHTML = `Well done! You receive a ${score}/4! (${percent}%)`;
}
// This function rickrolls the user
function learnMore() {
	location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
}
