var cat, mouse;
//var catImg, mouseImg;
function preload() {
    //load the images here

    //catImg.loadImage("cat1.png")
    //mouseImg.loadImage("mouse1.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(800, 400, 100, 50);
//cat.addImage(catImg)

mouse = createSprite(500, 400, 30, 30);
mouse.shapeColor = "brown";
//mouse.addImage(mouseImg)
}

function draw() {
    background(0, 255, 255);
    //Write condition here to evalute if tom and jerry collide

cat.velocityX = -5;

if(cat.isTouching(mouse)){
    cat.velocityX = 0;
    mouse.shapeColor = "red";
}

console.log(frameCount);

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
