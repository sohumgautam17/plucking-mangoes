class mango{
    constructor(x, y, width, height){
    var options = {
    'isStatic' : false,
    'restitution' : 0,
    'friction' : 1,
    'density' : 1.2,
    
    
    }
    
    
    this.x = x;
            this.y = y;
            this.width=width;
            this.height=height;
           
            this.image = loadImage("Plucking mangoes/mango.png");
    
            this.body = Bodies.rectangle(x,y, this.width, this.height, options);
            World.add(world, this.body)
    }
    display(){
    push();
    fill("black")
    image(this.image, this.x, this.y, 40, 40);
    imageMode(CENTER);
    pop();
    }
    
    }