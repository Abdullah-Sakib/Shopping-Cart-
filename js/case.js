document.getElementById('case-btn-plus').addEventListener('click', function () {
  const totalQuantity = quantity('case-feild' ,true);
  totalPrice(totalQuantity,'price-feild', 59);
  subTotal();
})

document.getElementById('case-btn-minus').addEventListener('click', function () {
  const totalQuantity = quantity('case-feild' ,false);
  totalPrice(totalQuantity,'price-feild', 59);
  subTotal();
})