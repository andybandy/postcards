(function() {
  var app = {};

  app.init = function(imgPath) {
    app.s = function(s) {
      var img, cSlider;

      s.preload = function() {
        img = s.loadImage(imgPath);
      };

      s.setup = function() {
        s.createCanvas(640, 480);
        s.background(200);
        s.image(img, 0, 0, s.width, s.height);
        cSlider = s.createSlider(0, 1, 0.5);
      };

      s.draw = function() {
        var opaqueLevel = cSlider.value();
        s.filter('opaque', opaqueLevel);
      };

      return s;
    };

    app.p = new p5(app.s, $('#canvas-holder')[0]);
  };

  window.postapp = app;
})();
