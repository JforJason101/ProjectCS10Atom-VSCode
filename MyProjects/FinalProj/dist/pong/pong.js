const cvs = document.getElementById("pong"); // Gets canvas
const ctx = cvs.getContext("2d"); // Context

// Declare variables in FUNCTION parameters

// Create the paddle
const user = {
	x: 0, // x-pos
	y: cvs.height / 2 - 100 / 2, // y-pos
	width: 10,
	height: 100,
	color: "WHITE",
	score: 0,
};

// Computer paddle
const com = {
	x: cvs.width - 10, // - width of paddle
	y: (cvs.height - 100) / 2, // -100 the height of paddle
	width: 10,
	height: 100,
	score: 0,
	color: "WHITE",
};

// Create the ball
const ball = {
	x: cvs.width / 2, // x-pos
	y: cvs.height / 2, // y-pos
	radius: 10,
	speed: 7,
	velocityX: 5, // velocity
	velocityY: 5,
	color: "WHITE",
};

// Draw the rectangle
function drawRect(x, y, w, h, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, w, h);
}

// Create the net
const net = {
	x: cvs.width / 2 - 1, // x-pos - centers net
	y: 0, // y-pos
	width: 2,
	height: 10,
	color: "WHITE",
};

// Draw Net
function drawNet() {
	for (let i = 0; i <= cvs.height; i += 15) {
		drawRect(net.x, net.y + i, net.width, net.height, net.color);
	} // this for loop creates this dotted function and it remains that way because const net is true
}

// Draw circle
function drawCircle(x, y, r, color) {
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI * 2, false);
	ctx.closePath();
	ctx.fill();
}

// draw Text

function drawText(text, x, y, color) {
	ctx.fillStyle = color;
	ctx.font = "300 45px SF Mono";
	ctx.fillText(text, x, y);
}

drawText("something", 300, 200, "WHITE");

// Render the game

function render() {
	// Clear Canvas
	drawRect(0, 0, cvs.width, cvs.height, "BLACK");

	// Draw the Net
	drawNet();

	// Draw score
	// pass in stuff through the parameters
	drawText(user.score, cvs.width / 4, cvs.height / 5, "WHITE");
	drawText(com.score, (3 * cvs.width) / 4, cvs.height / 5, "WHITE");

	// draw the user and computer paddle
	drawRect(user.x, user.y, user.width, user.height, user.color);
	drawRect(com.x, com.y, com.width, com.height, com.color);

	// draw the ball
	drawCircle(ball.x, ball.y, ball.radius, ball.color);
}

// Control user paddle
cvs.addEventListener("mousemove", movePaddle);

function movePaddle(evt) {
	let rect = cvs.getBoundingClientRect();

	user.y = evt.clientY - rect.top - user.height / 2;
	// centers the paddle at the start, then you can move it
}

// Collision detection
function collision(b, p) {
	// b for ball, p for paddle
	p.top = p.y;
	p.bottom = p.y + p.height; // the top of the paddle is equal to y + the height of the paddle because previously we took it away
	p.left = p.x;
	p.right = p.x + p.width; // the right of the paddle is equal to x + the width of the paddle because previously we took it away

	b.top = b.y - b.radius; // top of the ball is = to
	b.bottom = b.y + b.radius; // bottom of the ball is = to
	b.left = b.x - b.radius; // the left of the ball is = to
	b.right = b.x + b.radius; // the right of the ball is = to

	// top right + radius...

	// prettier-ignore
	//The return statement ends function execution and specifies a value to be returned to the function caller.
	return p.left < b.right && p.top < b.bottom && p.right > b.left && p.bottom > b.top;
	// if these conditions are true --> collision, if one is false, no collsion
}

// Reset The Ball

function resetBall() {
	ball.x = cvs.width / 2;
	ball.y = cvs.height / 2;

	ball.speed = 5;
	ball.velocityX = -ball.velocityX; // goes down
}

// Update : position, move, score
function update() {
	ball.x += ball.velocityX; // the balls x pos plus the xvel to move the ball
	ball.y += ball.velocityY;

	// Simple AI

	// prettier-ignore
	// comPaddle increments over the difference of the y-position of the ball and the center of the paddle, multiply it by 0.1 to make it slightly inaccurate
	com.y += (ball.y - (com.y + com.height / 2)) * 0.1;

	if (ball.y - ball.radius < 0 || ball.y + ball.radius > cvs.height) {
		ball.velocityY = -ball.velocityY;
	} // If it hits the bottom wall or top wall the velocityY will be inversed.
	// if(y-pos<0)...

	// prettier-ignore
	let player = (ball.x < cvs.width / 2) ? user : com;
	// player = if the ball is on the left part of the box it's the player otherwise it's the computer

	if (collision(ball, player)) {
		// where the ball hits the player
		// prettier-ignore
		// the collisionPoint is set to difference between the y-position of the ball and the center of the paddle
		let collidePoint = (ball.y - (player.y + player.height / 2));
		// normalizes and reduces collide Point --> divides it by the center of the paddle
		collidePoint = collidePoint / (player.height / 2);
		// calculate the angle in Radians
		// prettier-ignore
		let angleRad = (Math.PI/4) * collidePoint; // 45 degrees divided by normalized collidePoint
		// X direction of the ball when it's hit
		// prettier-ignore
		let direction = ball.x + ball.radius < cvs.width / 2 ? 1 : -1;
		// the direction is equal to if the x-pos of the ball + the radius is less than the width of half the canvas. If it is it equals 1 (positive x-velocity), otherwise, -1 (negative x-velocity)
		// change the velocity of x and y
		ball.velocityX = direction * ball.speed * Math.cos(angleRad);
		ball.velocityY = ball.speed * Math.sin(angleRad);
		// increase speed every hit
		ball.speed += 0.5;
	}

	// update the score
	if (ball.x - ball.radius < 0) {
		// com win
		com.score++;
		resetBall();
	} else if (ball.x + ball.radius > cvs.width) {
		// user win
		user.score++;
		resetBall();
	}
}

// Game initialize
function game() {
	update();
	render();
}

// Loop it
const framePerSecond = 50;
setInterval(game, 1000 / framePerSecond);
