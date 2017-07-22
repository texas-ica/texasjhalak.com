var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 3000));

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/about', function(req, res) {
    res.render('pages/about', {title: 'about'});
});

app.get('/show', function(req, res) {
    res.render('pages/show');
});

app.get('/afterparty', function(req, res) {
    res.render('pages/afterparty');
});

app.get('/getinvolved', function(req, res) {
    res.render('pages/getinvolved');
});

app.get('/sponsors', function(req, res) {
    res.render('pages/sponsors');
});

app.listen(app.get('port'), function() {
    console.log('Server started on 127.0.0.1');
});
