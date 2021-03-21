import {tokyoCenter,  mainPinMarker, map} from './map.js';
import {renderMessage} from './message.js';

const TYPE_OF_HOUSING = 'type';
const SERVER_URL_UPLOAD_DATA = 'https://22.javascript.pages.academy/keksobooking';
const cardForm = document.querySelector('.ad-form');
const resetButton = cardForm.querySelector('.ad-form__reset');
const priceInput = cardForm.querySelector('#price');
const timeIn = cardForm.querySelector('#timein');
const timeOut = cardForm.querySelector('#timeout');
const capacity = cardForm.querySelector('#capacity');
const roomNumder = cardForm.querySelector('#room_number');
const addressInput = cardForm.querySelector('#address');
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

const cleanForm = () => {
  cardForm.reset();
  addressInput.value = `${tokyoCenter.lat}, ${tokyoCenter.lng}`;
  mainPinMarker.setLatLng(
    {
      lat: tokyoCenter.lat,
      lng: tokyoCenter.lng,
    },
  );
  map.setView({
    lat: tokyoCenter.lat,
    lng: tokyoCenter.lng,
  },
  12);
}

cardForm.addEventListener('change', (evt) => {
  const target = evt.target;
  getPriceTypeOfHousing(target);
  syncTimeInAndOut(target);
  choiseCountRoomAndGuest(target);
});

cardForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  fetch(SERVER_URL_UPLOAD_DATA, {
    method:'POST',
    body: formData,
  })
    .then(cleanForm)
    .then(() => renderMessage('success'))
    .catch(() => renderMessage('error'));
});

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  cleanForm();
});

export {cardForm, capacity, chosenRoomGuestCont, roomNumder};
