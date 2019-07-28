$(document).ready(function () {
  var logoHeader = $('.logo');
  var navbarMain = $('.navbar');
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
  function checkCurrentOffset () {
    if(currentOffset > logoHeader.innerHeight()) {
      navbarMain.addClass('navbar-fixed');
    }else {
      navbarMain.removeClass('navbar-fixed');
    }
  }
  onScroll();
  checkCurrentOffset();
})
