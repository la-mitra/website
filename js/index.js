$('.call-to-action').on({
    mouseenter: function () {
        $('h3').css({'color' : 'rgb(60, 163, 231)', 'font-size': '110%'});
        $('a').css({'color' : 'rgb(60, 163, 231)', 'font-size': '110%'});
    },
    mouseleave: function () {
        $('h3').css({'color' : 'rgb(63, 179, 255)', 'font-size': '1em'});
        $('a').css({'color' : 'rgb(63, 179, 255)', 'font-size': '1em'});
    }
});