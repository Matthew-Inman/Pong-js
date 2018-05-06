var Paddle1 = function(){
     this.w = 16;
     this.h = 90;
     this.x = this.w/2;
     this.y = height/2;
     this.ySpeed = 7;

     this.show = function(){
          fill(255);
          rectMode(CENTER);
          rect(this.x, this.y, this.w, this.h);
     }

     this.move = function(){
          if (keyIsPressed && keyCode === UP_ARROW && this.y > this.h/2){
               this.y -= this.ySpeed;
          }
          if (keyIsPressed && keyCode === DOWN_ARROW && this.y < height - this.h/2){
               this.y += this.ySpeed;
          }
     }
}
