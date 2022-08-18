document.getElementById('phone-btn-plus').addEventListener('click', function(){
  const inputFeild = document.getElementById('input-value');
  const inputValueString = inputFeild.value ;
  const inputValue = parseInt(inputValueString);
  const plus = inputValue + 1;
  inputFeild.value  = plus;
})