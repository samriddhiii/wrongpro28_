class stone {
    constructor(x,y,radius) {
      var options = {
        isStatic: false,
        restitution: 0,
        friction: 1,
        density: 1.2
      }
      this.body = Bodies.circle(x,y,radius/2,options);
      this.r = radius;
      this.image = loadImage("images/stone.png");
      World.add(world, this.body);
    }
    display(){
      var position =this.body.position;
      image(this.image,position.x,position.y,this.r+10,this.r+10)
    }
  };