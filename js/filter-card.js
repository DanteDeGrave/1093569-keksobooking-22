const filterCardForm = document.querySelector('.ad-form');
const priceInput = filterCardForm.querySelector('#price');
const timeIn = filterCardForm.querySelector('#timein');
const timeOut = filterCardForm.querySelector('#timeout');
const price = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
}

filterCardForm.addEventListener('change', (evt) => {
  const target = evt.target;
  if (target.id === 'type') {
    priceInput.value = '';
    priceInput.min = price[target.value];
    priceInput.placeholder = price[target.value];
  }
  if (target.id === timeIn.id) {
    timeOut.value = timeIn.value;
  }
  if (target.id === timeOut.id) {
    timeIn.value = timeOut.value;
  }
});

export {filterCardForm};
