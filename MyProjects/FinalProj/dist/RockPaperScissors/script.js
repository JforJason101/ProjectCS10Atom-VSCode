const game = () => {
	// Shorthanding to self-contain the code so that there's no global variable, keeps it simple.
	// Makes game a function
	let pScore = 0; // Set the initial scores to zero and output this initially
	let cScore = 0;

	// This holds the variables to Start The game
	const startGame = () => {
		const playBtn = document.querySelector(".intro button"); // Selects Queries
		const introScreen = document.querySelector(".intro");
		const match = document.querySelector(".match");

		playBtn.addEventListener("click", () => {
			introScreen.classList.add("fadeOut"); // gets the classList, puts it into a read-only file, then passes a css class to it.
			match.classList.add("fadeIn");
		});
	};
	// This holds the variables to Play a Match
	const playMatch = () => {
		const options = document.querySelectorAll(".options button");
		const playerHand = document.querySelector(".player-hand");
		const computerHand = document.querySelector(".computer-hand");
		const hands = document.querySelectorAll(".hands img");

		hands.forEach((hand) => {
			//shorthand the loop
			hand.addEventListener("animationend", function () {
				this.style.animation = ""; // makes the animation empty when animation ends
				// we put a reg. function here because if we don't it won't be bound to hand
			});
		});

		//Computer Options
		const computerOptions = ["rock", "paper", "scissors"];

		options.forEach((option) => {
			option.addEventListener("click", function () {
				//Computer Choice
				const computerNumber = Math.floor(Math.random() * 3); // anywhere in between 0 and 3, then floors it.
				const computerChoice = computerOptions[computerNumber];

				setTimeout(() => {
					//Compare hands
					compareHands(this.textContent, computerChoice);
					//Update Images
					playerHand.src = `./assets/${this.textContent}.png`;
					computerHand.src = `./assets/${computerChoice}.png`;
				}, 2000);
				//Animation
				playerHand.style.animation = "shakePlayer 2s ease";
				computerHand.style.animation = "shakeComputer 2s ease";
			});
		});
	};

	const updateScore = () => {
		const playerScore = document.querySelector(".player-score p");
		const computerScore = document.querySelector(".computer-score p");
		playerScore.textContent = pScore;
		computerScore.textContent = cScore;
	};

	const compareHands = (playerChoice, computerChoice) => {
		//Update Text
		const winner = document.querySelector(".winner");
		//Checking for a tie
		if (playerChoice === computerChoice) {
			winner.textContent = "It is a tie";
			return;
		}
		//Check for Rock
		if (playerChoice === "rock") {
			if (computerChoice === "scissors") {
				winner.textContent = "Player Wins";
				pScore++;
				updateScore();
				return;
			} else {
				winner.textContent = "Computer Wins";
				cScore++;
				updateScore();
				return;
			}
		}
		//Check for Paper
		if (playerChoice === "paper") {
			if (computerChoice === "scissors") {
				winner.textContent = "Computer Wins";
				cScore++;
				updateScore();
				return;
			} else {
				winner.textContent = "Player Wins";
				pScore++;
				updateScore();
				return;
			}
		}
		//Check for Scissors
		if (playerChoice === "scissors") {
			if (computerChoice === "rock") {
				winner.textContent = "Computer Wins";
				cScore++;
				updateScore();
				return;
			} else {
				winner.textContent = "Player Wins";
				pScore++;
				updateScore();
				return;
			}
		}
	};

	//Is call all the inner function
	startGame();
	playMatch();
};

//start the game function
game();
