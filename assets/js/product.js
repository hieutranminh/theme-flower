$(document).ready(function () {
  // var quantityProduct = $('.quantity')
  var buttonIncrease = $('.btn-increase');
  var buttonDecrease = $('.btn-decrease');
  var quantityProduct;
  // Increase quantity product
  function increaseQuantity () {
    buttonIncrease.on('click',function () {
      // get input quantity with parent() & prev();
      var inputQuantity = $(this).parent().prev();
      // convert value string > value number
      var quantityProduct = parseInt(inputQuantity.val());
      quantityProduct++;
      inputQuantity.val(quantityProduct);
    })
  }
  // Decrease quantity product
  function decreaseQuantity () {
    buttonDecrease.on('click',function () {
      // get input quantity with parent() & prev();
      var inputQuantity = $(this).parent().prev();
      // convert value string > value number
      var quantityProduct = parseInt(inputQuantity.val());
      if(quantityProduct <= 1) {
        quantityProduct = 1;
      }else {
        quantityProduct--;
      }
      inputQuantity.val(quantityProduct);
    })
  }
  increaseQuantity();
  decreaseQuantity();
})
