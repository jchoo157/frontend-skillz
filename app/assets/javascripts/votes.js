$(document).ready(function() {
  upvote();
  downvote();
})

function upvote() {
  $('#comments').on('click', '.upvote', function(e) {
    e.preventDefault();
    var action = $(this).parent().attr('action');
    var method = $(this).parent().attr('method');
    var data = $(this).parent().serialize();
    var that = this;

    $.ajax({
      method: method,
      url: action,
      data: data
    })
    .done(function(result) {
      var points = $(result).find('.vote');
      console.log(points);
      $(that).parent().parent().replaceWith(result);
      // $(that).parent().switchClass('btn-default', 'btn-success');
      // $(that).parent().find('.points').replaceWith(points);
    });
  });
}

function downvote() {
  $('#comments').on('click', '.downvote', function(e) {
    e.preventDefault();
    var action = $(this).parent().attr('action');
    var method = $(this).parent().attr('method');
    var data = $(this).parent().serialize();
    var that = this;

    $.ajax({
      method: method,
      url: action,
      data: data
    })
    .done(function(result) {
      var points = $(result).find('.vote');
      console.log(points);
      $(that).parent().parent().replaceWith(result);
    });
  });
}