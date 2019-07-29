$(document).ready(function () {
  var logoHeader = $('.logo');
  var navbarMain = $('.navbar');
  var mainPage = $('.main');
  var footerMain = $('#footer');
  // current offset
  var currentOffset = $(window).scrollTop();
  // click show menu mobile
  $('.navbar-toggler').click(function () {
    if($('.navbar-collapse').hasClass('show')) {
      $('.navbar-toggler-icon').removeClass('active')
    } else {
      $('.navbar-toggler-icon').addClass('active')
    }
  })
  // get height footer and margin bottom main
  function mainMarginFooter () {
    if(window.innerWidth >= 768) {
      // get height of footer
      var footerHeight = footerMain.innerHeight();
      mainPage.css('marginBottom', footerHeight);
    }
  }
  // scroll menu fixed
  function onScroll () {
    $(document).on('scroll', function () {
      var currentOffset = $(window).scrollTop();
      if(currentOffset > logoHeader.innerHeight() && window.innerWidth > 991) {
        navbarMain.addClass('navbar-fixed');
      }else {
        navbarMain.removeClass('navbar-fixed');
      }
    })
  }
  // check current offset and add class navbar-fixed
  function checkCurrentOffset () {
    if(currentOffset > logoHeader.innerHeight()) {
      navbarMain.addClass('navbar-fixed');
    }else {
      navbarMain.removeClass('navbar-fixed');
    }
  }
  // resize windown
  $(window).resize(function() {
    console.log('aa')
    mainMarginFooter();
  })
  // Run function
  mainMarginFooter();
  onScroll();
  checkCurrentOffset();
})
