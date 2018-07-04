(function ($) {
    $(function () {
        $('.button-collapse').sideNav();
        $('.parallax').parallax();
        $(".dropdown-button").dropdown();
        $('.scrollspy').scrollSpy();

    }); // end of document ready
})(jQuery); // end of jQuery name space


$('#oncampus').hide();
//show employer/campus
function showEmployer(show) {
    console.log(show);
    if (show == 'true') {
        $('#employers').show();
        $('#oncampus').hide();
    } else {
        $('#employers').hide();
        $('#oncampus').show();
    }
}


function showMore(show) {
    console.log(show);
    if (show == 'true') {
        $('#more').show();
    } else {
        $('#more').hide();
    }
}



