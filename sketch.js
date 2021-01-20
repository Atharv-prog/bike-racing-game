var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

function preload() {
  track = loadImage("track.jpg");
  car1_img = loadImage("images/bike1.png");
  car2_img = loadImage("images/yellow_motorbike.png");
  car3_img = loadImage("images/red_motorbike.png");
  car4_img = loadImage("images/bike1.png");
  ground = loadImage("ground.png");
  bike1_img = loadImage("images/bicycle.png");
  audi_img = loadImage("images/audi.png");
  rolls_img = loadImage("images/rolls.png");
  bmw_img = loadImage("images/bmw.png")
  truck_img = loadImage("images/truck.png")
}

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  bike1_img.scale = 0.5;
  audi_img.scale = 0.5;
  rolls_img.scale = 0.5;
}

function draw() {
  if (playerCount === 4) {
    game.update(1);
  }
  if (gameState === 1) {
    clear();
    game.play();
  }
  if (gameState === 2) {
    game.end();
  }
}
