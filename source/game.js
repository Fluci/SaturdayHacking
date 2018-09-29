var GAME = new Object();
GAME.time = 0;
GAME.actors = []
GAME.drawengine = null
GAME.controller = null
GAME.start = function(){
  var that = this;
setInterval(function(){that.loop()},1000/30)


};
GAME.loop = function(){
  this.controller.logic(this.actors)
  for(var i = 0;i <this.actors.length;i++){
    this.actors[i].step(1/30);

  }
this.drawengine.draw(this.actors)
  this.time+=1;

};
