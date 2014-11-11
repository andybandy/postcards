(function() {
  var s = function(sketch) {
    sketch.setup = function() {
      sketch.createCanvas(700, 400);
      sketch.background(212);
    };

    sketch.draw = function() {
    };

    return sketch;
  };

  var p = new p5(s);
})();
