var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(950,630);

    block1 = createSprite(140,600,200,30);
    block1.shapeColor = "blue";

    block2 = createSprite(360,600,200,30);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here

    block3 = createSprite(580,600,200,30);
    block3.shapeColor = "yellow";

    block4 = createSprite(800,600,200,30);
    block4.shapeColor = "red";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityY= 5;
    ball.velocityX = -5;

    edges=createEdgeSprites();
}

function draw() {
    background(rgb(169,169,169));
    
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(IsTouching(ball,block1)){
        BounceOff(ball,block1)
        ball.shapeColor = "blue";
        music.play();
    }



    if(IsTouching(ball,block2)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0
        ball.velocityX = 0;
        ball.velocityY = 0;
        //write code to stop music
        music.stop();
    }

    //write code to bounce off ball from the block3
    if(IsTouching(ball,block3)){
        BounceOff(ball,block3)
        ball.shapeColor = "yellow";
        music.play();
    }

    //write code to bounce off ball from the block4
    if(IsTouching(ball,block4)){
        BounceOff(ball,block4)
        ball.shapeColor = "red";
        music.play();
    }
    drawSprites();
}

