//copywright Micah Theriot

var now;
var spacing;
var x;
var delay = 400;
var i = 0;
var y1 = 500;
var y2 = 500;
var y3 = 500;
var y4 = 500;
var y5 = 500;
var y6 = 500;
var y7 = 500;


function setup () {
  createCanvas(1200, 600);
  music = loadSound("assets/PerpetuumMobile_marked.mp3", findLoadTime);
  noStroke();
  fill(255);
  music.play();
}

function findLoadTime() {
    loadTime = millis();
}

function draw () {
  now = millis() - loadTime;
  spacing = width/8;
  x = spacing;

  var loop = (2682 * i) + delay;

  background(0);
  ellipse(x,y1,50);                 //ellipse 1
  ellipse(x+spacing,y2,50);         //ellipse 2
  ellipse(x+spacing*2,y3,50);       //ellipse 3
  ellipse(x+spacing*3,y4,50);       //ellipse 4
  ellipse(x+spacing*4,y5,50);       //ellipse 5
  ellipse(x+spacing*5,y6,50);       //ellipse 6
  ellipse(x+spacing*6,y7 ,50);      //ellipse 7

if ((now > 21037 + loop) && (now < 21137 + loop)) {     //Step 1
  y2 =100;
}
if ((now > 21220 + loop) && (now < 21320 + loop)) {     //Step 2
  y4 =100;
}
if ((now > 21600 + loop) && (now < 21700 + loop)) {     //Step 3
  y5 =100;
}
if ((now > 21956 + loop) && (now < 22056 + loop)) {     //Step 4
  y6 =100;
}
if ((now > 22144 + loop) && (now < 22244 + loop)) {     //Step 5
  y7 =100;
}
if ((now > 22499 + loop) && (now < 22599 + loop)) {     //Step 6
  y4 =100;
}
if ((now > 22857 + loop) && (now < 22957 + loop)) {     //Step 7
  y5 =100;
}
if ((now > 23228 + loop) && (now < 23328 + loop)) {     //Step 8
  y3 =100;
}
if ((now > 23402 + loop) && (now < 23502 + loop)) {     //Step 9
  y2 =100;
}
if ((now > 23581 + loop) && (now < 23681 + loop)) {     //Step 10
  y1 =100;
  i++;
}


if (y1 < 500){y1+=15}; //pushes eipse down when set to top
if (y2 < 500){y2+=15}; //pushes ellipse down when set to top
if (y3 < 500){y3+=15}; //pushes ellipse down when set to top
if (y4 < 500){y4+=15}; //pushes ellipse down when set to top
if (y5 < 500){y5+=15}; //pushes ellipse down when set to top
if (y6 < 500){y6+=15}; //pushes ellipse down when set to top
if (y7 < 500){y7+=15}; //pushes ellipse down when set to top
println(loop);
}
