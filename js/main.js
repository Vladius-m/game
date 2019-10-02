$(document).ready(function() {
  $('#form__settings').click(function() {
    $('.setting').css('display', 'block');
    $('.form-game').css('display', 'none');
  });

  $('.setting__out').click(function() {
    $('.setting').css('display', 'none');
    $('.form-game').css('display', 'block');
  });
});
