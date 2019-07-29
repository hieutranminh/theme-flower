$(document).ready(function () {
  // DOM product content
  var $productIsotop = $('.product-content');
  var $notifyNotResult = $('.notify-filter');
  var arrLinkFilter = $('.product-filter a');
  // slick carousel on HOME PAGE
  function slickHomePage () {
    // slide banner
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
      autoplay:true,
      autoplaySpeed:4000,
      cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
      touchThreshold: 100
    })
    // slide logo
    $('.slide-brand').slick({
      slidesToShow: 5,
      infinite: true,
      arrows: false,
      dots: false,
      autoplay:true,
      autoplaySpeed:2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 577,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
    })
  }
  // isotop mansory on HOME PAGE
  function isotopHomePage () {
    // Layout isotop after each image loads
    $productIsotop.imagesLoaded().progress(function () {
      $productIsotop.isotope({
        itemSelector: '.item',
        masonry: {
          gutter: '.item-gutter',
          horizontalOrder: true
        }
      });
    })
  }
  // filter product with category
  function filterProductIsotop () {
    $('.product-filter').on( 'click', 'a', function(e) {
      e.preventDefault();
      // remove class active old & add class active new
      resetClassActiveFilter();
      $(this).addClass('active');
      // get attribute data-filter & filter
      var filterValue = $(this).attr('data-filter');
      $productIsotop.isotope({ filter: filterValue });
      // check not results filter
      $productIsotop.data('isotope').filteredItems.length === 0 ?
        $notifyNotResult.css("display","block") :
        $notifyNotResult.css("display","none")
    })
  }
  // Reset class active filter link
  function resetClassActiveFilter () {
    arrLinkFilter.each(function (index,value) {
      var linkFilter = $(value);
      if(linkFilter.hasClass('active')) {
        linkFilter.removeClass('active')
      }
    })
  }
  function init () {
    slickHomePage();
    isotopHomePage();
    filterProductIsotop();
  }
  init();
})
