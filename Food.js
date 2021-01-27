class Milk{
    constructor(x,y,w,h){
        var foodStock;
        var getFoodStock, updateFoodStock, deductFood;
        var lastFed;
       var option={
            isStatic: true,
            friction:1
        };
this.body=Matter.Bodies.rectangle(x,y,w,h, option);
this.width=w;
this.height=h;
this.image=loadImage("Milk.png");
Matter.World.add(world,this.body);
}
display(){
    fill("white");
imageMode(CENTER);
image(this.image,720,220,70,70);
if(mousePressed){
    this.image=loadImage("Milk.png");
}
if(this.foodStock!=0){
    for(var i=0;i<this.foodStock;i++){
        if(i%10==0){
            x=80;
            y=y+50
        }
        this.image(this.image,x,y,50,50);
        x=x+30;
    }
}

}
}