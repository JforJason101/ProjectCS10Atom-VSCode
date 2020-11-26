// --scope--
// var = global
// let = local
// --scope--

document
	.getElementById("submitInputValues")
	.addEventListener("click", whenSubmit);

// PARALLAX

// PARALLAX

function whenSubmit() {
	// HEIGHT VARS. (START)

	let heightInput = parseInt(document.getElementById("heightInput").value);
	// height in CM

	let cmToM = heightInput / 100;
	// changes CM to M

	let theHeightM = cmToM * cmToM;
	// squares the converted 'M' height

	// HEIGHT VARS. (END)

	// MASS VARS. (START)
	let massKilos = parseInt(document.getElementById("weightInput").value);
	// MASS VARS. (END)

	//////////////////////////////////////////

	let theBMI = massKilos / theHeightM;
	let rounded = parseFloat(theBMI).toFixed(2);
	if (rounded === NaN) {
		console.log("1");
		document.getElementById("output").innerHTML =
			"The value inputted cannot be registered, retry";
	} else {
		console.log("2");
		document.getElementById("output").innerHTML = `Your BMI is ${rounded}`;
		heightInput = "";
		weightInput = "";
	}
}
