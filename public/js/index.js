(function ($) {
    $(function () {
        $('.button-collapse').sideNav();
        $('.parallax').parallax();
        $(".dropdown-button").dropdown();
        $('.scrollspy').scrollSpy();

    }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
    var slideshowContainer = document.querySelector('#index-slideshow');
    var slideshowDots = document.querySelector('#index-slideshow-dots');
    
    var dot = '';
    dot += '<div style="text-align:center">';
    for(i = 0; i < spotlightInfo.length; i++){
        var slide = '';
        slide += '<div class="mySlides fadein">';
        slide += '<a href="/spotlight?who=' + spotlightInfo[i]['brotherNum'] + '"><img src="/media/spotlight/' + spotlightInfo[i]['brotherNum'] + '.jpg" id='+spotlightInfo[i]['brotherNum']+' width="100%" /></a>';
        slide += '<div class="row">';
        slide += '<h4 style="padding-top:1em; padding-left:.5em;">'+spotlightInfo[i]['title']+'</h4>';
        slide += '</div><div class="row">';
        slide += '<p style="margin-left:3em;">'+spotlightInfo[i]['pitch']+'</p>';
        slide += '</div></div>';
        slideshowContainer.innerHTML += slide;

        
        dot += '<span class="dot" onclick="currentSlide('+(i+1)+')"></span>';
    }
    dot += '</div>';
    slideshowDots.innerHTML += dot;
});


$('#oncampus').hide();
//show employer/campus
function showEmployer(show) {
    if (show == 'true') {
        $('#employers').show();
        $('#oncampus').hide();
    } else {
        $('#employers').hide();
        $('#oncampus').show();
    }
}


function showMore(show) {
    if (show == 'true') {
        $('#more').show();
    } else {
        $('#more').hide();
    }
}



