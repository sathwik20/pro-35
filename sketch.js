var balloon,balloonImage1,balloonImage2;

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png","hotairballoon2.png","hotairballoon3.png");
  
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
console.log(database)
  createCanvas(500,500);


  balloon=createSprite(100,400,20,20);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.4

 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
   
balloon.x=balloon.x-10
  }
  else if(keyDown(RIGHT_ARROW)){
    
    balloon.x=balloon.x+10
  }
  else if(keyDown(UP_ARROW)){
    
    balloon.x=balloon.y-10
  }
  else if(keyDown(DOWN_ARROW)){
    
    balloon.x=balloon.y+10
  }

  drawSprites();
}