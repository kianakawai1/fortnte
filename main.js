function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(100, 500)
    
    canvas = createCanvas(550, 700);
    canvas.position(600, 70);
    
    poseNet = ml5.poseNet(video, modelLoaded());
    
    poseNet.on('pose', gotPoses); 
    }
    
    function draw(){
    background("#939be2");
    }
    
    function modelLoaded(){
    console.log("loaded");
    }
    
    function gotPoses(results){
    if(results.lenght > 0){
        console.log(results);
    }}