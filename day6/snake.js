window.onload = function() {
	var canvas = document.createElement('canvas'),
		context = canvas.getContext('2d'),
		score = 0,
		level = 0,
		direction = 0,
		snake = new Array(3);

	var map = new Array(20);
	for (var i = 0; i < map.length; i++){
		map[i] = new Array(20);
	}

	canvas.width = 204;
	canvas.height = 224;

	var body = document.getElementsByTagName('body')[0];
	body.appendChild(canvas);

	map = generateSnake(map);
	map = generateFood(map);
	drawGame();

	function drawGame(){
		context.clearRect(0, 0, canvas.width, canvas.height);

		for (var i = snake.length - 1; i >= 0; i--){
			if (i ===0){
				switch(direction){
					case 0: //right
						snake[0] = { x: snake[0].x + 1, y: snake[0].y};
						break;
					case 1: //left
						snake[0] = { x: snake[0].x - 1, y: snake[0].y};


		drawMain();

		for (var x = 0; x < map.length; x++) {
			for (var y = 0; y < map[0].length; y++) {
				if (map[x][y] === 1) {
					context.fillStyle = 'black';
					context.fillRect(x * 10, y * 10 + 20, 10, 10);
				} else if (map[x][y] === 2) {
					context.fillStyle = 'orange';
					context.fillRect(x * 10, y * 10 + 20, 10, 10);
				}
			}
		}
	}

	function drawMain(){
		context.lineWidth = 2;
		context.strokeStyle = 'black';
		context.strokeRect(2, 20, canvas.width - 4, canvas.height - 24);
		context.font = '12px sans-serif';
		context.fillText('Score: ' + score + ' - Level: ' + level, 2, 12);
	}

	function generateFood(map){
		var rndx = Math.round(Math.random() * 19),
			rndy = Math.round(Math.random() * 19);

		while (map[rndx][rndy] === 2) {
			rndx = Math.round(Math.random() * 19);
			rndy = Math.round(Math.random() * 19);
		}

		map[rndx][rndy] = 1;
		return map;
	}

	function generateSnake(map){
		var rndx = Math.round(Math.random() * 19),
			rndy = Math.round(Math.random() * 19);

		while ((rndx - snake.length) < 0) {
			rndy = Math.round(Math.random() * 19);
		}

		for (var i = 0; i < snake.length; i++) {
			snake[i] = { x: rndx - i, y: rndy };
			map[rndx - i][rndy] = 2;
		}
		return map;
	}

	function showGameOver(){
		context.clearRect(0, 0, canvas.width. canvas.height);
		context.fillStyle = 'black';
		context.font = '16px sans-serif';
		context.fillText('Game Over!', ((canvas.width / 2) - (context.measureText('Game Over!').width / 2)), 50);
		context.font = '12px sans-serif';
		//context.fillText('Your score was: ' + score, ((canvas.width / 2) - (context.measureText('Your score was; ' + score).width / 2)). 70);
	}

};
