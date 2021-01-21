const texts = ["Welcome To The ARCADE™", "Arcade", "TheArcade."];
// DEFINE THE TEXTS

let countingPart = 0;
// LOOKS AT EACH INDIVIDUAL TEXTS - FROM O, 1, 2...

let pI = 0;
// KEEPS TRACK OF INDIVIDUAL LETTERS (using 'ints') IN A STRING (INDEX)

let intervalVal;
// Holds the reference that setInterval creates

let element = document.querySelector(".typing");
// Holds text

// Typing function

function type() {
	// Get substring, adds 1 character
	var text = texts[countingPart].substring(0, pI + 1);
	element.innerHTML = text;
	pI++;

	// Delay the deleting

	if (text === texts[countingPart]) {
		clearInterval(intervalVal);
		setTimeout(function () {
			intervalVal = setInterval(del, 250);
		}, 1000);
	}
}

// function del() {
// 	// Get substring, deletes a character
// 	var text = texts[countingPart].substring(0, pI - 1);
// 	element.innerHTML = text;
// 	pI--;

// 	// Moves to the next sentence
// 	if (text === "") {
// 		clearInterval(intervalVal);

// 		/* If the current sentence was the last one in the
//         array then display [0] in the array,
//         ELSE, move to the next one. */

// 		if (countingPart == texts.length - 1) countingPart = 0;
// 		else countingPart++;

// 		pI = 0;

// 		// Delay next sentence

// 		setTimeout(function () {
// 			intervalVal = setInterval(type, 100);
// 		}, 200);
// 	}
// }

// Start the typing effect on load
intervalVal = setInterval(type, 100);
