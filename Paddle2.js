var Paddle2 = function(){
     this.w = 16;
     this.h = 90;
     this.x = width-this.w/2;
     this.y = height/2;
     this.ySpeed = 7;

     this.show = function(){
          fill(255);
          rectMode(CENTER);
          rect(this.x, this.y, this.w, this.h);
     };

     this.move = function(){
          //resets paddle if ball goes off canvas
          if (ball.x < 0 || ball.x > width){
            this.y = height/2;
          }

          // if ball is going down
          if (ball.ySpeed > 0) {
            //if ball is under paddle
            if (ball.y > this.y) {
              this.y += this.ySpeed;
            } 
            // if ball is over paddle
            else if (ball.y <= this.y) {
              this.y -= this.ySpeed;
            }
          }
          // if ball is going up
          else if (ball.ySpeed <= 0) {
              // if ball is over paddle
              if (ball.y < this.y) {
                this.y -= this.ySpeed;
              }
              //if ball is under paddle
              else if (ball.y >= this.y) {
                this.y += this.ySpeed;
              }
            }
          };
          //artificial intelligence controlled Paddle2
          // if (ball.ySpeed < 0 && this.y > this.h/2){
          //   this.y = ball.y;
          // } else if
          //   (ball.ySpeed >= 0 && this.y < height - this.h/2){
          //   this.y = ball.y;
          // }

          //The next 6 lines are for player controlled Paddle2
          // if (keyIsPressed && keyCode === UP_ARROW && this.y > this.h/2){
            //      this.y -= this.ySpeed;
          // }
          // if (keyIsPressed && keyCode === DOWN_ARROW && this.y < height - this.h/2){
          //      this.y += this.ySpeed;
          // }
};