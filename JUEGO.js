let SqR;
let elli;
let puntos = 0;
let vidas = 5;

function setup(){
 createCanvas(900, 600);
    SqR = createSprite(
      400, 540, 50, 50);
    SqR.shapeColor = color(0);
    elli = createSprite(
        random(0, width - 10),-10,40
        
    )

  

}

function draw(){
    background(200);
    elli.velocity.y = 10
    textSize(25);
    text("POINTS: " + puntos, 50, 50);
    text("VIDAS: " + vidas, 50, 75);
    if (keyIsDown(68) === true) {
        SqR.position.x += 10
      }
      if (keyIsDown(65) === true) {
        SqR.position.x -= 10
      }

      if(elli.position.y === height + 10){
elli.position.y = -10
elli.position.x = random(0, width - 10)
      }
      if (elli.overlap(SqR)) {
        vidas -= 1;
        elli.position.y = -10
        elli.position.x = random(0, width - 10)
      }
      if (vidas == 0){
       
        textSize(70);
        fill("tomato");
        text("PERDISTE" , 450, 300);
        elli.shapeColor(0)

      }

      if(elli.position.y == height){
puntos++
      }
drawSprites();
}