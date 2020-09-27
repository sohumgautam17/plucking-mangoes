class tree{
constructor(x, y, width, height){
var options ={
    isStatic : false

}
        this.x = x;
        this.y = y;
		this.width=width;
        this.height=height;
       
        this.image = loadImage("Plucking mangoes/tree.png");

        this.body = Bodies.rectangle(x,y, this.width, this.height, options);
        World.add(world, this.body)
}
display(){
push();
fill("black")
image(this.image, 460, 350, 260, 349);;
imageMode(CENTER);
pop();
}

}