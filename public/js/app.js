//$('#getinvolved').dropdown();

var currentDate = new Date();
var futureDate  = new Date(2017, 11, 18);
var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

var clock = $('.clock').FlipClock(diff, {
    clockFace: 'DailyCounter',
    countdown: true,
    showSeconds: false
});
