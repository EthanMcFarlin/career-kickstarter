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
        $path=$(".explore-features-content").offset().top;
        $('body,html').animate({scrollTop:$path},1500);
    });
});

// Animated slider

$('.slider').each(function() {
  var $this = $(this);
  var $group = $this.find('.slide_group');
  var $slides = $this.find('.slide');
  var bulletArray = [];
  var currentIndex = 0;
  var timeout;
  var currentSlide = 0;
  
  function move(newIndex) {
    var animateLeft, slideLeft;
    
    advance();
    
    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }
    
    bulletArray[currentIndex].removeClass('active_slider');
    bulletArray[newIndex].addClass('active_slider');
    
    if (newIndex > currentIndex) {
      slideLeft = '100%';
    } else {
      slideLeft = '-100%';
    }
    
    $slides.eq(newIndex).css({
      display: 'block',
      left: slideLeft
    });
    $group.animate({
      left: animateLeft
    }, function() {
      $slides.eq(currentIndex).css({
        display: 'none'
      });
      $slides.eq(newIndex).css({
        left: 0
      });
      $group.css({
        left: 0
      });
      currentIndex = newIndex;
    });
  }

  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
        console.log(currentIndex); 
        if (currentIndex === 0) {
            $('#quote-box').html('"This site has been instrumental in helping to reinvent my identity as a proffesional and has changed my outlook on employment entirely." <br> <span id="stories-name">- Steve R.  </span>');
        }
        if (currentIndex === 1) {
            $('#quote-box').html('"I previously felt as though the whole employment process was really weighing me down, but with Career Kickstarter, that pressure has lifted off my shoulders." <span id="stories-name">- Ryan F. </span>');
        }
        if (currentIndex === 2) {
            $('#quote-box').html('"Career Kickstarter has opened up a number of opportunities in my proffesional life, and has given me a sense of grounding in the employment process." <span id="stories-name">- George F. </span>');
        }
        if (currentIndex === 3) {

            $('#quote-box').html('"Applying the tips on Career Kickstarter has guided me towards my true passions and a more fufilling life. <span id="stories-name">- Sofia G. </span>');
        }
      } else {
        move(0);
        $('#quote-box').html('"This site has been instrumental in helping to reinvent my identity as a proffesional and has changed my outlook on employment entirely." <br> <span id="stories-name">- Steve R.  </span>');
      }
    }, 6000);
  }

  $.each($slides, function(index) {
    var $button = $('<a class="slide_btn">&bull;</a>');
    
    if (index === currentIndex) {
      $button.addClass('active_slider');
    }
    $button.on('click', function() {
      move(index);
    }).appendTo('.slide_buttons');
    bulletArray.push($button);
  });
    
  advance();
});

