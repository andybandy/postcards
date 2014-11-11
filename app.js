var express = require('express');
var ejs = require('ejs');
var app = express();

app.set('views', __dirname + '/views');
app.engine('html', ejs.renderFile);
app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res) {
  res.render('index.html');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Port: ' + port);
});
