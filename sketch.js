var canvas;
var music;
var surface1;
var surface2;
var surface3;
var surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
     box= createSprite(random(20,750),100,100,20);
     box.shapeColor= "white";
     box. velocityX = 3;
     box. velocityY = -2;
    edges= createEdgeSprites()
    
     surface1 = createSprite(100,580,200,20);
     surface1.shapeColor= "red";
     
     surface2= createSprite(300,580,200,20);
     surface2.shapeColor= "green";

     surface3= createSprite(500,580,200,20);
     surface3.shapeColor= "yellow";

     surface4= createSprite(700,580,200,20);
     surface4.shapeColor= "orange";
    

     

     
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    box.bounceOff(edges);
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
       box.shapeColor="red"
    }
 
    if(surface2.isTouching(box) && box.bounceOff(surface2)){
       box.shapeColor="green"
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor="yellow"
     }

     if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor="orange"
     }



drawSprites();
    //add condition to check if box touching surface and make it box
}
