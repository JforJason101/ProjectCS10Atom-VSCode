const cvs = document.getElementById("pong");
const ctx = cvs.getContext("2d");

// draw the rectangle

function drawRect() {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, w, h);
}

drawRect(0, 0, cvs.width, cvs.height, "black");

// draw Circle