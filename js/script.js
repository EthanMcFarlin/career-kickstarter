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
var nav = document.querySelector('.navigation');
var position = 0;

window.addEventListener('scroll', function(){
    if (window.pageYOffset >= ($('.navigation').data('threshold'))) {
        if(position < window.pageYOffset) {
        //console.log('down')
        nav.classList += ' minified';
        position = window.pageYOffset;
      } else {
        //console.log('up');
        nav.classList = 'navigation'
        position = window.pageYOffset;
      }
    }
})

// Smooth-scrolling button

$(function(){
    $("#scroll").click(function(e){
        e.preventDefault();
        $path=$(".explore-features-content").offset().top;
        $('body,html').animate({scrollTop:$path},1500);
    });
});

// Footer

$(function() {
  $('.footer-links-holder h3').click(function () {
    $(this).parent().toggleClass('active');
  });
});

// Waypoint + Animate.css Animations on Scroll

$(document).ready(function() {
    InitWaypointAnimations();
});

// Sidescroll navigation

$('.filler-content').scrollNav({
    sections: 'h2.content-header',
    subSections: false,
    sectionElem: 'section',
    showHeadline: true,
    headlineText: 'Related Content',
    showTopLink: true,
    topLinkText: 'Top',
    fixedMargin: 40,
    scrollOffset: 40,
    animated: true,
    speed: 500,
    insertTarget: this.selector,
    insertLocation: 'insertBefore',
    arrowKeys: false,
    scrollToHash: true,
    onInit: null,
    onRender: null,
    onDestroy: null
});

// Animated scroll indicator

$(window).load(function(){
  $(window).scroll(function() {
    var wintop = $(window).scrollTop(), docheight = $('article').height(), winheight = $(window).height();
    var progressBar = document.querySelector('.article-footer');
    var totalScroll = (wintop/(docheight-winheight))*100;
    $(".KW_progressBar").css("width",(totalScroll-12)+"%");
    if (totalScroll >= 115) {
      progressBar.classList += ' progressBar-hidden';
    }
    else if (totalScroll >= 20) {
      progressBar.classList = 'article-footer';
    }
    else if (totalScroll <= 20) {
        progressBar.classList = 'article-footer progressBar-hidden';
    }
  });
});