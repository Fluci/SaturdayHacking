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
  // player1
  if (x == 119 || x == 87) {  // w is 119, W is 87
    this.player1.moveup = true
}


if (x == 115 || x == 83) {  // s is 115, S is 83
  this.player1.movedown = true
}

if (x == 32) {  // " " is 32
  this.player1.fire=true

}
 //player2
if (x == 79 || x == 111) {  // o is 38 | O is 111
  this.player2.moveup = true
}

if (x == 76 || x == 108) {  // l
this.player2.movedown = true
}
if (x == 13) {  // Enter is 13
this.player2.fire=true

}
};
CONTROLLER.keyup = function(event){
  var x = event.charCode || event.keyCode;
  //player1
  if (x == 119 || x == 87) {  // w is 119, W is 87
    this.player1.moveup = false

}
if (x == 115 || x == 83) {  // s is 115, S is 83
  this.player1.movedown = false
}
// player2
if (x == 79 || x == 111) {  // Arrow up is 38
  this.player2.moveup = false

}
if (x == 76 || x == 108) {  // Arrow down is 40
this.player2.movedown = false
}
};
CONTROLLER.playerlogic = function(player){

 if (player.moveup){
    player.velocityx = 0
    player.velocityy = -100
 }else if (player.movedown){
   player.velocityx = 0
   player.velocityy = 100
 }else {
   player.velocityx = 0
   player.velocityy = 0
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
  if (this.player2.fire) {
    var shot = new this.shotprototype()
    actors.push(shot)
    shot.velocityx = -600
    shot.velocityy = 0
    this.player2.fire = false
    shot.positionx = this.player2.positionx
    shot.positiony = this.player2.positiony
  }
  this.playerlogic(this.player1)
  this.playerlogic(this.player2)
};
