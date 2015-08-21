


var SLIDE_DURATION = 800;
var INITIAL_SLIDE = 3;

var nextSlideNumber = 1;
var prevSlideNumber = -1;

jQuery(document).ready(function ($) {

    var slideCount = $('.week').length;
    var slideWidth = $('.week').width();
    var slideHeight = $('.week').height();
    var sliderUlWidth = slideCount * slideWidth;
    // make the slider (viewport) as high and as wide as a single week
    $('#slider').css({width: slideWidth, height: slideHeight});
    // make the wrapper wide enough to accommodate all the weeks,
    // and shift wrapper according to INITIAL_SLIDE
    $('#wrapper').css({width: sliderUlWidth, marginLeft: -(INITIAL_SLIDE - 1) * slideWidth});
    var wrap = document.getElementById('wrapper'),
        style = window.getComputedStyle(wrap),
        marginLeft = style.getPropertyValue('margin-left');
    //console.log("Margin Left Wrapper"+ marginLeft);

    function moveSlideRight() {
        var parsedLeft = getLeftPositionWrapper();                                                  //Get current position of wrapper
        $('#wrapper').animate({left: (parsedLeft-slideWidth)}, SLIDE_DURATION );                    //take slidewidth away from current left position, and animate to this position
        var parsedMarginLeft = getLeftMarginWrapper();                                              //Get current left margin of wrapper
        $('#wrapper').css({width: sliderUlWidth, marginLeft: (parsedMarginLeft + slideWidth)});     //Increase it by the width of a slide
    };//end of moveSlide function

    function moveSlideLeft() {
        var parsedLeft = getLeftPositionWrapper();
        //add 600 to current left position, and this is the position it needs to animate to
        $('#wrapper').animate({left: (parsedLeft + slideWidth)}, SLIDE_DURATION);
        var parsedMarginLeft = getLeftMarginWrapper();
        $('#wrapper').css({width: sliderUlWidth, marginLeft: (parsedMarginLeft - slideWidth)});
    };//end of moveSlide function


    $('a.control_prev').click(function () {
        var slideHTML = "<div class = 'week'>"+ prevSlideNumber +"</div>";
        var toRemove = $('#wrapper').find('div').last();
        toRemove.remove();
        $("#wrapper").prepend(slideHTML);
        prevSlideNumber --;
        moveSlideLeft();
    });//end of prev click function

    $('a.control_next').click(function () {
        var slideHTML = "<div class = 'week'>"+ nextSlideNumber +"</div>";
        var toRemove = $('#wrapper').find('div').first();
        toRemove.remove();
        $("#wrapper").append(slideHTML);
        nextSlideNumber ++;
        moveSlideRight();
    });//end of next click function

});//end of document.ready function


function getLeftPositionWrapper(){

    var element = document.getElementById('wrapper'),
        style = window.getComputedStyle(element),
        left = style.getPropertyValue('left');                  //Get current left position of wrapper
    var parsedLeft = parseInt(left);                            //parse into number
    console.log("Wrapper Left Position : "+ parsedLeft);
    return parsedLeft;
}

function getLeftMarginWrapper(){
    var wrap = document.getElementById('wrapper');
    var style = window.getComputedStyle(wrap);
    var marginLeft = style.getPropertyValue('margin-left');     //Get current left margin of wrapper
    var parsedMarginLeft = parseInt(marginLeft);                //Parse into a number
    console.log("Margin Left Wrapper : "+ parsedMarginLeft);
    return parsedMarginLeft;
}




