var express = require('express');
var ejs = require('ejs');
var routes = require('./routes/index');
var app = express();

app.set('views', __dirname + '/views');
app.engine('html', ejs.renderFile);
app.use(express.static(__dirname + '/static'));

app.use('/', routes);

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Port: ' + port);
});
