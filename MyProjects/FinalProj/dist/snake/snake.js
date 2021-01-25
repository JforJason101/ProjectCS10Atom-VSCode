window.onload = function () {
	canv = document.getElementById("gc");
	ctx = canv.getContext("2d"); // Graphics context
	document.addEventListener("keydown", keyPush); // KeyPush function, when keydown
	setInterval(game, 1000 / 15); // call the game 15 times every second
};
// "=" resolves the right hand side and then assigns the result to the left hand side.

px = py = 10; // Set player positions
gs = tc = 20; // (20*20=400) The size of the grid and the amount of tiles
ax = ay = 15; // Apple position
xv = yv = 0; // x-vel, y-vel
trail = []; // Will hold the previous positions of the snake
tail = 5; // length of the snake
function game() {
	px += xv; // PlayerX will += xv
	py += yv; // PlayerY will += yv
	if (px < 0) {
		px = tc - 1; // will set the playerX position to 1 less than than the tile count if it is less than 0
	}
	if (px > tc - 1) {
		px = 0; // will set the playerX position to 0 if it is less than tc - 1
	}
	if (py < 0) {
		py = tc - 1; // continution of previous
	}
	if (py > tc - 1) {
		py = 0;
	}
	ctx.fillStyle = "black"; // draws the rectangle
	ctx.fillRect(0, 0, canv.width, canv.height); // x, y, canvas dimensions

	ctx.fillStyle = "lime"; // creates the snake
	for (var i = 0; i < trail.length; i++) {
		ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2); // draws the squares for the trail length.
		if (trail[i].x == px && trail[i].y == py) {
			tail = 5;
		}
	}
	trail.push({ x: px, y: py }); // Adds new items to the end of an array
	while (trail.length > tail) {
		trail.shift(); // removes the 0th index in the trail array
	}

	if (ax == px && ay == py) {
		tail++;
		ax = Math.floor(Math.random() * tc);
		ay = Math.floor(Math.random() * tc);
	} // randomizes the position of the snake and it's tail then recontinues the Game
	ctx.fillStyle = "red"; // draws the apple
	ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);
}
function keyPush(evt) {
	// Switch Cases for keyboard
	// 37 --> 40 = arrow keys
	// Simple Explanation:
	// Once the case match is found, a block of statements associated with that particular case is executed.
	// Each case in a block of a switch has a different name/number which is referred to as an identifier.
	switch (evt.keyCode) {
		case 37:
			xv = -1;
			yv = 0;
			break;
		case 38:
			xv = 0;
			yv = -1;
			break;
		case 39:
			xv = 1;
			yv = 0;
			break;
		case 40:
			xv = 0;
			yv = 1;
			break;
	}
}

// Redeclaring these because I had to customize the CSS.

canv = document.getElementById("gc");
ctx = canv.getContext("2d");

fitToContainer(canv);

function fitToContainer(canv) {
	// Make it visually fill the positioned parent
	canv.style.width = "100%";
	canv.style.height = "100%";
	// ...then set the internal size to match
	canv.width = canv.offsetWidth;
	canv.height = canv.offsetHeight;
}
