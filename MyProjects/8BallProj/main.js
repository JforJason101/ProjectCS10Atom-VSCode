// On Click:
document.getElementById("button").addEventListener("click", randomizer);

// Grab IDs:
let inputMain = document.getElementById("inputMain");
let output = document.getElementById("output");

// The randomizer() function also includes specific inputs to have specific outputs
// So, it's not all random.
function randomizer() {
	let randomOutputs = [
		"Without a Doubt.",
		"As I see it, yes.",
		"Concentrate and ask again.",
		"Don't count on it.",
		"Outlook not so good.",
	];
	let ask = "ASK A QUESTION";
	if (inputMain === "") {
		output.innerHTML = ask;
	} else {
		let re = randomOutputs[Math.floor(Math.random() * randomOutputs.length)];
		output.innerHTML = re;
	}
}
