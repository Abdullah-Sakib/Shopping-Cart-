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





