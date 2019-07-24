$(document).ready(function () {
  // slick carousel on HOME PAGE
  function slickHomePage () {
    $('.slide-home').slick({
      draggable: true,
      arrows: true,
      prevArrow:'<i class="icon ion-ios-arrow-back prev"></i>',
      nextArrow:'<i class="icon ion-ios-arrow-forward next"></i>',
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
    $productIsotop = $('.product-content').isotope({
      itemSelector: '.item',
      masonry: {
        columnWidth: 0
      }
    });
    console.log($productIsotop)
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
