$(document).ready(function() {
  $("#scroll1").click(function() {
    $('html, body').animate({
        scrollTop: $("#slide-1").offset().top
    }, 2000);
  });

  $("#scroll2").click(function() {
    $('html, body').animate({
        scrollTop: $(".h1-projects").offset().top
    }, 2000);
  });

  $("#scroll3").click(function() {
    $('html, body').animate({
        scrollTop: $("#skillz").offset().top
    }, 2000);
  });

  $("#scroll4").click(function() {
    $('html, body').animate({
        scrollTop: $("#comments-section").offset().top
    }, 2000);
  });

  $('#menu').click(function(e){
    e.stopPropagation();
  });

  $("#menu").click(function(){
     $(this).toggleClass("selected");
  });

  window.addEventListener("scroll",function() { 
     if(window.scrollY > 500) {
        $('.grid').slideDown();
     }
     else {
        $('.grid').slideUp();
     }
  },false);

});

