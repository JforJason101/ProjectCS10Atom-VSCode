function changeColour() {
	let red = document.getElementById("redIn").value;
	let green = document.getElementById("greenIn").value;
	let blue = document.getElementById("blueIn").value;
	if (
		(document.getElementById("redIn").value.length == 0) |
		(document.getElementById("greenIn").value.length == 0) |
		(document.getElementById("blueIn").value.length == 0)
	) {
		alert("Fill in your missing inputs!");
	}

	if ((red > 255) | (green > 255) | (blue > 255)) {
		alert("Your values are too high!");
		console.log(1);
	}
	document.getElementById(
		"view"
	).style.backgroundColor = `rgb(${red},${green},${blue})`;
}
