function IsTouching(obj1,obj2){
    if(obj1.x - obj2.x < obj2.width/2 + obj1.width/2 &&
        obj2.x - obj1.x < obj2.width/2 + obj1.width/2 &&
        obj1.y - obj2.y < obj1.height/2 + obj2.height/2 &&
        obj2.y - obj1.y < obj1.height/2 + obj2.height/2){
        return true;
      }
        else{
          return false;
        }
}

function BounceOff(ball,obj2){
    if(ball.x - obj2.x < obj2.width/2 + ball.width/2 &&
        obj2.x - ball.x < obj2.width/2 + ball.width/2){
          ball.velocityX = ball.velocityX * (-1);
        }   
     if(ball.y - obj2.y < ball.height/2 + obj2.height/2 &&
        obj2.y - ball.y < ball.height/2 + obj2.height/2){
        ball.velocityY = ball.velocityY *(-1);
      }
}
