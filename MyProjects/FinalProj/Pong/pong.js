const cvs = document.getElementById("pong");
const ctx = cvs.getContext("2d");

// Create the paddle
const user = {
	x: 0,
	y: cvs.height / 2 - 100 / 2,
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
	x: cvs.width / 2,
	y: cvs.height / 2,
	radius: 10,
	speed: 7,
	velocityX: 5,
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
	x: cvs.width / 2 - 1,
	y: 0,
	width: 2,
	height: 10,
	color: "WHITE",
};

// Draw Net
function drawNet() {
	for (let i = 0; i <= cvs.height; i += 15) {
		drawRect(net.x, net.y + i, net.width, net.height, net.color);
	}
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
	ctx.font = "45px Roboto Mono";
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
}

// Collision detection
function collision(b, p) {
	b.top = b.y - b.radius;
	b.bottom = b.y + b.radius;
	b.lefy - b.x - b.radius;
	b.right = b.x + b.radius;

	p.top = p.y;
	p.bottom = p.y + p.height;
	p.left = p.x;
	p.right = p.x + p.width;

	return (
		b.right > p.left && b.bottom > p.top && b.left < p.right && b.top < p.bottom
	);
}

// Update : position, move, score
function update() {
	ball.x += ball.velocityX;
	ball.y += ball.velocityY;

	// AI to control the computer
	let comLevel = 0.1;
	com.y = (ball.y - (com.y + com.height / 2)) * comLevel;

	if (ball.y + ball.radius > cvs.height || ball.y - ball.radius < 0) {
		ball.velocityY = -ball.velocityX;
	}

	let player = ball.x < cvs.width / 2 ? user : com;

	if (collision(ball, player)) {
		// where the ball hits the player
		let collidePoint = ball.y - (player.y + player.height / 2);

		// normalize

		collidePoint = collidePoint / (player.height / 2);

		// calculate the angle in Radians
		let angleRad = (collidePoint * Math.PI) / 4;

		// X direction of the ball when it's hit
		let direction = ball.x < cvs.width / 2 ? 1 : -1;
		// change the velocity of x and y
		ball.velocityX = direction * ball.speed * Math.cos(angleRad);
		ball.velocityY = ball.speed * Math.sin(angleRad);

		// increase speed every hit
		ball.speed += 0.1;
	}
}

// Game init
function game() {
	update();
	render();
}

// Loop it
const framePerSecond = 50;
setInterval(game, 1000 / framePerSecond);
