class point{
    constructor(bodyA,pointB){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.04,
        length:10
    }
    this.pointB=pointB;
    this.chain1=Constraint.create(options);
    World.add(world,this.chain1);

    }
    display(){
        if(this.chain1.bodyA){
            var p1=this.chain1.bodyA.position;
            var point2=this.pointB;
            strokeWeight(4);
            line(p1.x,p1.y,point2.x,point2.y);
        }
    }
    fly(){
    this.chain1.bodyA=null;
    }
};