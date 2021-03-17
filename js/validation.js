import {filterCardForm} from './filter-card.js';

const MIN_AD_TITLE_LENGTH = 30;
const MAX_AD_TITLE_LENGTH = 100;
const MAX_PRICE_PER_NIGHT = 1000000;

const adTitleInput = filterCardForm.querySelector('#title');
const pricePerNightInputInput = filterCardForm.querySelector('#price');

const validateTitle = () => {
  const titleLength = adTitleInput.value.length;
  if (titleLength < MIN_AD_TITLE_LENGTH) {
    adTitleInput.setCustomValidity(`Заголовок должен быть не менее ${MIN_AD_TITLE_LENGTH} знаков,
     введите ещё ${MIN_AD_TITLE_LENGTH - titleLength}`);
  } else if (titleLength > MAX_AD_TITLE_LENGTH) {
    adTitleInput.setCustomValidity(`Заголовок должен быть не более ${MAX_AD_TITLE_LENGTH} знаков.
     Сократите ваше объявление на ${titleLength - MAX_AD_TITLE_LENGTH}`);
  } else {
    adTitleInput.setCustomValidity('');
  }
  adTitleInput.reportValidity();
};

const validatePricePerNightInput = () => {
  if (pricePerNightInputInput.value > MAX_PRICE_PER_NIGHT) {
    pricePerNightInputInput.setCustomValidity(`Цена за ночь не должна превышать ${MAX_PRICE_PER_NIGHT} рублей.` )
  } else {
    pricePerNightInputInput.setCustomValidity('');
  }
  pricePerNightInputInput.reportValidity();
};


adTitleInput.addEventListener('input', () => {
  validateTitle();
});

pricePerNightInputInput.addEventListener('input', () => {
  validatePricePerNightInput();
});
