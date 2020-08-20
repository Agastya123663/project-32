class Box{
    constructor(x,y,width,height){
     var options={
         isStatic:false,
         friction:1.0
     }   
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height = height;
     World.add(world,this.body);
     this.Visiblity = 255;
    }

    score(){
        if(this.Visiblity < 0 && this.Visiblity > -105  ){
        score = score + 0.5
        }
    }


    display(){
        if (this.body.speed < 8){
            var pos = this.body.position;
            rectMode(CENTER);
            rect(pos.x,pos.y,this.width,this.height) ;
        }
        else {
            World.remove(world,this.body);
            this.Visiblity = this.Visiblity - 5
            push();
            tint(255,this.Visiblity)
            pop();
        }
    }
} 