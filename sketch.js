let strips = []
let r;

function setup() {
	createCanvas(600, 600, SVG);
	angleMode(DEGREES);
}

function draw() {
	background(233);
	stroke(225, 0, 255);
	noFill();
	strokeWeight(0.5);
	rect(width/2-150, height/2-150, 300, 300)
for (let i = 0; i < floor(random(1, 6)); i++) {
	push();
	translate(width/2+i*5 - 140, height/2+i*60 - 140)
	strips[i] = new Strip();
	strips[i].show();
	pop();
}
noLoop();
}

class Strip {
	constructor() {
		this.h = 40;
		this.w = 3;
		this.c = 5;
		this.y = 0;
		this.xoff = 0;
	}

show() {
	for (let i = 0; i < floor(random(40, 210)); i++) {
		push();
		this.y = noise(random(100, 300))*(random(-i, i));
		translate(i*this.c, this.y)
		rotate((floor(random(-i/8, i/8))));
		rect(0, 0, this.w, this.h);
		pop();
	}
}
}
