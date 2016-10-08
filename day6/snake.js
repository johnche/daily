$(document).ready(function(){

	var canvas = $("#canvas")[0];
	var context = canvas.getContext("2d");
	var width = $("#canvas").width();
	var height = $("#canvas").height();
	var cellsize = 10;
	var xgrid = width/cellsize;
	var ygrid = height/cellsize;
	var direction;
	var score;
	var timer;
	var snake;
	var food;

	function init() {
		direction = "right";
		score = 0;
		create_snake();
		create_food();
		if (typeof timer == "undefined"){
			timer = setInterval(draw, 60);
		}
	}

	init();

	function create_snake() {
		var length = 5;
		snake = [];
		for (var i = length - 1; i >= 0; i--){
			snake.push({x: i, y: 0});
		}
	}

	function create_food() {
		food = {
			x: Math.round(Math.random() * (xgrid - 1)),
			y: Math.round(Math.random() * (ygrid - 1)),
		};
	}

	function wallcollision(x, y) {
		if(x == -1 || x == xgrid || y == -1 || y == ygrid) {
			return true;
		}
		return false;
	}

	function bodycollision(x, y) {
		for (var i in snake) {
			if (snake[i].x == x && snake[i].y == y) return true;
		}
		return false;
	}

	function draw() {
		context.fillStyle = "white";
		context.fillRect(0, 0, width, height);
		context.strokeStyle = "black";
		context.strokeRect(0, 0, width, height);
		move_snake();
		draw_snake();
		draw_cell(food.x, food.y); // draw_food
		score_text();
	}


	function move_snake(){
		var x = snake[0].x;
		var y = snake[0].y;
		if (direction == "right") x++;
		else if (direction == "left") x--;
		else if (direction == "up") y--;
		else if (direction == "down") y++;
		if (wallcollision(x, y) || bodycollision(x, y)){
			init();
			return;
		}
		snake_eats(x, y);
	}

	function snake_eats(snakex, snakey){
		var tail = {x: snakex, y: snakey};
		if (snakex == food.x && snakey == food.y) {
			score++;
			create_food();
		} else { snake.pop(); }
		snake.unshift(tail);
	}

	function draw_snake(){
		for (var i in snake){
			draw_cell(snake[i].x, snake[i].y);
		}
	}

	function draw_cell(x, y) {
		context.fillStyle = "blue";
		context.fillRect(x * cellsize, y * cellsize, cellsize, cellsize);
		context.strokeStyle = "white";
		context.strokeRect(x * cellsize, y * cellsize, cellsize, cellsize);
	}

	function score_text(){
		context.fillText("Score: " + score, 5, height - 5);
	}

	$(document).keydown(function(e) {
		var key = e.which;
		console.log(key);
		if (key == "37" && direction != "right") direction = "left";
		else if (key == "38" && direction != "down") direction = "up";
		else if (key == "39" && direction != "left") direction = "right";
		else if (key == "40" && direction != "up") direction = "down";
	});

});
