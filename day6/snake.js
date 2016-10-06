window.onload = function() {
	var canvas = document.createElement('canvas'),
		context = canvas.getContext('2d'),
		score = 0,
		level = 0;

	canvas.width = 204;
	canvas.height = 224;

	var body = document.getElementsByTagName('body')[0];
	body.appendChild(canvas);

	drawGame();

	function drawGame(){
		context.clearRect(0, 0, canvas.width, canvas.height);
		drawMain();

	function drawMain(){
		context.lineWidth = 2;
		context.strokeStyle = 'black';
		context.strokeRect(2, 20, canvas.width - 4, canvas.height - 24);
		context.font = '12px sans-serif';
		context.fillText('Score: ' + score + ' - Level: ' + level, 2, 12);
	}

	var map = new Array(20);
	for (var i = 0; i < map.length; i++){
		map[i] = new Array(20);
	}

	function generateFood(map){
		var a;

}
