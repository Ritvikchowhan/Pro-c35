var ball;

function preload(){
    backgroundimg = loadImage("images/Hot Air Ballon-01.png");
    airballon = loadAnimation("images/Hot Air Ballon-02.png");
}
function setup(){
    createCanvas(500,500);
    database=firebase.database();
    ball = createSprite(250,250,10,10);
    ball.addAnimation("air ballon",airballon);
    ball.scale=0.3;
    readlocation=database.ref("ball/position");
    readlocation.on("value",readposition,showerror);
}



function draw(){
    background(backgroundimg);
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref("ball/position").set(
        {
          x:ball.x + x,
          y:ball.y + y




        }
    );
    
}

function readposition(data){
readvalue = data.val();
ball.x = readvalue.x;
ball.y = readvalue.y;
}

function showerror(){
console.log("error");


}