function quantity(isTrue){
  const inputFeild = document.getElementById('input-value');
  const inputValueString = inputFeild.value ;
  const inputValue = parseInt(inputValueString);
  let total;
  if(isTrue === true){
    total = inputValue + 1;
  }
  else if(isTrue === false){
    total = inputValue - 1;
  }
  inputFeild.value  = total;
  return total;
}

function totalPrice(totalQuantity){
  const totalPrice = totalQuantity * 1219 ;
  const priceFeild = document.getElementById('phone-price');
  priceFeild.innerText = totalPrice;
}


document.getElementById('phone-btn-plus').addEventListener('click', function(){
  const totalQuantity = quantity(true);
  totalPrice(totalQuantity);
})

document.getElementById('phone-btn-minus').addEventListener('click', function(){
  const totalQuantity = quantity(false);
  totalPrice(totalQuantity);
})