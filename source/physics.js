var PHYSICS = new Object();
PHYSICS.collide = function(actors) {
  var pairs = [];
for(var i = 0;i <actors.length;i++){
  var o1 = actors[i]
for(var j = i+1;j <actors.length;j++){
  var o2 = actors[j]
  // a = | y2 - y1 |
  var a = Math.abs(o2.positiony - o1.positiony)
  // b = | x2 - x1 |
  var b = Math.abs(o2.positionx - o1.positionx)
  // d = c = sqrt(a*a+b*b)
  var d = Math.sqrt((a * a) + (b * b))
  // r1 + r2 < d (distanz)
  if (o1.radius+o2.radius > d){
    pairs.push ([o1,o2])
  }
}
}
  return pairs
};
