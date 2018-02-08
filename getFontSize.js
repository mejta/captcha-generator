module.exports = function(height, width, font) {
  var max = Math.round(height * 0.50); // max is 50% of height
  var min = Math.round(height * 0.40); // min is 40% of height
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
