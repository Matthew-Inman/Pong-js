var Score = function(){
  this.player1Score = 0;
  this.player2Score = 0;

  this.show = function(){
    textSize(20);
    textAlign(LEFT, CENTER);
    fill(255);
    text("Score :" + this.player1Score, 20, 20);
    text("Score :" + this.player2Score, width - 100, 20);
    if (ball.x < 1){
      this.player2Score ++;
    }
     if (ball.x > width-1){
      this.player1Score ++;
    }
  }
}
