$(document).ready(function() {

  $(window).resize(function() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 500) {
      $(".navbar").addClass("navbar-fixed-top");
    }
  }).resize();

});