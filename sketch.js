// water rise/fall
let waterLevel = 100; //high tide
let waterDirection = 1;


function setup() {
  createCanvas(600, 1600);
}

//sky
function draw() {
strokeWeight(0);
background(150, 230, 255)
  
//water
fill(0,130,150);
rect(0, waterLevel, width, height - waterLevel);
  
//sand
fill(230, 200, 160);
rect(0, 1550, width, 50);
  
//water hours
let hightide = 100
let lowtide = 400
  
// fish position
let fishX = map(second(),0,60,0,width); //fish swimming
let fishY = waterLevel + 30

//school of fish (minutes)
var z = 0
for (z = 0; z < minute(); z++) {
  let fishY = waterLevel + 30 + z * 18

// fish
fill(255, 150, 0)
ellipseMode(CENTER);
ellipse(fishX, fishY, 23, 15);
triangle(fishX, fishY, fishX-20, fishY+8, fishX-20, fishY-8)
fill(0)
ellipse(fishX+4, fishY-2, 4, 4)

//hour ticks
rect (0, 100, 5, 2);
rect (0, 150, 5, 2);
rect (0, 200, 5, 2);
rect (0, 250, 5, 2);
rect (0, 300, 5, 2);
rect (0, 350, 5, 2);
rect (0, 400, 5, 2);
  
  
//hour tide
if (hour() === 0)
  waterLevel = 100
if (hour() === 1)
  waterLevel = 150
if (hour() === 2)
  waterLevel = 200
if (hour() === 3)
  waterLevel = 250
if (hour() === 4)
  waterLevel = 300
if (hour() === 5)
  waterLevel = 350
if (hour() === 6)
  waterLevel = 400
if (hour() === 7)
  waterLevel = 350
if (hour() === 8)
  waterLevel = 300
if (hour() === 9)
  waterLevel = 250
if (hour() === 10)
  waterLevel = 200
if (hour() === 11)
  waterLevel = 250
if (hour() === 12)
  waterLevel = 100
if (hour() === 13)
  waterLevel = 150
if (hour() === 14)
  waterLevel = 200
if (hour() === 15)
  waterLevel = 250
if (hour() === 16)
  waterLevel = 300
if (hour() === 17)
  waterLevel = 350
if (hour() === 18)
  waterLevel = 400
if (hour() === 19)
  waterLevel = 350
if (hour() === 20)
  waterLevel = 300
if (hour() === 21)
  waterLevel = 250
if (hour() === 22)
  waterLevel = 200
if (hour() === 23)
  waterLevel = 250
}
}