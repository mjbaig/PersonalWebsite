'use strict'

var draw = function(x,y){
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.save();
    context.clearRect(0,0,550,400);
    context.fillStyle = 'rgba(0,200,0,1)';
    context.fillRect(x,20,50,50);
    context.restore();
    x = x + 1;
    var loopTimer = setTimeout('draw('+x+','+y+')',20);
}