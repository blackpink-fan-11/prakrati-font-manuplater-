difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup() {
video = createCapture(VIDEO);
canvas = createCanvas(550, 550);
canvas.position(560,150);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}
function gotPoses(){
	if(results.length>0) {

	
    rightWristX = results[0].pose.rightWrist.x;
	rightWristY = results[0].pose.rightWrist.y;
	console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);

	leftWristX = results[0].pose.leftWrist.x;
	leftWristY = results[0].pose.leftWrist.y;
	console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
}}
function draw(){
	background('#6C91C2');
	document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference +"px";
	textSize(difference);
    fill('#FFE787');
    text('Peter', 50, 400);
}