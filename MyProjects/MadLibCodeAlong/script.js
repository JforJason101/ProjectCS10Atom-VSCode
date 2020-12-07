document.getElementById("process").addEventListener("click", Display);

function Display() {
	let plunoun = document.getElementById("a").value;
	let adj = document.getElementById("b").value;
	let ptv = document.getElementById("c").value;
	let noun = document.getElementById("d").value;
	console.log("return to monke!!");
	if (
		(plunoun.length == 0) |
		(adj.length == 0) |
		(ptv.length == 0) |
		(noun.length == 0)
	) {
		alert("Fill in your missing inputs!");
	} else {
		document.getElementById(
			"results"
		).innerHTML = `"There are too many ${plunoun} on this ${adj} airplane!" I screamed. "Somebody has to ${ptv} on the ${noun} to solve this problem.`;
	}
}
