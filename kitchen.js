function preload(){
    img = loadImage("kitchen.jpg");
}

function setup(){
    canvas = createCanvas(600, 400);
    canvas.center();
    objectDetect = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";
}

function modelLoaded(){
    console.log("Model Loaded");
    status = true;
    objectDetect.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error)
    }
    console.log(results);
}

function draw(){
    image(img, 0, 0, 600, 400);
}