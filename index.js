$(document).ready(function() {
  $('.menu-item').on('click', function() {
    var menuItem = this;

    $('html, body').animate(
      {
        scrollTop:
          $('#' + this.id.split('-')[1]).offset().top -
          $(window).height() * 0.25
      },
      400
    );
  });

  var positions = {};

  function updatePositions() {
    for (var i = 0; i <= $('section').length - 1; i++) {
      positions[$('section')[i].id] =
        $('#' + $('section')[i].id).position().top - 20;
    }
  }

  updatePositions();

  function menuSelect() {
    var currPos = $(window).scrollTop();
    var currSect = 'about';
    for (var elem in positions) {
      if (currPos > positions[elem]) currSect = elem;
    }
    $('.menu-item').removeClass('underline');
    $('#menu-' + currSect).addClass('underline');
  }

  menuSelect();

  $(window).scroll(menuSelect);

  $(window).resize(updatePositions);
});
