var randomBetween = require('./randomBetween');

module.exports = function(canvas, opt) {
  var ctx = canvas.getContext('2d');

  for(var i = 0; i < 8; i++) {
    ctx.beginPath();
    ctx.moveTo(randomBetween(-100, opt.width + 100), randomBetween(-100, opt.height + 100));
    ctx.bezierCurveTo(randomBetween(-100, opt.height + 100), randomBetween(-100, opt.height + 100), randomBetween(-100, opt.width + 100), randomBetween(-100, opt.height + 100), randomBetween(-100, opt.width + 100), randomBetween(-100, opt.height + 100));
    
    ctx.fillStyle = ctx.strokeStyle = '#939598';
    ctx.lineWidth = randomBetween(2, 5);
    ctx.stroke();
  }

  return canvas;
};
