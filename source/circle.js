var circle = new Object();
circle.positionx = 10
circle.velocityx = 30
circle.positiony =10
circle.velocityy = 0
circle.radius = 20
circle.draw = function(ctx){
ctx.beginPath();
ctx.lineWidth=2;
ctx.arc(this.positionx, this.positiony, this.radius, 0, 2 * Math.PI);
ctx.stroke();
};
circle.step = function(dt){
//x1=x0+ v * dt
this.positionx = this.positionx + circle.velocityx*dt
this.positiony = this.positiony + circle.velocityy*dt



};
