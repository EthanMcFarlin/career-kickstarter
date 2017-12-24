// Inner navigation layers + mobile configuration

(function($) { // Begin jQuery
  $(function() { // DOM ready
      // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery

// Navigation bar scrolling animation

$(function(){
  $(window).scroll(function() {
      if (window.pageYOffset <= 40) {
            $('.navigation').addClass('pre-scroll');
            $('.link').addClass('pre-scroll');         
      }
      if($(window).scrollTop() >= 40) {
            $('.pre-scroll').removeClass('pre-scroll');   
        }
      })         
  });

// Smooth-scrolling button

$(function(){
    $("#scroll").click(function(e){
        e.preventDefault();
        $path=$(".parallax-window").offset().top;
        $('body,html').animate({scrollTop:$path},1000);
    });
});

