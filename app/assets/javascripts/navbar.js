$(document).ready(function() {


var topOfProjects = $(".content").offset().top;
var topOfSkills = $("#skillz").offset().top;

$(window).scroll(function() {
    if($(window).scrollTop() > topOfProjects)
    {
         $("#menu").fadeIn(200);
    }
    else if($(window).scrollTop() < topOfProjects) {
        $("#menu").fadeOut(200);
    }
});

// $(window).scroll(function() {
//     if($(window).scrollTop() > topOfProjects)
//     {
//          $('#menu .projects-menu').css({background:'white', display:'visible !important'});
//     }
//     else if($(window).scrollTop() > topOfProjects) {
//         $("#menu .projects-menu").fadeOut(200);
//     }
// });

});