var CONTROLLER = new Object();
CONTROLLER.player1 = null
CONTROLLER.player2 = null
CONTROLLER.shotprototype = null
CONTROLLER.listento = function(subject){
  var that=this;
  subject.onkeydown = function(event){that.keydown(event)};
  subject.onkeyup = function(event){that.keyup(event)};
};
CONTROLLER.apply = function(actors){




};
CONTROLLER.keydown = function(event){
  var x = event.charCode || event.keyCode;
  if (x == 119 || x == 87) {  // w is 119, W is 87
    this.player1.velocityx = 0
    this.player1.velocityy = -30
}
if (x == 32) {  // " " is 32
  this.player1.fire=true

}

if (x == 115 || x == 83) {  // s is 115, S is 83
  this.player1.velocityx = 0
  this.player1.velocityy = 30
}

};
CONTROLLER.keyup = function(event){
  var x = event.charCode || event.keyCode;
  if (x == 119 || x == 87) {  // w is 119, W is 87
    this.player1.velocityx = 0
    this.player1.velocityy = 0
}
if (x == 115 || x == 83) {  // s is 115, S is 83
  this.player1.velocityx = 0
  this.player1.velocityy = 0
}

};
CONTROLLER.logic = function(actors){
 if (this.player1.fire) {
   var shot = new this.shotprototype()
   actors.push(shot)
   shot.velocityx = 600
   shot.velocityy = 0
   this.player1.fire = false
   shot.positionx = this.player1.positionx
   shot.positiony = this.player1.positiony
 }
};
