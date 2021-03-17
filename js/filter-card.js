const TYPE_OF_HOUSING = 'type';
const filterCardForm = document.querySelector('.ad-form');
const priceInput = filterCardForm.querySelector('#price');
const timeIn = filterCardForm.querySelector('#timein');
const timeOut = filterCardForm.querySelector('#timeout');
const capacity = filterCardForm.querySelector('#capacity');
const roomNumder = filterCardForm.querySelector('#room_number');
const price = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};
const chosenRoomGuestCont = {
  '100': '<option value="0">не для гостей</option>',
  '1':'<option value="1">для 1 гостя</option>',
  '2': '<option value="1">для 1 гостя</option> ' +
    '<option value="2">для 2 гостей</option>',
  '3':'<option value="3" selected>для 3 гостей</option>' +
    '<option value="2">для 2 гостей</option>' +
    '<option value="1">для 1 гостя</option>',
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
  if (target.id === roomNumder.id) {
    capacity.innerHTML = chosenRoomGuestCont[target.value];
  }
};

filterCardForm.addEventListener('change', (evt) => {
  const target = evt.target;
  getPriceTypeOfHousing(target);
  syncTimeInAndOut(target);
  choiseCountRoomAndGuest(target);
});

export {filterCardForm, capacity, chosenRoomGuestCont, roomNumder};
