class slingshot {
    constructor(body1, point2){
        var options = {
            bodyA : body1,
            pointB : point2,
            stiffness : 0.03,
            length : 25
        }
        this.sling= Matter.Constraint.create(options)
        World.add(world, this.sling);

        //this.image1= loadImage("sprites/sling1.png")
        // this.image2= loadImage("sprites/sling2.png")
        // this.image3= loadImage("sprites/sling3.png")
    }

    display(){

        // image(this.image1, 228,80,40,140)
        // image(this.image2, 200,80,40,80)
        
        if(this.sling.bodyA)
        {
        var startxy= this.sling.bodyA.position;
        var endxy= this.sling.pointB;
        push()
        strokeWeight(3);
        line(startxy.x,startxy.y,endxy.x,endxy.y);
        pop()
        }
    
        
    }
    fly()
    {
        this.sling.bodyA= null;
    }

    attach(BodyA)
    {
      this.sling.bodyA= BodyA;
    }

}
