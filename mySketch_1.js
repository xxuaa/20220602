var colors = "cdb4db-ffc8dd-ffafcc-bde0fe-a2d2ff".split("-").map(a=>"#"+a)
class Ball{
	constructor(args){ //參數預設值(工廠)
		this.r = args.r || random(100)  //圓的半徑 ||符號主要設定優先使用args.r,如果沒有args.r參數，採用符號後面的值
		this.p = args.p || {x:width/2,y:height/2}//物件的位置
		this.v = args.v || {x:random(-1,1),y:random(-1,1)}//物件的移動速度
		this.color = random(colors)
 }
	draw(){  //繪製函數
		fill(this.color)
		ellipse(this.p.x, this.p.y, this.r);
	}
	update(){//動作(移動)
		this.p.x = this.p.x + this.v.x
		this.p.y = this.p.y + this.v.y
	}
}

var ball
var balls=[] //宣告一個陣列
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	for(var i =0;i<100;i++){
	ball= new Ball({p:{x:width/2,y:height/2}})//產生一個新的物件
	balls.push(ball)
	}
}

function draw() {
	background(0)
	for(var i=0;i<balls.length;i++){
		let ball=balls[i]
		ball.draw()//繪製
		ball.update()////動作(移動)
	}
}

