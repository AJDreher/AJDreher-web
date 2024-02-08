function setup() {
  createCanvas(400, 400);
  
  firstInput = createInput("0","number").size(40,20);
  firstInput.position(80, 300);
  
  secondInput = createInput("0","number").size(40,20);
  secondInput.position(100, 330);
  
  thirdInput = createInput("10","number").size(40,20);
  thirdInput.position(90,360);
  
  firstInputLabelPrefix = createElement('p', 'Latitude is');
  firstInputLabelPrefix.position(
    firstInput.x - 70,
    firstInput.y - 10);
  
  secondInputLabelPrefix = createElement('p', 'Longitude is');
  secondInputLabelPrefix.position(
    secondInput.x - 90,
    secondInput.y - 10);
  
  thirdInputLabelPrefix = createElement('p', 'Elevation is');
  thirdInputLabelPrefix.position(
    thirdInput.x - 80,
    thirdInput.y - 10);
  
  thirdInputLabelUnits = createElement('p', 'feet');
  thirdInputLabelUnits.position(
    thirdInput.x + 50,
    thirdInput.y - 10);
  
}

var lat
var long
var dataValue

// var lat = -80; //between -90 and 90... for testing
// var long = 120; //between -180 and 180... for testing
// var dataValue = -15; // greater than or equal to 0... for testing

function draw() {
        
  background(255);
  
  lat = Number(firstInput.value(), 10);
  long = Number(secondInput.value(), 10);
  dataValue = Number(thirdInput.value(), 10);
  
  var x = long+180;
  var y = 90-lat;
  
  if (lat<-90 || lat>90 || long<-180 || long>180 || dataValue<0) {
    return;
  }
  
  if (dataValue <= 0) {
    stroke(255,0,0);
    line(x-10, y-10, x+10, y+10);
    line(x-10, y+10, x+10, y-10);
    return;
  }
  
  if ((dataValue > 0)&&(dataValue<=100)) {
		fill(0,0,0);
        stroke(0,0,0);
        var circleWidth = 5;
  }
  else if ((dataValue >100)&&(dataValue <=200)) {
        fill(0,0,0);
        stroke(0,0,0);
        var circleWidth = 10;
  }
  else if (dataValue >200) {
        fill(0,0,0);
        stroke(0,0,0);
        var circleWidth = 15;	
  }
  
  ellipse(x, y, circleWidth, circleWidth);
        
}