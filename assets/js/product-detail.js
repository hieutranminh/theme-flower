$(document).ready(function () {
  var otherImageProduct = $('.other-image a');
  var mainImageProduct = $('.main-image img');
  // Change main image when click other image
  function changeMainImage () {
    otherImageProduct.on('click', function () {
      resetActiveImage();
      $(this).addClass('active');
      mainImageProduct.attr('src', $(this).attr('href'))
    })
  }
  function resetActiveImage () {
    otherImageProduct.each(function (i, element) {
      if($(element).hasClass('active')) {
        $(element).removeClass('active');
      }
    })
  }
  changeMainImage();
})
