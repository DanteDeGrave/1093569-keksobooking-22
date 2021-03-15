import {filterCardForm} from './filter-card.js';
import {filterMapForm} from './filter-map.js'

const filterCardFormFieldsets = filterCardForm.querySelectorAll('fieldset');
const filterMapFormCollection = filterMapForm.children;

const deactivationSite = () => {
  filterCardForm.classList.add('ad-form--disabled');
  filterMapForm.classList.add('ad-form--disabled');
  filterCardFormFieldsets.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });

  for (let i = 0; i < filterMapFormCollection.length; i++) {
    filterMapFormCollection[i].setAttribute('disabled', 'disabled');
  }
}

const activationSite = () => {
  filterCardForm.classList.remove('ad-form--disabled');
  filterMapForm.classList.remove('ad-form--disabled');
  filterCardFormFieldsets.forEach((element) => {
    element.removeAttribute('disabled');
  });

  for (let i = 0; i < filterMapFormCollection.length; i++) {
    filterMapFormCollection[i].removeAttribute('disabled');
  }
}
