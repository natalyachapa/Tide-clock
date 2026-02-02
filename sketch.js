// water rise/fall
let waterLevel = 100; //high tide
let waterDirection = 1;


function setup() {
  createCanvas(600, 600);
}

//sky
function draw() {
strokeWeight(0);
background(150, 230, 255);

  
//sand
fill(230, 200, 160);
rect(0, 550, width, 50);
  
  
//water
fill(0,130,150);
rect(0, waterLevel, width, height - waterLevel);

waterLevel = waterLevel + waterDirection;
if (waterLevel > 400)
  waterDirection = -1
  
if (waterLevel < 100)
  waterDirection = 1
  
// fish position
let fishX = width/2
let fishY = waterLevel + 30

// fish
fill(255, 150, 0)
ellipseMode(CENTER);
ellipse(fishX, fishY, 23, 15);
triangle(fishX, fishY, fishX-20, fishY+8, fishX-20, fishY-8)
fill(0)
ellipse(fishX+4, fishY-2, 4, 4)

// fish swimming
let fishStart = -1;
let fishStartX = 0;
let fishStartY = 0;
let realMinute = minute();
  
if
  
}