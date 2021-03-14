const templateCard = document.querySelector('#card').content;
const card = templateCard.querySelector('.popup');
const TYPE_APARTMENTS = {
  flat: 'Квартира',
  bungalow:'Бунгало',
  house:'Дом',
  palace:'Дворец',
}
const generationCard = (cardsArray) => {
  const cardListFragment = document.createDocumentFragment();
  cardsArray.forEach((element) =>{
    const cardClone = card.cloneNode(true);
    const popupTitle = cardClone.querySelector('.popup__title');
    const popupTextAddress = cardClone.querySelector('.popup__text--address');
    const popupTextPrice = cardClone.querySelector('.popup__text--price');
    const popupType = cardClone.querySelector('.popup__type');
    const popupTextCapacity = cardClone.querySelector('.popup__text--capacity');
    const popupTextTime = cardClone.querySelector('.popup__text--time');
    const popupFeaturesList = cardClone.querySelector('.popup__features');
    const popupDescription = cardClone.querySelector('.popup__description');
    const popupPhoto = cardClone.querySelector('.popup__photos');
    element.offer.title ? popupTitle.textContent = element.offer.title : popupTitle.remove();
    element.offer.address ? popupTextAddress.textContent = element.offer.address : popupTextAddress.remove();
    element.offer.price ? popupTextPrice.textContent = `${element.offer.price} ₽/ночь` : popupTextPrice.remove();
    element.offer.type ? popupType.textContent = TYPE_APARTMENTS[element.offer.type] : popupType.remove();
    element.offer.rooms && element.offer.guests ? popupTextCapacity.textContent =
      `${element.offer.rooms} комнаты для ${element.offer.guests} гостей` : popupTextCapacity.remove();
    element.offer.checkin && element.offer.checkout ? popupTextTime.textContent =
      `Заезд после ${element.offer.checkin}, выезд до ${element.offer.checkout}` : popupTextTime.remove();
    element.offer.features.length > 0 ? renderFeatureList(popupFeaturesList, element.offer.features) : popupFeaturesList.remove();
    element.offer.description ? popupDescription.textContent = element.offer.description : popupDescription.remove();
    element.offer.photos.length > 0 ? renderPhoto(popupPhoto, element.offer.photos) : popupPhoto.remove();
    cardListFragment.appendChild(cardClone);
  });
};

const renderFeatureList = (node, featuresArray) => {
  featuresArray.forEach((element) => {
    const item = document.createElement('li');
    item.classList.add('popup__feature');
    item.classList.add(`popup__feature--${element}`);
    node.appendChild(item);
  });
};

const renderPhoto = (node, photosArray) => {
  photosArray.forEach((element) => {
    const photo = document.createElement('img');
    photo.classList.add('popup__photo');
    photo.src = element;
    photo.setAttribute('width', '45');
    photo.setAttribute('height', '40');
    photo.setAttribute('alt', 'Фотография жилья');
    node.appendChild(photo);
  });
};

export {generationCard};
