
RightWristX = 0;
RightWristY = 0;
LeftWristX = 0;
LeftWristY = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500)
    
    canvas = createCanvas(550, 550);
    canvas.positon(560,150);
    

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('Pose Net Is Initialized!!');
}