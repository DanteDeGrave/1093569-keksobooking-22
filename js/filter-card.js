const TYPE_OF_HOUSING = 'type';
const filterCardForm = document.querySelector('.ad-form');
const priceInput = filterCardForm.querySelector('#price');
const timeIn = filterCardForm.querySelector('#timein');
const timeOut = filterCardForm.querySelector('#timeout');
const capacity = filterCardForm.querySelector('#capacity');
const roomNumder = filterCardForm.querySelector('#room_number');
const capacity1 = capacity.querySelector('option[value = "1"]');
const capacity2 = capacity.querySelector('option[value = "2"]');
const capacity3 = capacity.querySelector('option[value = "3"]');
const capacity0 = capacity.querySelector('option[value = "0"]');
const price = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};

const getPriceTypeOfHousing = (target) => {
  if (target.id === TYPE_OF_HOUSING) {
    priceInput.value = '';
    priceInput.min = price[target.value];
    priceInput.placeholder = price[target.value];
  }
};

const syncTimeInAndOut = (target) => {
  if (target.id === timeIn.id) {
    timeOut.value = timeIn.value;
  }
  if (target.id === timeOut.id) {
    timeIn.value = timeOut.value;
  }
};

const choiseCountRoomAndGuest = (target) => {
  if (target.id === roomNumder.id && roomNumder.value === '1') {
    capacity1.style.display = 'block';
    capacity2.style.display = 'none';
    capacity3.style.display = 'none';
    capacity0.style.display = 'none';
  } else if (target.id === roomNumder.id && roomNumder.value === '2') {
    capacity1.style.display = 'block';
    capacity2.style.display = 'block';
    capacity3.style.display = 'none';
    capacity0.style.display = 'none';
  } else if (target.id === roomNumder.id && roomNumder.value === '3') {
    capacity0.style.display = 'none';
    capacity1.style.display = 'block';
    capacity2.style.display = 'block';
    capacity3.style.display = 'block';
  } else if (target.id === roomNumder.id && roomNumder.value === '100') {
    capacity2.style.display = 'none';
    capacity3.style.display = 'none';
    capacity1.style.display = 'none';
    capacity0.style.display = 'block';
  }
};

filterCardForm.addEventListener('change', (evt) => {
  const target = evt.target;
  getPriceTypeOfHousing(target);
  syncTimeInAndOut(target);
});

export {filterCardForm};
