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
    var scrollNav = document.querySelector('.scroll-nav');
    var totalScroll = (wintop/(docheight-winheight))*100;
    $(".KW_progressBar").css("width",(totalScroll-12)+"%");
    if (totalScroll >= 110) {
        scrollNav.classList += ' scrollNav-hidden';
    }
    else if (totalScroll >= 105) {
      progressBar.classList += ' progressBar-hidden';
      scrollNav.classList.remove('scrollNav-hidden'); 
    }
    else if (totalScroll >= 20) {
      progressBar.classList = 'article-footer';
    }
    else if (totalScroll <= 20) {
        progressBar.classList = 'article-footer progressBar-hidden';
    }
  });
});

// Scroll to Top
$(window).scroll(function() {
    if ($(this).scrollTop() >= 500) {        
        $('#return-to-top').fadeIn(200);    
    } else {
        $('#return-to-top').fadeOut(200);   
    }
});
$('#return-to-top').click(function() {      
    $('body,html').animate({
        scrollTop : 0                       
    }, 500);
});

// Comment Management

$(document).ready(function() {
    $("#flippy").click(function() {
        $("#flippanel").slideToggle("normal");
    });
});

// Tool-Tip

$(document).ready(function() {
        // Tooltip only Text
        $('.masterTooltip').hover(function(){
                // Hover over code
                var title = $(this).attr('title');
                $(this).data('tipText', title).removeAttr('title');
                $('<p class="tooltip"></p>')
                .text(title)
                .appendTo('body')
                .fadeIn('slow');
        }, function() {
                // Hover out code
                $(this).attr('title', $(this).data('tipText'));
                $('.tooltip').remove();
        }).mousemove(function(e) {
                var mousex = e.pageX + 20; //Get X coordinates
                var mousey = e.pageY + 10; //Get Y coordinates
                $('.tooltip')
                .css({ top: mousey, left: mousex })
        });
});

// PDF Objects

$(document).ready(function() {

	$('a.btn-gallery').on('click', function(event) {
		event.preventDefault();
		
		var gallery = $(this).attr('href');
    
		$(gallery).magnificPopup({
      delegate: 'a',
			type:'iframe',
			gallery: {
				enabled: true
			}
		}).magnificPopup('open');
	});
	
});
