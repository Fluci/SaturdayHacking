var GAME = new Object();
GAME.canvas = null;
GAME.time = 0;
GAME.start = function(){
  var that = this;
setInterval(function(){that.loop()},1000/30)


};
GAME.loop = function(){
  var ctx = this.canvas.getContext("2d");
  ctx.beginPath();
  ctx.lineWidth=4;
  ctx.arc(95+this.time, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();
  this.time+=1;

};
