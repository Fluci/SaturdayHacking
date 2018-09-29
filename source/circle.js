var CIRCLE = function(){
this.positionx = 10
this.velocityx = 30
this.positiony =10
this.velocityy = 0
this.radius = 20
this.fire = false
this.moveup = false
this.movedown = false
};

CIRCLE.prototype.draw = function(ctx){
ctx.beginPath();
ctx.lineWidth=2;
ctx.arc(this.positionx, this.positiony, this.radius, 0, 2 * Math.PI);
ctx.stroke();
};
CIRCLE.prototype.step = function(dt){
//x1=x0+ v * dt
this.positionx = this.positionx + this.velocityx*dt
this.positiony = this.positiony + this.velocityy*dt



};
