
const canvas = document.getElementById('analog-clock');
const context = canvas.getContext('2d');
canvas.style.border = "0px";


const centerX = canvas.width / 2;
const centerY = canvas.height / 2;


const radius = (canvas.width / 2) - 5;


context.beginPath();
context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
context.lineWidth = 3;
context.strokeStyle = 'black';
context.stroke();
context.fillStyle = "#9F91CC"
context.fill()



