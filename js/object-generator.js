import {getRandomInt, getRandomFloat, getRandomUniqNumber} from './util.js';
import {generationCard} from './card-generator.js';
const COUNT = 10;
const TYPES = ['palace', 'flat', 'house', 'bungalow'];
const TIMES = ['12:00', '13:00', '14:00'];
const SERVICES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const apartments = [];

const getArrayFeatures = (array) => {
  const getFeature = getRandomUniqNumber(0, array.length - 1);
  return Array(getRandomInt(1, array.length)).fill(null).map(() => array[getFeature()]);
};

const getApartment = () => {
  const obj = {
    author: {
      avatar: `../img/avatars/user0${getRandomInt(1, 8)}.png`,
    },
    offer: {
      title: 'Заголовок',
      price: getRandomInt(5000, 100000),
      type: TYPES[getRandomInt(0, 3)],
      rooms: getRandomInt(1, 4),
      guests: getRandomInt(1, 4),
      checkin: TIMES[getRandomInt(0, 2)],
      checkout: TIMES[getRandomInt(0, 2)],
      features: getArrayFeatures(SERVICES),
      description:'Тут будет описание помещения',
      photos:getArrayFeatures(PHOTOS),
    },
    location: {
      x: getRandomFloat(35.65, 35.7, 5),
      y: getRandomFloat(139.7, 189.8, 5),
    },
  };
  obj.offer.address = `${obj.location.x}, ${obj.location.y}`;
  return obj;
};

for (let i = 0; i < COUNT; i++) {
  apartments.push(getApartment());
}

generationCard(apartments);
