let posX = 400;
let posY = 0;
let punto = 0;
let size = 40;
let speed = 5;
let limit = 600;


function setup () {
    createCanvas(800,600);

}

function draw () {

// Creo el personaje
    background(255);
    fill(0);
    square(posX, 500, 50);
    
// Creo los Enemigos

fill(200,0,0);
ell.ellipse(600,posY, size);
  posY += speed;

  if(posY > limit) {

    posY = 0;

  }


// Creo el recuadro de puntos y vidas


}

function keyPressed() {


    if (keyCode === LEFT_ARROW) {
        posX += 20;
    } if (keyCode === RIGHT_ARROW) {
        posX -= 20;
    }



}