//copywright Micah Theriot

function preload(){
    music = loadSound("assets/PerpetuumMobile_marked.mp3");
}
var now;
var spacing;
var x;
var delay = 405;
var i = 0;
var y1 = 500;
var y2 = 500;
var y3 = 500;
var y4 = 500;
var y5 = 500;
var y6 = 500;
var y7 = 500;

var f1 = 0;
var f2 = 0;
var f3 = 0;
var f4 = 0;
var f5 = 0;
var f6 = 0;
var f7 = 0;
var f1n = 0;
var f2n = 0;
var f3n = 0;
var f4n = 0;
var f5n = 0;
var f6n = 0;
var f7n = 0;

function setup () {
  createCanvas(1200, 600);
  noStroke();
  fill(255);
  music.play();
}
function draw () {
  now = millis();
  spacing = width/8;
  x = spacing;
  var loop = (2682 * i) + delay;
  var b1 = 0;
  var b2 = 0;
  var b3 = 0;

  background(b1,b2,b3);
  fill(f1,f1,f1n);
    ellipse(x,y1,50);                 //ellipse 1
  fill(f2,f2,f2n);
    ellipse(x+spacing,y2,50);         //ellipse 2
  fill(f3,f3,f3n);
    ellipse(x+spacing*2,y3,50);       //ellipse 3
  fill(f4,f4,f4n);
    ellipse(x+spacing*3,y4,50);       //ellipse 4
  fill(f5,f5,f5n);
    ellipse(x+spacing*4,y5,50);       //ellipse 5
  fill(f6,f6,f6n);
    ellipse(x+spacing*5,y6,50);       //ellipse 6
  fill(f7,f7,f7n);
    ellipse(x+spacing*6,y7 ,50);      //ellipse 7
//fade in

  if (now > 3000 && f1 <=255) {
    f1+=10;
    f1n+=10;
  }
  if (now > 5000 && f2 <=255) {
    f2+=10;
    f2n+=10;
  }
  if (now > 7000 && f3 <=255) {
    f3+=10;
    f3n+=10;
  }
  if (now > 9000 && f4 <=255) {
    f4+=10;
    f4n+=10;
  }
  if (now > 11000 && f5 <=255) {
    f5+=10;
    f5n+=10;
  }
  if (now > 13000 && f6 <=255) {
    f6+=10;
    f6n+=10;
  }
  if (now > 15000 && f7 <=255) {
    f7+=10;
    f7n+=10;
  }


//main animation
  if ((now > 21037 + loop) && (now < 21137 + loop)) {     //Step 1
    y2=100;
    f2n=100;
  }
  if ((now > 21220 + loop) && (now < 21320 + loop)) {     //Step 2
    y4=100;
    f4n=100;
  }
  if ((now > 21600 + loop) && (now < 21700 + loop)) {     //Step 3
    y5=100;
    f5n=100;
  }
  if ((now > 21956 + loop) && (now < 22056 + loop)) {     //Step 4
    y6=100;
    f6n=100;
  }
  if ((now > 22144 + loop) && (now < 22244 + loop)) {     //Step 5
    y7=100;
    f7n=100;
  }
  if ((now > 22499 + loop) && (now < 22599 + loop)) {     //Step 6
    y4=100;
    f4n=100;
  }
  if ((now > 22857 + loop) && (now < 22957 + loop)) {     //Step 7
    y5=100;
    f5n=100;
  }
  if ((now > 23228 + loop) && (now < 23328 + loop)) {     //Step 8
    y3=100;
    f3n=100;
  }
  if ((now > 23402 + loop) && (now < 23502 + loop)) {     //Step 9
    y2=100;
    f2n=100;
  }
  if ((now > 23581 + loop) && (now < 23681 + loop)) {     //Step 10
    y1=100;
    f1n=100;
    i++;
    b1 = random(0,255);
    b2 = random(0,255);
    b3 = random(0,255);
  }

  if (y1 < 500) {    //pushes ellipse down when set to top &
    y1+=15;
    if (f1n <= 255) {
      f1n+=15;
    }
  }
  if (y2 < 500) {    //pushes ellipse down when set to top &
    y2+=15;
    if (f2n <= 255) {
      f2n+=15;
    }
  }
  if (y3 < 500) {    //pushes ellipse down when set to top &
    y3+=15;
    if (f3n <= 255) {
      f3n+=15;
    }
  }
  if (y4 < 500) {    //pushes ellipse down when set to top &
    y4+=15;
    if (f4n <= 255) {
      f4n+=15;
    }
  }
  if (y5 < 500) {    //pushes ellipse down when set to top &
    y5+=15;
    if (f5n <= 255) {
      f5n+=15;
    }
  }
  if (y6 < 500) {    //pushes ellipse down when set to top &
    y6+=15;
    if (f6n <= 255) {
      f6n+=15;
    }
  }
  if (y7 < 500) {    //pushes ellipse down when set to top &
    y7+=15;
    if (f7n <= 255) {
      f7n+=15;
    }
  }
}
