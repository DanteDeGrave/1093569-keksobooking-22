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
    fillTitle(cardClone, element);
    fillAddress(cardClone, element);
    fillPrice(cardClone, element);
    fillType(cardClone, element);
    fillRooms(cardClone, element);
    fillCheck(cardClone, element);
    fillFeatures(cardClone, element);
    fillDescription(cardClone, element);
    fillPhotos(cardClone, element);
    cardListFragment.appendChild(cardClone);
  });
};

const fillTitle = (clone, element) => {
  const popupTitle = clone.querySelector('.popup__title');
  element.offer.title ? popupTitle.textContent = element.offer.title : popupTitle.remove();
};

const fillAddress = (clone, element) => {
  const popupTextAddress = clone.querySelector('.popup__text--address');
  element.offer.address ? popupTextAddress.textContent = element.offer.address : popupTextAddress.remove();
};

const fillPrice = (clone, element) => {
  const popupTextPrice = clone.querySelector('.popup__text--price');
  element.offer.price ? popupTextPrice.textContent = `${element.offer.price} ₽/ночь` : popupTextPrice.remove();
};

const fillType = (clone, element) => {
  const popupType = clone.querySelector('.popup__type');
  element.offer.type ? popupType.textContent = TYPE_APARTMENTS[element.offer.type] : popupType.remove();
};

const fillRooms = (clone, element) => {
  const popupTextCapacity = clone.querySelector('.popup__text--capacity');
  element.offer.rooms && element.offer.guests ? popupTextCapacity.textContent =
    `${element.offer.rooms} комнаты для ${element.offer.guests} гостей` : popupTextCapacity.remove();
};

const fillCheck = (clone, element) => {
  const popupTextTime = clone.querySelector('.popup__text--time');
  element.offer.checkin && element.offer.checkout ? popupTextTime.textContent =
    `Заезд после ${element.offer.checkin}, выезд до ${element.offer.checkout}` : popupTextTime.remove();
};

const fillFeatures = (clone, element) => {
  const popupFeaturesList = clone.querySelector('.popup__features');
  element.offer.features.length > 0 ? renderFeatureList(popupFeaturesList, element.offer.features) : popupFeaturesList.remove();
};

const fillDescription = (clone, element) => {
  const popupDescription = clone.querySelector('.popup__description');
  element.offer.description ? popupDescription.textContent = element.offer.description : popupDescription.remove();
}

const fillPhotos = (clone, element) => {
  const popupPhoto = clone.querySelector('.popup__photos');
  element.offer.photos.length > 0 ? renderPhoto(popupPhoto, element.offer.photos) : popupPhoto.remove();
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
