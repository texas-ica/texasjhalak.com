(function($) {

    /*
    // partners (WIP)

    var partners = $('#partners .ui.image');

    for (var i = 0; i < partners.length; i++) {
        var item = partners[i];
        console.log(item);

        item.on('mouseover', function() {
            item.css('cursor', 'pointer');
            item.css('-webkit-filter', 'grayscale(0%)');
            item.css('filter', 'grayscale(0%)');

            console.log('ye');
        });

        item.on('mouseleave', function() {
            item.css('cursor', 'auto');
            item.css('-webkit-filter', 'grayscale(100%)');
            item.css('filter', 'grayscale(100%)');
        });
    }
    */

    // credits: https://stackoverflow.com/questions/33065051/typed-js-execution-when-scrolled
    function isViewable(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    var seenOverview = false;
    var seenTickets = false;
    var seenVenue = false;
    var seenPartners = false;

    $(window).scroll(function() {
        if (isViewable($('#overview-header')) && !seenOverview) {
            seenOverview = true;
            $('#overview h1').typed({
                strings: ['Overview'],
                typeSpeed: 150
            });
            $('#op1').hide().fadeIn(2000);
            $('#op2').hide().fadeIn(2800);
        }

        if (isViewable($('#tickets-header')) && !seenTickets) {
            seenTickets = true;
            $('#tickets h1').typed({
                strings: ['Tickets'],
                typeSpeed: 150
            });

            // animate tickets show and party
            $("#tickets-show").css({
                position: 'relative',
                opacity: 0,
                right: "+=100"
            });
            $("#tickets-party").css({
                position: 'relative',
                opacity: 0,
                left: "+=100"
            });

            // start animation
            $("#tickets-show").animate({
                right: 0, opacity: 1
            }, 1000);
            $("#tickets-party").animate({
                left: 0, opacity: 1
            }, 1000);
        }

        if (isViewable($('#venue-header')) && !seenVenue) {
            seenVenue = true;
            $('#venue h1').typed({
                strings: ['Venue'],
                typeSpeed: 150
            });
        }

        if (isViewable($('#partners-header')) && !seenPartners) {
            seenPartners = true;
            $('#partners h1').typed({
                strings: ['Partners'],
                typeSpeed: 150
            });
        }
    });
})(jQuery);
