//Create a reference for canvas 
canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
//Give specific height and width to the car image
carx = 40
cary = 50
carWidth = 75
carHeight = 100
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
 bgTag = new Image()
    bgTag.onload = uploadBackground;
    bgTag.src = background_image

    carTag = new Image()
    carTag.onload = uploadgreencar;
    carTag.src =greencar_image 

	//upload car, and background images on the canvas.
}


function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage(bgTag,0,0,canvas.width,canvas.height)
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
ctx.drawImage(carTag,carx,cary,carWidth,carHeight)
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if (cary>0) {
		cary-=10
		uploadBackground()
		uploadgreencar()
	}
}

function down()
{
	//Define function to move the car downward
	if (cary<300) {
		cary+=10
		uploadBackground()
		uploadgreencar()
	}
}

function left()
{
	//Define function to move the car left side
	if (carx>0) {
		carx-=10
		uploadBackground()
		uploadgreencar()
	}
}

function right()
{
	//Define function to move the car right side
	if (carx<700) {
		carx+=10
		uploadBackground()
		uploadgreencar()
	}
}
