var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    $('.slideimg').fadeIn();
    dots[slideIndex - 1].className += " active";

    //check if text for slide exists
    if ($('#spotlight-text')) {
        changeSlideText(n, slides.length);
    }
}

function changeSlideText(n, slidesLength) {
    
    for (i = 1; i <= slidesLength; i++) {
        //console.log(($('#spotlight-text > #' + i.toString())).text())
        document.getElementById('spotlight-text-' +i.toString()).style.display = 'none';
    }
    document.getElementById('spotlight-text-' + n.toString()).style.display = 'block';
}

