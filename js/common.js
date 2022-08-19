function quantity(feildId, isIncrease) {
  const caseFeild = document.getElementById(feildId);
  const caseQuantityString = caseFeild.value;
  const caseQuantity = parseInt(caseQuantityString);
  let increase;
  if (isIncrease === true) {
    increase = caseQuantity + 1;
  }
  else {
    increase = caseQuantity - 1;
  }

  caseFeild.value = increase;
  return increase;
}

function totalPrice(totalQuantity, priceFeildId , price) {
  const totalPrice = totalQuantity * price;
  const priceFeild = document.getElementById(priceFeildId);
  priceFeild.innerText = totalPrice;
}

function subTotal(){
  const phonePriceStirng = document.getElementById('phone-price').innerText;
  const phonePrice = parseInt(phonePriceStirng);
  const casePriceString = document.getElementById('price-feild').innerText;
  const casePrice = parseInt(casePriceString);
  const totalPrice = phonePrice + casePrice;
  const subTotalFeild = document.getElementById('sub-total');
  subTotalFeild.innerText = totalPrice;
  const taxFeild = document.getElementById('tax');
  const taxValueString =  taxFeild.innerText = (totalPrice * 0.1).toFixed(2);
  const taxValue = parseFloat(taxValueString);
  const total = document.getElementById('total');
  const totalValue = totalPrice + taxValue ;
  total.innerText = totalValue;
}




