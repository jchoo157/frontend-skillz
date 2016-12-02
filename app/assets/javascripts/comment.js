$(document).ready(function() {
  createComment();
  deleteComment();
})

function createComment() {
  $('#comments').on('click', '.submit-comment', function(e) {
    e.preventDefault();
    var action = $(this).parent().parent().attr('action');
    var method = $(this).parent().parent().attr('method');
    var data = $(this).parent().parent().serialize();
    var that = this;

    $.ajax({
      method: method,
      url: action,
      data: data
    })
    .done(function(result) {
      console.log(that);
      $('#comments').prepend(result);
    });
  });
}

function deleteComment() {
  $('#comments').on('click', '.delete-comment', function(e) {
    e.preventDefault();
    var action = $(this).attr('href');
    var method = $(this).attr('method');
    $.ajax({
      method: method,
      url: action
    })
    .done(function(result) {
      
    });
  })
}