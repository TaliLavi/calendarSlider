


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
        //get current left position of wrapper
        var element = document.getElementById('wrapper'),
            style = window.getComputedStyle(element),
            left = style.getPropertyValue('left');
        //parse into number
        var parsedLeft = parseInt(left);
        console.log("Wrapper Left Position : "+ parsedLeft);
        console.log("Wrapper left position minus 600px : "+ (parsedLeft - slideWidth));
        //take 600 away from current left position, and this is the position it needs to animate to
        $('#wrapper').animate({left: (parsedLeft-slideWidth)}, SLIDE_DURATION );
        var wrap = document.getElementById('wrapper'),
            style = window.getComputedStyle(wrap),
            marginLeft = style.getPropertyValue('margin-left');
        //parse into number
        var parsedMarginLeft = parseInt(marginLeft);
        console.log("Margin Left Wrapper : "+ parsedMarginLeft);
        console.log("Margin left plus 600px : "+ (parsedMarginLeft + slideWidth));
        $('#wrapper').css({width: sliderUlWidth, marginLeft: (parsedMarginLeft + slideWidth)});
    };//end of moveSlide function

    function moveSlideLeft() {
        //get current left position of wrapper
        var element = document.getElementById('wrapper'),
            style = window.getComputedStyle(element),
            left = style.getPropertyValue('left');
        //parse into number
        var parsedLeft = parseInt(left);
        console.log("Wrapper Left Position : "+ parsedLeft);
        console.log("Wrapper left position plus 600px : "+ (parsedLeft + slideWidth));
        //add 600 to current left position, and this is the position it needs to animate to
        $('#wrapper').animate({left: (parsedLeft + slideWidth)}, SLIDE_DURATION);
        var wrap = document.getElementById('wrapper'),
            style = window.getComputedStyle(wrap),
            marginLeft = style.getPropertyValue('margin-left');
        //parse into number
        var parsedMarginLeft = parseInt(marginLeft);
        console.log("Margin Left Wrapper : "+ parsedMarginLeft);
        console.log("Margin left minus 600px : "+ (parsedMarginLeft - slideWidth));
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






