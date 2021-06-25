var dataBase;
var playerCount = 0;
var player;
var form, game;
var gameState = 0;  
var angel, devil, battleField,selection, selectionimg;

function preload(){
  angel = loadImage("Images/Aanggeul.png");
  devil = loadImage("Images/ZeDuevil.png");
  battleField = loadImage("Images/Battlefield.png");
  selectionimg = loadImage("Images/Selection.png");
}

function setup(){
  database = firebase.database();
  createCanvas(windowWidth - 20, windowHeight - 50);
  game = new Game()
  game.getState();
  game.start();
}


function draw(){
  //background("red");
  if(playerCount === 2){
    game.update(1);
  }
  /*if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
      game.end();
  }*/
    drawSprites();
  
}