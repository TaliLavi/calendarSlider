


var SLIDE_DURATION = 800;
var INITIAL_SLIDE = 3;


jQuery(document).ready(function ($) {
    //var toChange = $('#wrapper').find('div:nth-child(3)');
    //toChange.innerHTML="Number 3!";
    var slideIndex = INITIAL_SLIDE;

    var slideCount = $('.week').length;
    var slideWidth = $('.week').width();
    var slideHeight = $('.week').height();
    var sliderUlWidth = slideCount * slideWidth;
    // make the slider (viewport) as high and as wide as a single week
    $('#slider').css({width: slideWidth, height: slideHeight});
    // make the wrapper wide enough to accommodate all the weeks,
    // and shift wrapper according to INITIAL_SLIDE
    $('#wrapper').css({width: sliderUlWidth, marginLeft: -(INITIAL_SLIDE - 1) * slideWidth});

    function moveSlide(slideIndex) {
        // move wrapper according to new slide's id
        $('#wrapper').animate({left: -(slideIndex  - INITIAL_SLIDE) * slideWidth}, SLIDE_DURATION);
    };

    $('a.control_prev').click(function () {
        // as long as current slide's index is within bounds (greater than 1), allow moving left
        if (slideIndex > 1) {
            slideIndex -= 1;
            moveSlide(slideIndex);
        } else {
            console.log("Can't move left anymore");
        }
    });


    $('a.control_next').click(function () {

        if(slideIndex == (slideCount-2)){
            console.log("Two from the end. Time to append a slide.");
            slideIndex +=1;
            moveSlide(slideIndex);

        } else if(slideIndex == (slideCount-1)){
            console.log("Last Slide");
            slideIndex +=1;
            moveSlide(slideIndex);

        } else {
            console.log("Can't go right any further");
        }
    });

});




