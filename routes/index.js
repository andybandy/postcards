var express = require('express');
var router = express.Router();
var uploadManager = require('./uploadmanager')(router);

router.get('/', function(req, res) {
  res.render('index.html');
});

module.exports = router;
