var count = 0; // initialize a counter variable
function setup() {
        createCanvas(800, 300);
}
function draw() {
        background(1, 186, 240);
        // declaration of variables
        var x = width / 4;
        var y = height / 2;
        var size = 10 + count; 
        // circle 1
        fill(30, 250, 20);
        noStroke();
        ellipse(x, y, size, size);
        // circle 2
        fill(9, 88, 187);
        ellipse(x + 220, y, size *3, size*3);
        count = count + 0.5; // increment the counter variable
}
