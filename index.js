$(document).ready(function() {
  $('.menu-item').on('click', function() {
    var menuItem = this;

    $('html, body').animate(
      {
        scrollTop: $('#' + this.id.split('-')[1]).offset().top - 240
      },
      500,
      function() {
        $('.menu-item').removeClass('underline');
        $(menuItem).addClass('underline');
      }
    );
  });
});
