
class Dart{
    constructor(x,y,radius){
        var options={
            isStatic:false
        }
        
        this.body=Bodies.circle(x,y,20,options)
        this.radius=20
        this.image=loadImage("nindart.png")
        this.smokeImage = loadImage("smoke.png");
        this.trajectory =[];
        this.Visibility = 255;
        World.add(world,this.body)
        console.log(this.body.speed)
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        fill("yellow");
        image(this.image,pos.x, pos.y, this.radius,this.radius);
          for(var i=0; i<this.trajectory.length; i++){
      push();
      this.Visibility = this.Visibility - 0.5;
      tint(255,this.Visibility);
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
      pop();
    }
    }
    }
    