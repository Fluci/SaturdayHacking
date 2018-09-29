var CONTROLLER = new Object();
CONTROLLER.player1 = null
CONTROLLER.player2 =null
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
