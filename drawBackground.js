module.exports = function(canvas, opt) {
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, opt.width, opt.height);
  return canvas;
};
