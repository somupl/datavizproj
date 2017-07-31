var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index2');
});

app.get('/boxplot', function(request, response) {
  response.render('pages/boxplot');
});

app.get('/scatterplot', function(request, response) {
  response.render('pages/scatterplot');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});



