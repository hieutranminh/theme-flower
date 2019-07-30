$(document).ready(function () {
  // variable header
  var headerLogo = $('.logo');
  var headerNavbar = $('.navbar');
  // variable main
  var sectionMain = $('.main');
  var sectionProduct = $('#product');
  // variable footer
  var footerMain = $('#footer');
  var buttonBackToTop = $('.backtotop');
  // current offset
  var currentOffset = $(window).scrollTop();
  function eventHeader () {
    // click show menu mobile
    $('.navbar-toggler').click(function () {
      if($('.navbar-collapse').hasClass('show')) {
        $('.navbar-toggler-icon').removeClass('active')
      } else {
        $('.navbar-toggler-icon').addClass('active')
      }
    })
  }
  // get height footer and margin bottom main
  function mainMarginFooter () {
    if(window.innerWidth > 768) {
      // get height of footer
      var footerHeight = footerMain.innerHeight();
      sectionMain.css('marginBottom', footerHeight);
    } else {
      sectionMain.css('marginBottom', 0);
    }
  }
  // scroll menu fixed
  function onScroll () {
    $(document).on('scroll', function () {
      var currentOffset = $(window).scrollTop();
      // Add class navbar-fixed with desktop & laptop
      if(currentOffset > headerLogo.innerHeight() && window.innerWidth > 991) {
        headerNavbar.addClass('navbar-fixed');
      }else {
        headerNavbar.removeClass('navbar-fixed');
      }
      // Add class backtotop-open when scroll > position product
      if(currentOffset > sectionProduct.offset().top - 100) {
        buttonBackToTop.addClass('backtotop-open')
      }else {
        buttonBackToTop.removeClass('backtotop-open')
      }
    })
  }
  // check current offset and add class navbar-fixed
  function checkCurrentOffset () {
    if(currentOffset > headerLogo.innerHeight()) {
      headerNavbar.addClass('navbar-fixed');
    }else {
      headerNavbar.removeClass('navbar-fixed');
    }
  }
  // resize windown
  $(window).resize(function() {
    console.log('aa')
    mainMarginFooter();
  })
  // Run function
  eventHeader();
  mainMarginFooter();
  onScroll();
  checkCurrentOffset();
})
