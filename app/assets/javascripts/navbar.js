$(document).ready(function() {


var topOfMain = $(".content").offset().top;
var topOfProjects = $("#skillz").offset().top;

$(window).scroll(function() {
    if($(window).scrollTop() > topOfMain)
    {
         $("#menu").fadeIn(200);
    }
    else if($(window).scrollTop() < topOfMain) {
        $("#menu").fadeOut(200);
    }
});

});