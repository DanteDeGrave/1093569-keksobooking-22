import {cardForm, chosenRoomGuestCont, capacity, roomNumder} from './form-card.js';
import {filterMapForm} from './filter-map.js';


const filterCardFormFieldsets = cardForm.querySelectorAll('fieldset');
const filterMapFormCollection = filterMapForm.children;

const deactivationSite = () => {
  cardForm.classList.add('ad-form--disabled');
  filterMapForm.classList.add('ad-form--disabled');
  filterCardFormFieldsets.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });

  for (let i = 0; i < filterMapFormCollection.length; i++) {
    filterMapFormCollection[i].setAttribute('disabled', 'disabled');
  }
}

const activationSite = () => {
  cardForm.classList.remove('ad-form--disabled');
  filterMapForm.classList.remove('ad-form--disabled');
  filterCardFormFieldsets.forEach((element) => {
    element.removeAttribute('disabled');
    capacity.innerHTML = chosenRoomGuestCont[roomNumder.value];
  });

  for (let i = 0; i < filterMapFormCollection.length; i++) {
    filterMapFormCollection[i].removeAttribute('disabled');
  }
}

deactivationSite();

export {activationSite};
