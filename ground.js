class Ground{
    constructor(x,y,width,height){
       var options = {
           'isStatic': true
       } 
       this.x = x;
       this.y = y; 
       this.body = Bodies.rectangle(this.x,this.y,400,20,options);
       World.add(world,this.body); 
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, 400, 20);
        pop(); 
    }
}