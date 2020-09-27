class Ground{
    constructor(x, y, width, height){
    var options = {
    "isStatic" : false
        }
        this.width=width;
		this.height=height;
        this.body = Bodies.rectangle(x,y, this.width, this.height, options);
        World.add(world, this.body)
    }
    display()
    
    {
    fill("black")
    rect(pos.x, pos.y, this.width, this.height);
    
    }
}

        
		
    
    