(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 600, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
 /* $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });*/

})(jQuery); // End of use strict

/*Added new js*/
new WOW().init();

/*head bg affect*/
$(".masthead").interactive_bg({
  strength: 10,              // Movement Strength when the cursor is moved. The higher, the faster it will reacts to your cursor. The default value is 25.
  scale: 1.03,               // The scale in which the background will be zoomed when hovering. Change this to 1 to stop scaling. The default value is 1.05.
  animationSpeed: "1000ms",   // The time it takes for the scale to animate. This accepts CSS3 time function such as "100ms", "2.5s", etc. The default value is "100ms".
  contain: true,             // This option will prevent the scaled object/background from spilling out of its container. Keep this true for interactive background. Set it to false if you want to make an interactive object instead of a background. The default value is true.
  wrapContent: false         // This option let you choose whether you want everything inside to reacts to your cursor, or just the background. Toggle it to true to have every elements inside reacts the same way. The default value is false
});


/* light-box */
$('.popup-with-zoom-anim').magnificPopup({
  type: 'inline',

  fixedContentPos: false,
  fixedBgPos: true,

  overflowY: 'auto',

  closeBtnInside: true,
  preloader: false,

  midClick: true,
  removalDelay: 300,
  mainClass: 'my-mfp-zoom-in'
});

$('.popup-with-move-anim').magnificPopup({
  type: 'inline',

  fixedContentPos: false,
  fixedBgPos: true,

  overflowY: 'auto',

  closeBtnInside: true,
  preloader: false,

  midClick: true,
  removalDelay: 300,
  mainClass: 'my-mfp-slide-bottom'
});

/*numbers counting up*/
$('#number1').counterUp({
  delay: 10,
  time: 1000,
  offset: 70,
  beginAt: 20,
  formatter: function (n) {
    return n.replace(/,/g, '.');
  }
});

$('#number2').counterUp({
  delay: 10,
  time: 1000,
  offset: 70,
  beginAt: 1,
  formatter: function (n) {
    return n.replace(/,/g, '.');
  }
});

$('#number3').counterUp({
  delay: 10,
  time: 1000,
  offset: 70,
  beginAt: 10,
  formatter: function (n) {
    return n.replace(/,/g, '.');
  }
});

$('#number4').counterUp({
  delay: 10,
  time: 1000,
  offset: 70,
  beginAt: 10,
  formatter: function (n) {
    return n.replace(/,/g, '.');
  }
});

/*
$('.patronRow').waypoint(function(direction) {
  myfunc_fadeIn(this.element, direction)
}, {offset: "60%"});


function myfunc_fadeIn(target, direction){
  if(direction === "down"){
    $(target).addClass("animated zoomIn");
    setTimeout(function(){
    }, 1000);
  }
}*/


var browser={
  versions:function(){
    var u = navigator.userAgent, app = navigator.appVersion;
    return {
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios?
      android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android?
      iPad: u.indexOf('iPad') > -1, //iPad?
    };
  }(),
}
if(browser.versions.android){
  $('.paddingforAndroid').css('padding-top','5rem')
}
