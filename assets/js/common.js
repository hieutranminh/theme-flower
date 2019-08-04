$(document).ready(function () {
  var bodyPage = $('body')
  // variable header
  var headerLogo = $('.logo')
  var headerNavbar = $('.navbar')
  var headerToggleHarmbuger = $(
    '.btn-quickinfo, .info-content .close, .overlay-harmbuger')
  var headerSlideHarmbuger = $('.info-harmbuger')
  var headerOverlayHarmbuger = $('.overlay-harmbuger')
  // variable main
  var sectionMain = $('#main')
  var sectionProduct = $('#product')
  // variable footer
  var footerMain = $('#footer')
  var buttonBackToTop = $('.backtotop')
  // current offset
  var currentOffset = $(window).scrollTop()

  // event Main
  function eventMain () {
    // click show menu mobile
    $('.navbar-toggler').click(function () {
      if ($('.navbar-collapse').hasClass('show')) {
        $('.navbar-toggler-icon').removeClass('active')
      } else {
        $('.navbar-toggler-icon').addClass('active')
      }
    })
    // click scroll to top
    buttonBackToTop.on('click', function (e) {
      e.preventDefault()
      $('html, body').animate({scrollTop: 0}, 500)
    })
    // click show harmbuger menu slide header
    headerToggleHarmbuger.on('click', function () {
      headerSlideHarmbuger.toggleClass('info-harmbuger-show')
      headerOverlayHarmbuger.toggleClass('overlay-harmbuger-show')
      bodyPage.toggleClass('pause-scroll');
    })
    // Keyup ESC keyboard
    $(document).on('keyup', function (e) {
      e.preventDefault()
      if (e.keyCode === 27 && headerSlideHarmbuger.hasClass('info-harmbuger-show') && headerOverlayHarmbuger.hasClass('overlay-harmbuger-show')) {
        headerToggleHarmbuger.click()
      }
    })
  }

  // get height footer and margin bottom main
  function mainMarginFooter () {
    if (window.innerWidth > 768) {
      // get height of footer
      var footerHeight = footerMain.innerHeight()
      sectionMain.css('marginBottom', footerHeight)
    } else {
      sectionMain.css('marginBottom', 0)
    }
  }

  // scroll menu fixed
  function onScroll () {
    $(document).on('scroll', function () {
      var currentOffset = $(window).scrollTop()
      // Add class navbar-fixed with desktop & laptop
      if (currentOffset > headerLogo.innerHeight() && window.innerWidth > 991) {
        headerNavbar.addClass('navbar-fixed')
      } else {
        headerNavbar.removeClass('navbar-fixed')
      }
      // Add class backtotop-open when scroll > position product
      if (currentOffset > sectionMain.innerHeight() / 2) {
        buttonBackToTop.addClass('backtotop-open')
      } else {
        buttonBackToTop.removeClass('backtotop-open')
      }
      // Scroll > footer will change color white Desktop & laptop
      if (window.innerWidth > 768) {
        if (buttonBackToTop.offset().top + (buttonBackToTop.innerWidth() / 2) >=
          bodyPage.innerHeight()) {
          buttonBackToTop.addClass('change-color')
        } else {
          buttonBackToTop.removeClass('change-color')
        }
      } else {
        // Scroll > footer will change color white Mobile
        if (buttonBackToTop.offset().top > footerMain.offset().top) {
          buttonBackToTop.addClass('change-color')
        } else {
          buttonBackToTop.removeClass('change-color')
        }
      }
    })
  }

  // check current offset and add class navbar-fixed
  function checkCurrentOffset () {
    if (currentOffset > headerLogo.innerHeight()) {
      headerNavbar.addClass('navbar-fixed')
    } else {
      headerNavbar.removeClass('navbar-fixed')
    }
  }

  // resize windown
  $(window).resize(function () {
    mainMarginFooter()
  })
  // Run function
  eventMain()
  mainMarginFooter()
  onScroll()
  checkCurrentOffset()
})
