class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visibility =255; //Hacer completamente visible al CERDO
  }
  display(){
    console.log(this.body.speed);
    //Sí la velocidad del cuerpo del cerdo es menor a 3 
    if(this.body.speed < 3){
      //Entonces mostrar los cerdos 
      super.display();
    }
    //Sí no es menor a 3 
    else{
    //Entonces remover los cerdos 
    
    World.remove(world,this.body);
    push();
    this.Visibility = this.Visibility-5;
    tint(255,this.Visibility);
    image(this.image, this.body.position.x,this.body.position.y,50,50);
    pop();
    }
  }

};