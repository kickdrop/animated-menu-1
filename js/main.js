(function() {
  $(document).ready(function() {
    $('.menu').click(function() {
      var navPosition;
      navPosition = $(this).attr('data-position');
      $('nav.' + navPosition + '').addClass('open');
      $('body').addClass('menu-open');
      return false;
    });
    return $(document).click(function() {
      $('body').removeClass('menu-open');
      return $('nav').removeClass('open');
    });
  });

}).call(this);
