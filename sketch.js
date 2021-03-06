var starImg, fairyImg, bgImg;
var fairy, fairyVoice; 
var star, starBody;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice =loadsound("sound/JoyMusic.mmp3");
	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyoice sound

	//create fairy sprite and add animation for fairy

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);
	fairy.scale = 0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	star.x= starBody.position.x
	star.y= starBody.position.y
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(starBody.position.x);
  fairyVoice.play();
  Engine.update(engine);
  drawSprites();


  //write code to stop star in the hand of fairy

  drawSprites();

}

function keyPressed() {

	if (keyCode === RIGHT_ARROW) {
		fairy.x = fairy.x + 20; 
	}

	if(keyCode === LEFT_ARROW)
	    {  fairy.X = fairy.x - 20; }
	    
        if(keyCoad === DOWN_ARROW)
		{  Matter.Body.setStatic(starBody,false); }

		if(starBody.position.y > 650){


		}
    }



	//writw code to move fairy left and right
	

