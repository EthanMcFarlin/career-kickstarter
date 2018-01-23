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


$(function(){
    $("#sample-btn").click(function(e){
        e.preventDefault();
        $path=$(".sample-body-main").offset().top;
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

// Template Pop-up Menu
$('.open-popup-link').magnificPopup({
  type:'inline',
  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});

// FAQ Accordians

jQuery(document).ready(function($){

	var MqM= 768,
		MqL = 1024;

	var faqsSections = $('.faq-group'),
		faqTrigger = $('.trigger'),
		faqsContainer = $('.faq-items'),
		faqsCategoriesContainer = $('.categories'),
		faqsCategories = faqsCategoriesContainer.find('a'),
		closeFaqsContainer = $('.cd-close-panel');
	
	//select a faq section 
	faqsCategories.on('click', function(event){
		event.preventDefault();
		var selectedHref = $(this).attr('href'),
			target= $(selectedHref);
		if( $(window).width() < MqM) {
			faqsContainer.scrollTop(0).addClass('slide-in').children('ul').removeClass('selected').end().children(selectedHref).addClass('selected');
			closeFaqsContainer.addClass('move-left');
			$('body').addClass('cd-overlay');
		} else {
	        $('body,html').animate({ 'scrollTop': target.offset().top - 19}, 200); 
		}
	});

	//close faq lateral panel - mobile only
	$('body').bind('click touchstart', function(event){
		if( $(event.target).is('body.cd-overlay') || $(event.target).is('.cd-close-panel')) { 
			closePanel(event);
		}
	});
	faqsContainer.on('swiperight', function(event){
		closePanel(event);
	});


	faqTrigger.on('click', function(event){
		event.preventDefault();
		$(this).next('.faq-content').slideToggle(200).end().parent('li').toggleClass('content-visible');
	});

	$(window).on('scroll', function(){
		if ( $(window).width() > MqL ) {
			(!window.requestAnimationFrame) ? updateCategory() : window.requestAnimationFrame(updateCategory); 
		}
	});

	$(window).on('resize', function(){
		if($(window).width() <= MqL) {
			faqsCategoriesContainer.removeClass('is-fixed').css({
				'-moz-transform': 'translateY(0)',
			    '-webkit-transform': 'translateY(0)',
				'-ms-transform': 'translateY(0)',
				'-o-transform': 'translateY(0)',
				'transform': 'translateY(0)',
			});
		}	
		if( faqsCategoriesContainer.hasClass('is-fixed') ) {
			faqsCategoriesContainer.css({
				'left': faqsContainer.offset().left,
			});
		}
	});

	function closePanel(e) {
		e.preventDefault();
		faqsContainer.removeClass('slide-in').find('li').show();
		closeFaqsContainer.removeClass('move-left');
		$('body').removeClass('cd-overlay');
	}

	function updateCategory(){
		updateCategoryPosition();
		updateSelectedCategory();
	}

	function updateCategoryPosition() {
		var top = $('.faq').offset().top,
			height = jQuery('.faq').height() - jQuery('.categories').height(),
			margin = 20;
		if( top - margin <= $(window).scrollTop() && top - margin + height > $(window).scrollTop() ) {
			var leftValue = faqsCategoriesContainer.offset().left,
				widthValue = faqsCategoriesContainer.width();
			faqsCategoriesContainer.addClass('is-fixed').css({
				'left': leftValue,
				'top': margin,
				'-moz-transform': 'translateZ(0)',
			    '-webkit-transform': 'translateZ(0)',
				'-ms-transform': 'translateZ(0)',
				'-o-transform': 'translateZ(0)',
				'transform': 'translateZ(0)',
			});
		} else if( top - margin + height <= $(window).scrollTop()) {
			var delta = top - margin + height - $(window).scrollTop();
			faqsCategoriesContainer.css({
				'-moz-transform': 'translateZ(0) translateY('+delta+'px)',
			    '-webkit-transform': 'translateZ(0) translateY('+delta+'px)',
				'-ms-transform': 'translateZ(0) translateY('+delta+'px)',
				'-o-transform': 'translateZ(0) translateY('+delta+'px)',
				'transform': 'translateZ(0) translateY('+delta+'px)',
			});
		} else { 
			faqsCategoriesContainer.removeClass('is-fixed').css({
				'left': 0,
				'top': 0,
			});
		}
	}

	function updateSelectedCategory() {
		faqsSections.each(function(){
			var actual = $(this),
				margin = parseInt($('.faq-title').eq(1).css('marginTop').replace('px', '')),
				activeCategory = $('.categories a[href="#'+actual.attr('id')+'"]'),
				topSection = (activeCategory.parent('li').is(':first-child')) ? 0 : Math.round(actual.offset().top);
			
			if ( ( topSection - 20 <= $(window).scrollTop() ) && ( Math.round(actual.offset().top) + actual.height() + margin - 20 > $(window).scrollTop() ) ) {
				activeCategory.addClass('selected');
			}else {
				activeCategory.removeClass('selected');
			}
		});
	}
});
