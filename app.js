var express = require('express');
var dateTime = require('node-datetime');
var RtmClient = require('@slack/client').RtmClient;
var winston = require('winston');

// Express server configuration
var app = express();

app.set('trust proxy');
app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 3000));
app.use(express.static('public'));

// Slack configuration
var token = process.env.SLACK_BOT_TOKEN || '';
var channel = 'C6EGUFEEA';
var rtm = new RtmClient(token);

// Date/time configuration
var dt = dateTime.create();

// Winston configuration
winston.configure({
    transports: [
        new (winston.transports.File)({ filename: 'access.log' })
    ]
});

app.use(function(req, res, next) {
    var method = req.method;
    var url = req.url
    var ip = req.headers['x-forwarded-for'];
    var agent = req.headers['user-agent'];
    var time = new Date(dt.now());

    var message = ip + ' - ' + time + ' - ' + agent + ' - ' + method + ' ' + url;

    winston.info(message);

    rtm.sendMessage(message, channel, function(err) {
        if (err) console.log(err);
    });

    next();
});

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

app.get('/success-show', function(req,res) {
    res.render('pages/success-show');
});

app.get('/success-ap', function(req,res) {
    res.render('pages/success-ap');
});

app.listen(app.get('port'), function() {
    console.log('Server started on 127.0.0.1');
    try {
        console.log('Slack client started');
        rtm.start();
    } catch (e) {
        console.log('ERROR: Slack client failed to start');
    }
});
