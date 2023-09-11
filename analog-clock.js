
const canvas = document.getElementById('analog-clock');
const context = canvas.getContext('2d');
canvas.style.border = "0px";
///////////////////////////////////////////////////////////////////////////////
function clock(){
  this.centerX = canvas.width / 2 ;
  this.centerY = canvas.height / 2;
  this.radius = (canvas.width / 2) - 10;
  context.beginPath();
  context.arc(this.centerX, this.centerY, this.radius-20, 0, 2 * Math.PI);
  context.lineWidth = 3;
  context.strokeStyle = 'black';
  context.stroke();
  context.fillStyle = "#9F91CC"
  context.fill()
}
let cck = new clock()
////////////////////////////////////////////////////////////////////////////////
function numbers(){
  for (let i = 1; i <= 12; i++) {
    const angle = (i - 3) * (Math.PI / 6);
    const x = cck.centerX + Math.cos(angle) * cck.radius;
    const y = cck.centerY + Math.sin(angle) * cck.radius;

    context.fillStyle = 'black';
    context.font = '20px Arial';
    context.fillText(i.toString(), x, y);
  }
}
let number = new numbers()
//////////////////////////////////////////////////////////////////////////////////
function secondHandler(){
  const now = new Date();
  const seconds = now.getSeconds();
  const secondHandAngle = (-90 + seconds * 6) * (Math.PI / 180);
  const secondHandLength = cck.radius - 40;
  const secondHandX = cck.centerX + Math.cos(secondHandAngle) * secondHandLength;
  const secondHandY = cck.centerY + Math.sin(secondHandAngle) * secondHandLength;
  context.beginPath();
  context.moveTo(cck.centerX, cck.centerX);
  context.lineTo(secondHandX, secondHandY);
  context.lineWidth = 5;
  context.strokeStyle = '#183D3D';
  context.stroke()
}
//let secondhandler = new secondHandler()
//////////////////////////////////////////////////////////////////////////////////
function minutesHandler(){
  const now = new Date();
  const minutes = now.getMinutes();
  const mnutesHandAnglei = (-90 + minutes * 6) * (Math.PI / 180);
  const minutesHandLength = cck.radius - 50;
  const secondHandX = cck.centerX + Math.cos(mnutesHandAnglei) * minutesHandLength;
  const secondHandY = cck.centerY + Math.sin(mnutesHandAnglei) * minutesHandLength;
  context.beginPath();
  context.moveTo(cck.centerX, cck.centerX);
  context.lineTo(secondHandX, secondHandY);
  context.lineWidth = 5;
  context.strokeStyle = '#435334';
  context.stroke()
}
//let minuteshandler = new minutesHandler()
//////////////////////////////////////////////////////////////////////////////////
function hoursHandler(){
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const hoursHandAngle = (-90 + (hours % 12 + minutes / 60) * 30) * (Math.PI / 180);
  const hoursHandAngleLength = cck.radius - 70;
  const secondHandX = cck.centerX + Math.cos(hoursHandAngle) * hoursHandAngleLength;
  const secondHandY = cck.centerY + Math.sin(hoursHandAngle) * hoursHandAngleLength;
  context.beginPath();
  context.moveTo(cck.centerX, cck.centerX);
  context.lineTo(secondHandX, secondHandY);
  context.lineWidth = 5;
  context.strokeStyle = 'white';
  context.stroke()
}
//////////////////////////////////////////////////////////////////////////////////
function animate(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  clock()
  numbers()
  secondHandler()
  minutesHandler()
  hoursHandler()
  requestAnimationFrame(animate)
}
animate()
/////////////////////////////////////////////////////////////////////////////////