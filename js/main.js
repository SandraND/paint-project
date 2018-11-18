// getContext() method will return an object which will
// provide all the necessary tools we need for drawing
// on the canvas.

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
context.lineWidth = 5;
let down = false;

canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mousedown', () => {
    down = true;
    context.beginPath();
    context.moveTo(xPos, yPos);
    canvas.addEventListener('mousemove', draw, false);
});

canvas.addEventListener('mouseup', () => {
    down = false;
});

// function to get the coordinates of the mouse.
// we need to substract the offset of the canvas to
// draw INSIDE the cannvas.
function draw(e) {
    xPos = e.clientX - canvas.offsetLeft;
    yPos = e.clientY - canvas.offsetTop;

    if(down == true) {
        context.lineTo(xPos, yPos);
        //stroke draws the line (default=black)
        context.stroke();
    }
}
function changeColor() {
    context.strokeStyle = color;
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.clientWidth, canvas.height);
}