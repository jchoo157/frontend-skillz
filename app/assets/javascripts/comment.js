$(document).ready(function() {
  createComment();
  deleteComment();
  editComment();
  submitEdit();
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
      $('.comments-container').prepend(result);
      $('#comments').trigger('reset')
    });
  });
};

function deleteComment() {
  $('#comments').on('click', '.delete-comment', function(e) {
    e.preventDefault();
    var action = $(this).attr('href');
    var method = $(this).attr('data-method');
    var that = this;
    $.ajax({
      method: method,
      url: action
    })
    .done(function(result) {
      $(that).parent().parent().remove();
    });
  });
};

function editComment() {
  $('#comments').on('click', '.edit-comment', function(e) {
    e.preventDefault();
    var action = $(this).attr('href');
    var that = this;
    $.ajax({
      method: 'get',
      url: action
    })
    .done(function(result) {
      $(that).parent().parent().replaceWith(result);
    });
  });
};

function submitEdit() {
  $('#comments').on('click', '.submit-edit', function(e){
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
      $(that).parent().parent().parent().parent().parent().replaceWith(result);
    });
  });
};
