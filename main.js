$(document).ready(function() {
  $(".nav-icon").click(function() {
    $(".nav-icon").toggleClass("active");
    $(".nav-icon").addClass("flash");
    setTimeout(function() {
      $(".nav-icon").removeClass("flash");
    },500)
  });
});