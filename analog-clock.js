
const canvas = document.getElementById('analog-clock');
const context = canvas.getContext('2d');
canvas.style.border = "0px";


const centerX = canvas.width / 2 ;
const centerY = canvas.height / 2 ;


const radius = (canvas.width / 2) - 10;


context.beginPath();
context.arc(centerX, centerY, radius-20, 0, 2 * Math.PI);
context.lineWidth = 3;
context.strokeStyle = 'black';
context.stroke();
context.fillStyle = "#9F91CC"
context.fill()

////////////////////////////////////////////////////////////////////////////////

for (let i = 1; i <= 12; i++) {
    const angle = (i - 3) * (Math.PI / 6);
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;

    context.fillStyle = 'black';
    context.font = '20px Arial';
    context.fillText(i.toString(), x, y);
  }
///////////////////////////////////////////////////////////////////////////