$(document).ready(function() {
  $('.menu').click(function() {
    var navPosition = $(this).attr('data-position');
    $('nav.' + navPosition + '').addClass('open');
    $('body').addClass('menu-open');
    return false;
  });

  //
  // Use the javascript below when implementing. The code above is for demo purposes only.
  //
  // $('.menu').click(function() {
  //   $('nav').addClass('open');
  //   $('body').addClass('menu-open');
  //   return false;
  // });

  $(document).click(function() {
    $('body').removeClass('menu-open');
    $('nav').removeClass('open');
  });
});