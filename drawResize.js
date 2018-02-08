var Canvas = require('canvas');

module.exports = function(canvas) {
    var resized = new Canvas(300, 76);

    resized
    .getContext('2d')
    .drawImage(canvas, 0, 0, 300, 76);
    
    return resized;
}