// navigation

var path = window.location.pathname;

function resetActive() {
    var navs = $('#menu-nav').children();
    for (var i = 0; i < navs.length; i++) {
        $(navs[i]).removeClass('active');
    }
}

function makeActive(path) {
    resetActive();

    if (path == '/about') {
        $('#about-nav').addClass('active');
    } else if (path == '/show') {
        $('#show-nav').addClass('active');
    } else if (path == '/afterparty') {
        $('#afterparty-nav').addClass('active');
    } else if (path == '/getinvolved') {
        $('#getinvolved-nav').addClass('active');
    } else if (path == '/sponsors') {
        $('#sponsors').addClass('active');
    }
}

makeActive(path);

// clock
var currentDate = new Date();
var futureDate  = new Date(2018, 11, 17);
var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

var clock = $('.clock').FlipClock(diff, {
    clockFace: 'DailyCounter',
    countdown: true,
    showSeconds: false
});
