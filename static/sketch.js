(function() {
  var app = {};

  app.init = function(imgPath) {
    app.s = function(sketch) {
      var img, cSlider;

      sketch.preload = function() {
        img = sketch.loadImage(imgPath);
      };

      sketch.setup = function() {
        sketch.createCanvas(640, 480);
        sketch.background(200);
        sketch.image(img, 0, 0, sketch.width, sketch.height);
        cSlider = sketch.createSlider(0, 1, 0.5);
        cSlider.position(20, 20);
      };

      sketch.draw = function() {
        var opaqueLevel = cSlider.value();
        console.log(opaqueLevel);
        sketch.filter('opaque', opaqueLevel);
      };

      return sketch;
    };

    app.p = new p5(app.s);
  };

  window.postapp = app;
})();
