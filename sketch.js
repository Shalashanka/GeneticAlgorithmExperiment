var vector = [];
function setup() {
  createCanvas(windowWidth-20, windowHeight-20);
  player = new Player();
  food = new Food();
  frameRate(120);
}

function draw() {
	player.draw();
	//food.draw();
	//player.checkEat();
	//player.checkMarginDistance();
	bordersStop();
	
}

function Vector(){
	this.x;
	this.y;
	
	this.getX = function(){
		return this.x;
	}
	this.getY = function(){
		return this.y;
	}
	this.setX = function(xcopy){
		this.x = xcopy;
	}
	this.setY = function(ycopy){
		this.y = ycopy;
	}
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
  }else if(keyCode === 107){
	  player.speed += 2;
  }else if(keyCode === 109){
	  player.speed -= 2;
  }
}

function addVect(){
	vect = new Vector();
	vect.setX(player.x);
	vect.setY(player.y);
	vector.push(vect);
	displayVect();
}

function displayVect(){
	for (var i=0; i<vector.length; i++) {
		fill(255);
		noStroke();
		ellipse(vector[i].getX(),vector[i].getY(),player.diameter,player.diameter);
		stroke(0);
		fill(0);
		//fill(255,0,0);
	}
}

function bordersStop(){

	this.distanceXLeft = player.x - (player.diameter / 2) - 5;
	this.distanceXRight = windowWidth - (player.x + (player.diameter));
	this.distanceYUp = player.y - (player.diameter / 2) - 5;
	this.distanceYDown = windowHeight - (player.y + (player.diameter));
	this.direction;
	
	if(player.directionX != ""){
		this.direction = player.directionX;
	}else if(player.directionY != ""){
		this.direction = player.directionY;
	}
	
	switch(this.direction){
		case "Left":
			if(this.distanceXLeft <= 0){
				//player.stop();
				player.x = player.diameter / 2 +  1;
				randomDirection();
			}
			break;
		case "Right":
			if(this.distanceXRight <= 0){
				//player.stop();
				player.x = windowWidth - (player.diameter);
				randomDirection();
			}
			break;
		case "Up":
			if(this.distanceYUp <= 0){
				//player.stop();
				player.y = player.diameter / 2 + 1 ;
				randomDirection();
			}
			break;
		case "Down":
			if(this.distanceYDown <= 0){
				//player.stop();
				player.y = windowHeight - (player.diameter);
				randomDirection();
			}
			break;	
	}

}

function drawHead(direction){
	this.x;
	this.y;
	this.diameter = 10;
	
	if(direction === "Up"){
		this.x = player.x;
		this.y = player.y - 25;
		ellipse(this.x,this.y,this.diameter,this.diameter);
	}else if(direction === "Down"){
		this.x = player.x;
		this.y = player.y + 25;
		ellipse(this.x,this.y,this.diameter,this.diameter);
	}else if(direction === "Right"){
		this.x = player.x + 25;
		this.y = player.y ;
		ellipse(this.x,this.y,this.diameter,this.diameter);
	}else if(direction === "Left"){
		this.x = player.x - 25;
		this.y = player.y ;
		ellipse(this.x,this.y,this.diameter,this.diameter);
	}
}


function randomDirection(){
	var X;
	var Y;
	var probability;
	
	if(player.directionX === "Left" || player.directionX === "Right"){
		probability = int(random(0,10));
		if(probability === 3){
			X = int(random(0,2));

			if( X === 0){
				player.moveYDown();

			}else if(X === 1){
				player.moveYUp();

			}
		}
	}else if(player.directionY === "Up" || player.directionY === "Down"){
		probability = int(random(0,10));
		if(probability === 5){
			Y = int(random(0,2));
			if( Y === 0){
				player.moveXLeft();

			}else if(Y === 1){
				player.moveXRight();

			}
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
	this.stop = function(){
		this.directionX = "";
		this.directionY = "";
	}
	
	
	this.draw = function (){
		//clear();
		background(255, 165, 48); 
		addVect();
		strokeWeight(4);
		stroke(0);
		fill(57);
		ellipse(this.x,this.y,this.diameter,this.diameter,50);
		strokeWeight(2);
		if(this.directionX != ""){
			drawHead(this.directionX);
		}else if(this.directionY != ""){
			drawHead(this.directionY);
		}
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