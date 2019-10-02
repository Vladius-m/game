$(document).ready(function() {
  $('#form__settings').click(function() {
    $('.setting').css('display', 'block');
  });

  $('.setting__out').click(function() {
    $('.setting').css('display', 'none');
  });
});
