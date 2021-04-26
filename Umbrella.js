class Umbrella {
    constructor(x, y) {
      var options = {
        'restitution':0.8,
        'friction':0.1,
        'density':1.0
    }
        this.body = Bodies.circle(x, y,radius,options);
        this.image = loadImage("walking_1.png");
        
        World.add(world, this.body);
      }
      display(){
        
        push() 
        translate(this.body.position.x, this.body.position.y);
        image(this,image,0,0,this.radius);
        pop();
      }
}