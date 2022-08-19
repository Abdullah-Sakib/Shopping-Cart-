document.getElementById('phone-btn-plus').addEventListener('click', function () {
  const totalQuantity = quantity('input-value' ,true);
  totalPrice(totalQuantity, 'phone-price', 1219);
  subTotal();
})

document.getElementById('phone-btn-minus').addEventListener('click', function () {
  const totalQuantity = quantity('input-value' ,false);
  totalPrice(totalQuantity, 'phone-price', 1219);
  subTotal();
})