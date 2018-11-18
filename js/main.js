//getContext() method will return an object which will
//provide all the necessary tools we need for drawing
//on the canvas.

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
context.lineWidth = 5;
let down = false;

