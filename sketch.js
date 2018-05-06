var ball;
var paddle1;
var paddle2;
var score;
var currentScene = 0;
var playerWinScore = 5;


function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  ball = new Ball();
  paddle1 = new Paddle1();
  paddle2 = new Paddle2();
  score = new Score();
}

var play = function(){
    currentScene = 1;
    background(0);
    for (var i = 0; i < 20; i++){
      stroke(255);
      line(width/2, i*40 + 7.5, width/2, i*40 + 22.5)}
      ball.show();
      ball.move();
      paddle1.show();
      paddle1.move();
      paddle2.show();
      paddle2.move();
      score.show();
}

var mainScreen = function(){
  background(0);
  fill(255);
  textSize(40);
  textAlign(CENTER, CENTER);
  text("WELCOME TO", width/2, height/3);
  textSize(60);
  text("PONG !", width/2, height/2);
  textSize(20);
  text("Press Spacebar to play", width/2, height*4/5);
  //text("First player to " + playerWinScore + " points wins!", width/2, height*4/5 + 40)
  if(keyIsPressed && keyCode === 32){
    currentScene = 1;
  }
}

var leftPlayerWinScreen = function(){
  textSize(50);
  fill(255);
  textAlign(CENTER, CENTER);
  text("Left Player Wins!", width/2, height/2);
  textSize(20);
  text("Press Spacebar to restart", width/2, height*4/5);
};

var rightPlayerWinScreen = function(){
  textSize(50);
  fill(255);
  textAlign(CENTER, CENTER);
  text("Right Player Wins!", width/2, height/2);
  textSize(20);
  text("Press Spacebar to restart", width/2, height*4/5);
};

function draw() {
  background(0);
  if (currentScene === 0){
  mainScreen();
  } else if (currentScene === 1){
  play();
  }
  if (score.player1Score >= playerWinScore){
    background(0);
    leftPlayerWinScreen();
    if(keyIsPressed && keyCode === 32){
      score.player1Score = 0;
      score.player2Score = 0;
      currentScene = 1;
    }
  }else if (score.player2Score >= playerWinScore){
    background(0);
    rightPlayerWinScreen();
    if(keyIsPressed && keyCode === 32){
      score.player1Score = 0;
      score.player2Score = 0;
      currentScene = 1;
    }
  }
}
