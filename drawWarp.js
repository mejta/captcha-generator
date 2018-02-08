var Warp = require('./warp');

function rand(min, max) {
    return min + Math.round((max - min) * Math.random());
}

module.exports = function (canvas) {
    var warp = new Warp({
        input_canvas: canvas,
        viewport_canvas: canvas,
        top: 0,
        left: 0,
    });

    warp.deform({
        center: {x: rand(200, 300), y: rand(40, 100)},
        radius: rand(50, 100),
        angle: rand(-45, 45),
        copy_input: false,
    });
    return canvas;
};