class Line {

    constructor(x,y,width,height){
        //properties of body
    var options = {
        isStatic:true,
        friction : 0.3,
        density : 1.0
    }
    
    this.line = Bodies.rectangle(x,y,width,height,options);
    this.w = width;
    this.h = height;
    World.add(world,this.line);
    
    
    }
    
    //function of body
    display(){
        var pos = this.line.position;
        
        push();
        translate(pos.x,pos.y);
        
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    
    }
    
    }