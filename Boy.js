class boy{
    constructor(x, y, width, height){
    var options ={
        isStatic : false
    
    }
            this.x = x;
            this.y = y;
            this.width=width;
            this.height=height;
           
            this.image = loadImage("Plucking mangoes/boy.png");
    
            this.body = Bodies.rectangle(x,y, this.width, this.height, options);
            World.add(world, this.body)
    }
    display(){
    push();
    fill("black")
    image(this.image, 100, 525, 150, 200);
    
    imageMode(CENTER);
    pop();
    }
    
    }