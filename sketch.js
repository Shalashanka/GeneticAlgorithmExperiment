function setup() {
  createCanvas(windowWidth-50, windowHeight-50);
  player = new Player();
  food = new Food();
  frameRate(120);
}

function draw() {
	player.draw();
	food.draw();
	player.checkEat();
	player.checkMarginDistance();
}


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    player.moveXLeft();
  } else if (keyCode === RIGHT_ARROW) {
    player.moveXRight();
  }else if (keyCode === UP_ARROW) {
    player.moveYUp();
  }else if (keyCode === DOWN_ARROW) {
    player.moveYDown();
  }
  
}


function randomDirection(){
	var X;
	var Y;
	
	if(player.directionX === "Left" || player.directionX === "Right"){
		X = int(random(0,2));

		if( X === 0){
			player.moveYDown();

		}else if(X === 1){
			player.moveYUp();

		}
	}else if(player.directionY === "Up" || player.directionY === "Down"){
		Y = int(random(0,2));
		if( Y === 0){
			player.moveXLeft();

		}else if(Y === 1){
			player.moveXRight();

		}
	}		
	
}
function Food(){
	this.x = random(windowWidth);
	this.y = random(windowHeight);
	this.diameter = random(15,25);
	
	this.draw = function(){
		ellipse(this.x,this.y,this.diameter,this.diameter);
	};
	this.respawn = function(){
		this.x = random(windowWidth);
		this.y = random(windowHeight);
	};
	this.getDiameter = function(){
		return this.diameter;
	};
	this.getX = function(){
		return this.x;
	};
	this.getY = function(){
		return this.y;
	};
}
  
 function Player(){
	this.x = windowWidth/2 //random(width);
	this.y = windowHeight/2 //random(height);
	this.diameter = 50 //random(10, 30);
	this.speed = 5;
	this.probability = int(random(0,10));
	this.directionX;  
	this.directionY;  
	this.viewDistance = 15;
	
	this.moveXLeft = function() {
		this.x -= this.speed;
		this.directionX = "Left";
		this.directionY = "";
	};
	this.moveXRight = function() {
		this.x += this.speed;
		this.directionX = "Right";
		this.directionY = "";
	};
	this.moveYUp = function() {
		this.y -= this.speed;
		this.directionY = "Up";
		this.directionX = "";
	};
	this.moveYDown = function() {
		this.y += this.speed;
		this.directionY = "Down";
		this.directionX = "";
	};
	
	this.draw = function (){
		clear();
		ellipse(this.x,this.y,this.diameter,this.diameter);
		if(this.directionX === "Left"){
			this.moveXLeft();
			this.directionY = "";
		}else if(this.directionX === "Right"){
			this.moveXRight();
			this.directionY = "";
		}else if(this.directionY === "Up"){
			this.moveYUp();
			this.directionX = "";
		}else if(this.directionY === "Down"){
			this.moveYDown();
			this.directionX = "";
		}
		if(this.probability === 6){
			randomDirection();
		}
		this.probability = int(random(0,10));
	};
	this.checkMarginDistance = function(){
		var centerDistanceX;
		var centerDistanceY;
		
		centerDistanceX = abs(int(windowWidth/2 - this.x));
		centerDistanceY = abs(int(windowHeight/2 - this.y));
		console.clear();
		console.log("X :" + centerDistanceX);
		console.log("Y :" + centerDistanceY);
	};
	this.checkEat = function(){
		var distanceX = abs(food.getX() - this.x);
		var distanceY = abs(food.getY() - this.y);
		var distance = sqrt((distanceY*distanceY) + (distanceX*distanceX));
		var sumDiameter = food.getDiameter()/2 + this.diameter/2;
		
		if(distance <= sumDiameter){
			food.respawn();
		}		
	};
	
	/*this.seekAndDestroy = function(){
		if(directionX
	};*/
	
 }