class dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=213;
		//this.wallThickness=20;
		
		this.body = Bodies.rectangle(x, y, this.dustbinWidth, this.dustbinHeight,  {isStatic:true});
		this.image=loadImage("dustbingreen.png")
		
		

		
		World.add(world, this.body);
		

	}
	display()
	{
			var pos=this.body.position;
			
			

			
			
			rectMode(CENTER)
			//strokeWeight(4);
			//angleMode(RADIANS)
			fill(255)
			imageMode(CENTER);
			image(this.image, pos.x,pos.y-100,this.dustbinWidth, this.dustbinHeight)
			//rect(0,0,this.dustbinWidth, this.wallThickness);
			
			
	}

}