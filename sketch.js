var hr, mn, sec;
var secAngle, mnAngle, hrAngle;
var twelve, one, two, three, four, five, six, seven, eight, nine, ten, eleven;

function setup() {
  createCanvas(600,600);
  angleMode(DEGREES);

  twelve = createElement("h3");
  twelve.position(310,80);
  twelve.elt.id = "number";
  twelve.html("12");

  one = createElement("h3");
  one.position(410,100);
  one.elt.id = "number";
  one.html("1");

  two = createElement("h3");
  two.position(480,170);
  two.elt.id = "number";
  two.html("2");

  three = createElement("h3");
  three.position(510,270);
  three.elt.id = "number";
  three.html("3");

  four = createElement("h3");
  four.position(480,370);
  four.elt.id = "number";
  four.html("4");

  five = createElement("h3");
  five.position(410,440);
  five.elt.id = "number";
  five.html("5");

  six = createElement("h3");
  six.position(310,460);
  six.elt.id = "number";
  six.html("6");

  seven = createElement("h3");
  seven.position(210,440);
  seven.elt.id = "number";
  seven.html("7");

  eight = createElement("h3");
  eight.position(140,360);
  eight.elt.id = "number";
  eight.html("8");

  nine = createElement("h3");
  nine.position(120,270);
  nine.elt.id = "number";
  nine.html("9");

  ten = createElement("h3");
  ten.position(140,180);
  ten.elt.id = "number";
  ten.html("10");

  eleven = createElement("h3");
  eleven.position(210,100);
  eleven.elt.id = "number";
  eleven.html("11");
}

function draw() {
  background("black");

  hr = hour();
  mn = minute();
  sec = second();

  translate(300,300);
  rotate(-90);

  secAngle = map(sec, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr%12, 0, 12, 0, 360);

  strokeWeight(10);

  push();
  rotate(secAngle);
  stroke("rgb(112, 198, 255)");
  line(0,0,150,0);
  pop();

  push();
  rotate(mnAngle);
  stroke("rgb(74, 247, 83)");
  line(0,0,130,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("rgb(247, 74, 89)");
  line(0,0,80,0);
  pop();

  noFill();
  strokeWeight(20);

  stroke("rgb(112, 198, 255)");
  arc(0,0,450,450,0,secAngle);

  stroke("rgb(74, 247, 83)");
  arc(0,0,500,500,0,mnAngle);

  stroke("rgb(247, 74, 89)");
  arc(0,0,550,550,0,hrAngle);
}