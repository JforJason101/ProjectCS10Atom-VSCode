const texts = ["Arcade", "theArcade.", "TheArcade™"];
// DEFINE THE TEXTS

let counting = 0;
// LOOKS AT EACH INDIVIDUAL TEXTS - FROM O, 1, 2...

let i = 0;
// KEEPS TRACK OF INDIVIDUAL LETTERS IN A STRING (INDEX)

let selectedText = "";
// TEXT THAT IS CURRENTLY SELECTED, AUTOMATICALLY CHANGES

let letter = "";
// SPECIFIES THE INDIVIDUAL LETTER

//Self-Invoked Function -->

(function type() {
	if (counting === texts.length) {
		counting = 0;
		// Counting resets back to zero when it equals 3
	}

	selectedText = texts[counting];
	// Sets the selected text by indexing the text array
	letter = selectedText.slice(0, ++i);
	// letter equals selectedText, then iincrements 1 at a time

	document.querySelector(".typing").textContent = letter;
	// Selects the typing CSS class, looks at the text content and then equates that to the letter
	if (letter.length === selectedText.length) {
		// Looks at if the letter's length equals the selected text's length.
		counting++;
		// increases count by 1, then that moves it to the next string in the array
		i = 0;
		// The index for the letter is reset
	}
	setTimeout(type, 700);
	// Runs every 700ms
})();

