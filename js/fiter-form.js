const filterForm = document.querySelector('.ad-form');
const priceInput = filterForm.querySelector('#price');
const timeIn = filterForm.querySelector('#timein');
const timeOut = filterForm.querySelector('#timeout');
const price = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
}

filterForm.addEventListener('change', (evt) => {
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
})
