class Drops {
    constructor(x, y) {
      var options = {
        'restitution':0.8,
        'friction':0.1,
        'density':1.0
    }
        this.body = Bodies.circle(x, y,radius,options);
        
        World.add(world, this.body);
      }
      display(){
        
        push() 
        translate(this.body.position.x, this.body.position.y);
         
         if (this.rain.y > height) {
           Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
         }
        for (var i =0 ;i<maxDrops; i++){
            drops.push(new createDrop(random(0,400),random(0,400)));
        }

        
        


        
       
        
        
        pop();
      }
}