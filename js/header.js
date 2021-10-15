$(document).ready(function () {
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 0) {
            $('header').addClass('fixed');
        }
        else {
            console.log($(window).height())
            console.log($(window).scrollTop())
            $('header').removeClass('fixed');
        }
    });
});