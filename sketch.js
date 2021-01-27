var dog,sadDog,happyDog;
var foodObj, feed, addFood;
var world;
var Engine=Matter.Engine;
var Bodies=Matter.Bodies;
var Constraint=Matter.Constraint;
var database;
var feedTime, lastFed;
function preload(){
  sadDog=loadImage("Dog.png");
  happyDog=loadImage("happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  database=firebase.database();
  feedTime=database.ref("FeedTime");
  feedTime.on("value", function(data){
    lastFed=data.val();
  });
  engine=Matter.Engine.create();
  foodObj=new Milk(100,200,10,10);
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  feed=createButton("Feed the Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);
  addFood=createButton("Add Food");
  addFood.position(800,95);
addFood.mousePresses(addFoods);

}

function draw() {
  background(46,139,87);
  Matter.Engine.update(engine);
  var input=createInput("name");
  input.position(100,200);

  var button=createButton("Play");
  button.position(250,250);

  button.mousePressed(function(){
      var greeting=createElement("h2");
      var name=input.value();
      greeting.html("Hello "+name);
      greeting.position(130,150);
  })
  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
    text("Last Feed : "+lastfed%12+"PM",350,30);
  }else if(lastFed==0){
    text("Last Feed : ",350,30);
  }else{
    text("Last Feed : "+lastFed+"AM",350,30);
  }
  drawSprites();
}

//function to read food Stock
function readPosition(data){
  position=data.val();
  foodObj.x=position.x;
  foodObj.y=position.y;
  }

//function to update food stock and last fed time


//function to add food in stock
function addFoods(){
foodS++;
database.ref("/").update({
  Food:foodS
})
}
function feedDog(){
dog.addImage(happyDog);
dog.x=foodObj.x+10;
if(foodObj.getFoodStock()<=0){
  foodObj.updateFoodStock(foodObj.getFoodStock()*0);
}else{
  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
}
}