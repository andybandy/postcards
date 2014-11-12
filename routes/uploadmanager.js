var options = {
  tmpDir: __dirname + '/../static/uploaded/tmp',
  uploadDir: __dirname + '/../static/uploaded/files',
  uploadUrl: '/uploaded/files/',
  storage: {
    type: 'local'
  },
  imageVersions: {
    maxWidth: 200,
    maxHeight: 200
  }
};

var uploader = require('blueimp-file-upload-expressjs')(options);

module.exports = function(router) {
  router.get('/upload', function(req, res) {
    uploader.get(req, res, function(obj) {
      res.send(JSON.stringify(obj));
    });
  });

  router.post('/upload', function(req, res) {
    uploader.post(req, res, function(obj) {
      res.send(JSON.stringify(obj));
    });
  });

  router.delete('/uploaded/files/:name', function(req, res) {
    uploader.delete(req, res, function(obj) {
      res.send(JSON.stringify(obj));
    });
  });
  return router;
};
