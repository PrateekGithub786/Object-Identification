img = "";

function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(600, 400);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 600, 400);
    text("Dog", 50, 80);
    stroke("#FF0000");
    noFill();
    rect(30, 60 , 400, 330)
}