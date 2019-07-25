$(document).ready(function () {
  // slick carousel on HOME PAGE
  function slickHomePage () {
    $('.slide-home').slick({
      draggable: true,
      arrows: true,
      prevArrow:
        '<div class="prev">' +
        '<svg class="i-chevron-left" viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">\n' +
        '<path d="M20 30 L8 16 20 2"></path>\n' +
        '</svg>' +
        '</div>',
      nextArrow:'' +
        '<div class="next">' +
        '<svg class="i-chevron-right" viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">\n' +
        '<path d="M12 30 L24 16 12 2"></path>\n' +
        '</svg>' +
        '</div>',
      dots: true,
      fade: true,
      speed: 900,
      infinite: true,
      // autoplay:true,
      // autoplaySpeed:4000,
      cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
      touchThreshold: 100
    })
  }
  // isotop mansory on HOME PAGE
  function isotopHomePage () {
    // DOM product content
    var $productIsotop = $('.product-content');
    // Layout isotop after each image loads
    $productIsotop.imagesLoaded().progress(function () {
      $productIsotop.isotope({
        itemSelector: '.item',
        masonry: {
          // columnWidth: '.item-sizer',
          gutter: '.item-gutter',
          horizontalOrder: true
        }
      });
    })
  }
  function init () {
    // Click add class navbar mobile
    $('.navbar-toggler').click(function () {
      $('.navbar-toggler-icon').toggleClass('active')
    })
    slickHomePage();
    isotopHomePage();
  }
  init();
})
