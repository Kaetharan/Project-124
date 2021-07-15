function setup(){
    canvas=createCanvas(400,400);
    canvas.position(550, 150);
    video=createCapture(VIDEO);
    video.size(400,400);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background('#808080');
}

function modelLoaded(){
    console.log("Model Loaded");
}

function gotPoses(results){
    if(results.length>0){
    console.log(results);
    }
}