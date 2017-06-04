var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 3000));

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.get('/teams', function(req, res) {
    res.render('pages/teams');
});

app.get('/participate', function(req, res) {
    res.render('pages/participate');
});

app.listen(app.get('port'), function() {
    console.log('Server started on 127.0.0.1');
});
