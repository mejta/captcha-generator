function fontSize(size, diff) {
  return size + Math.round(diff * 2 * Math.random() - diff);
}

module.exports = function(canvas, opt) {
  var ctx = canvas.getContext('2d');

  var x = 100;
  var y = opt.height / 2;

  opt.text.split('').forEach(function(letter, idx) {
    ctx.fillStyle = '#a91d4a';
    ctx.textBaseline = 'middle';
    var size = fontSize(100, 30);
    ctx.font = '900 ' + size + 'px Arial';
    ctx.fillText(letter, x, y);

    // space the x-axis for the next letter
    x += 80;
  });
  return canvas;
};
