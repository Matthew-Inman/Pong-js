var Ball = function(){
     this.x = width/2;
     this.y = height/2;
     this.d = 20; //diameter
     this.initial_y_speed = random(-7, 7);

     this.x_starting_speeds = [-10, 10];

     this.get_starting_x_speed = function() {
       let random_number = Math.floor(random(this.x_starting_speeds.length));
       return this.x_starting_speeds[random_number];
     }

     this.xSpeed = this.get_starting_x_speed();
     this.ySpeed = this.initial_y_speed;

     this.yAcceleration = 10; // when ball hits edges of paddle

     this.show = function(){
          fill(255);
          noStroke();
          ellipse(this.x, this.y, this.d, this.d);
     }

     this.move = function(){
          //strict ball movement
          this.x = this.x + this.xSpeed;
          this.y = this.y + this.ySpeed;

          //paddle1 collision detection
          if (this.x - this.d/2 <= paddle1.w && this.y >= paddle1.y-paddle1.h/2
            && this.y <= paddle1.y + paddle1.h/2){
              // if ball hits bottom part of paddle
              if (this.y < paddle1.y + paddle1.h/2 && this.y > (paddle1.y + paddle1.h/2) - paddle1.h/5) {
                this.ySpeed += this.yAcceleration;
              } 
              // if ball hits top part of paddle
              else if ((this.y >= paddle1.y-paddle1.h/2 && this.y < (paddle1.y - paddle1.h/2) + paddle1.h/5)) {
                this.ySpeed -= this.yAcceleration;
              }
              this.xSpeed = -this.xSpeed;
          }
          //paddle2 collision detection
          if (this.x + this.d/2 >= paddle2.x - paddle2.w/2 && this.y >= paddle2.y - paddle2.h/2
            && this.y <= paddle2.y + paddle2.h/2){
              if (this.y < paddle2.y + paddle2.h/2 && this.y > (paddle2.y + paddle2.h/2) - paddle2.h/5) {
                this.ySpeed += this.yAcceleration;
              } 
              else if ((this.y >= paddle2.y-paddle2.h/2 && this.y < (paddle2.y - paddle2.h/2) + paddle2.h/5)) {
                this.ySpeed -= this.yAcceleration;
              }
               this.xSpeed = -this.xSpeed;
          }

          //so that the ball reverses on right side of canvas (if there is no paddle2)
          //if (this.x + this.d/2 >= width){
          //     this.xSpeed = -this.xSpeed;
          //}

          //top and bottom of canvas collision detection
          if (this.y > height - this.d/2 || this.y < 0 + this.d/2){
               this.ySpeed = -this.ySpeed;
          }
          //to reset ball at center
          if (this.x < 0 || this.x > width){
               this.x = width/2;
               this.y = height/2;
               this.xSpeed = this.get_starting_x_speed();
               this.ySpeed = this.initial_y_speed;
          }
     }
}
