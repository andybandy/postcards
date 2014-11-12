(function() {
  var app = {};

  app.init = function(imgPath) {
    app.s = function(sketch) {
      var img;

      sketch.preload = function() {
        img = sketch.loadImage(imgPath);
      };

      sketch.setup = function() {
        sketch.createCanvas(640, 480);
        sketch.background(200);
        sketch.image(img, 0, 0, sketch.width, sketch.height);
      };

      sketch.draw = function() {
      };

      return sketch;
    };

    app.p = new p5(app.s);
  };

  window.postapp = app;
})();
