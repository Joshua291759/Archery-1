const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //create player base body
  playerBase = Bodies.rectangle(200, 400, 300, 150);

  //create player body
  player = Bodies.rectangle(345, 322, 50, 110);


}

function draw() {
  background(backgroundImg);

  //show the player image using image() function
image(baseimage, 200, 400, 300, 150);
  //show the playerbase image using image() function
  image(playerimage, 345, 322, 50, 110);


  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
