var canvas, canvasContext;

var blueCar = new Car();
var greenCar = new Car();

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	colorRect(0,0, canvas.width,canvas.height, 'black');
	colorText("LOADING IMAGES", canvas.width/2, canvas.height/2, 'white');

	loadImages();
}

function imageLoadingFinished() {
	var framesPerSecond = 30;
	setInterval(updateAll, 1000/framesPerSecond);
	setupInput();
	loadLevel(trackList[0]);
	
}
function loadLevel(level){
	trackGrid = level.slice();
	greenCar.reset(otherCarPic,"Green Car");
	blueCar.reset(carPic, "Blue Car");
}
function updateAll() {
	moveAll();
	drawAll();
}

function moveAll() {
	blueCar.move();
	greenCar.move();
}

function drawAll() {
	drawTracks();
	blueCar.draw();
	greenCar.draw();
	drawScores();
} 