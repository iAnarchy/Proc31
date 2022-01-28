class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.imageSmoke = loadImage("sprites/smoke.png");
    this.trayectory = [];
  }

  display() {
    super.display();
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x,this.body.position.y];
      this.trayectory.push(position);
    }
  
  
   
   for(var e = 0; e < this.trayectory.length; e ++){
     image(this.imageSmoke,this.trayectory[e][0],this.trayectory[e][1]); 
    }
  }
}
