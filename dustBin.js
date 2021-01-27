class DustBin {
    constructor(x, y) {
      var options = {
        
        
          isStatic : true
        }
        this.image = loadImage("dustbingreen.png")
      this.body = Bodies.rectangle(x, y, 100, 200, options);
      
      this.width = 100;
      this.height = 200;

      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      
      imageMode(CENTER);
      fill(255);
      strokeWeight(4);
      stroke("green")
      image(this.image,pos.x,pos.y, this.width, this.height);
      

    }
  };