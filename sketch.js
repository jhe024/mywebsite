let A1;
let A2;
let asteroids = [];
let asteroidAmount = 50;

function setup() {
  createCanvas(400, 400);
  A1 = new Asteroid(50,50);
  A2 = new Asteroid(100,100);

  for(i = 0; i < asteroidAmount; i++)
  {
    asteroids.push(new Asteroid(random(50,100), random(50,100)));
  }
  print(asteroids)
}

function draw() {
  background(220);
  A1.show();
  A1.moveAsteroid();
  A1.checkMouse();
  A2.show();
  A2.moveAsteroid();
  A2.checkMouse();

  for(i = asteroids.length - 1; i >= 0; i--)
  {
    asteroids[i].show();
    asteroids[i].moveAsteroid();
    asteroids[i].checkMouse();
  }
}

class Asteroid {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.radius = 25;
    this.xSpeed = random(3,5);
    this.ySpeed = random(3,5);
    this.currentColor = color("white");
    this.baseColor = color("white");
    this.hoverColor = color("red");
  }

  show(){
    push();
    fill(this.currentColor);
    circle(this.x,this.y,this.radius * 2);
    pop();
  }

  moveAsteroid(){
    if(this.x < this.radius || this.x > width - this.radius)
    {
      this.xSpeed *= -1;
    }
    if(this.y < this.radius || this.y > height - this.radius)
    {
      this.ySpeed *= -1;
    }
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  checkMouse(){
    if(dist(mouseX, mouseY, this.x, this.y) < this.radius){
      this.currentColor = this.hoverColor;
    }
    else {
      this.currentColor = this.baseColor
    }
  }
}