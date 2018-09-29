var DRAW = new Object();
DRAW.canvas = null;
DRAW.draw = function(actors){
  var ctx = this.canvas.getContext("2d");
  ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  for(var i = 0;i <actors.length;i++){
    actors[i].draw(ctx);

  }


};
