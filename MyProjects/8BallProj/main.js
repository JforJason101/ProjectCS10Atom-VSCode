// On Click:
document.getElementById("button").addEventListener("click", randomizer);

// The randomizer() function also includes specific inputs to have specific outputs.
// So, it's not all random.
function randomizer() {
	// Grab IDs:
	const inputMain = document.getElementById("inputMain").value;

	// VARIABLES
	let randomOutputs = [
		"Without a Doubt.",
		"As I see it, yes.",
		"Concentrate and ask again.",
		"Don't count on it.",
		"Outlook not so good.",
	];
	let specifics = "HELLO THERE";
	let specifics2 = [
		"REJECT MODERNITY, RETURN TO MONKE!",
		"REJECT MODERNITY RETURN TO MONKE",
		"REJECT MODERNITY, RETURN TO MONKE",
	];
	let ask = "ASK A QUESTION";
	// VARIABLES

	// Outputs

	if (inputMain == "") {
		document.getElementById("output").innerHTML = ask;
	} else if (inputMain.toUpperCase() === specifics) {
		document.getElementById("output").innerHTML = "Hello!";
	} else if (inputMain.toUpperCase() === specifics2[0]) {
		document.getElementById("output").innerHTML = "y  e  s";
	} else if (inputMain.toUpperCase() === specifics2[1]) {
		document.getElementById("output").innerHTML = "y  e  s";
	} else if (inputMain.toUpperCase() === specifics2[2]) {
		document.getElementById("output").innerHTML = "y  e  s";
	} else {
		let re = randomOutputs[Math.floor(Math.random() * randomOutputs.length)];
		document.getElementById("output").innerHTML = re;
	}

	// Outputs
}
