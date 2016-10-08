window.onload = function(){

	var door1;
	var door2;
	var door3;
	var firstChance = true;

	function init(){
		resetDoors();
		setDoors();
		firstChance = true;
	}

	function setDoors(){
		var realdoor = Math.floor((Math.random() * 3) + 1);
		document.getElementById("textbox").innerHTML = realdoor;
		
		switch(realdoor){
			case 1:
				door1 = true;
				break;
			case 2:
				door2 = true;
				break;
			case 3:
				door3 = true;
				break;
		}
	}

	function resetDoors(){
		door1 = false;
		door2 = false;
		door3 = false;
	}

	function correctDoor(){
		document.getElementById("textbox").innerHTML = "clap clap, congratulationavistahastalabyebye! see you never again";
		$(".door1").slideUp();
		$(".door2").slideUp();
		$(".door3").slideUp();
		$(".reset").slideUp();
	}

	function secondChance(somedoor1, somedoor2, doorname1, doorname2){
		firstChance = !firstChance;
		if (!somedoor1){
			$(doorname1).slideUp();
			chanceMessage();
		} else {
			$(doorname2).slideUp();
			chanceMessage();
		}
	}


	function chanceMessage(){
		document.getElementById("textbox").innerHTML = "Well, what if I told you that the vanished button actually was a bummer? Would that change your mind?";
	}

	function lose(){
		document.getElementById("textbox").innerHTML = "Yeah, thats a goat, you lost";
		$(".door1").slideUp();
		$(".door2").slideUp();
		$(".door3").slideUp();
	}

	$('.reset').click(function() {
		$(".door1").slideDown();
		$(".door2").slideDown();
		$(".door3").slideDown();
		init();
	});

	$('.door1').click(function() {
		console.log(firstChance);
		if (firstChance){
			secondChance(door2, door3, ".door2", ".door3");
		} else if (door1){
			correctDoor();
		} else {
			lose();
		}
	});

	$('.door2').click(function() {
		if (firstChance){
			secondChance(door1, door3, ".door1", ".door3");
		} else if (door2){
			correctDoor();
		} else {
			lose();
		}
	});

	$('.door3').click(function() {
		if (firstChance){
			secondChance(door1, door2, ".door1", ".door2");
		} else if (door3){
			correctDoor();
		} else {
			lose();
		}
	});

	init();

};
