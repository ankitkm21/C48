var b=0
var c=0
var gameState =0;
var playerCount = 0;
var allPlayers;
var database;
var player, form

function setup() {
  createCanvas(1200, 600);

  database = firebase.database();

  game=new Game()
  game.start();
  
}

function draw() {
  Dots();
  textSize(20);
fill("#A40CA8")  
text("Scores:",1100,50);
text("_____________",1060,50);
text("Scores:",1050,100);
text("Scores:",1050,150);

if(gameState===0){

  
}

}

function Dots(){
  
  for(var i=0;i<170;i++){
    b=b+60
    if(i%17===0){
      c=c+40
      b=-20
    }
    if(c<600){
      d=createSprite(b, c, 5,5);
    }  
  }

}

function lines(){

}