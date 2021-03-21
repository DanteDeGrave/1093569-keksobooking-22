/* global L:readonly */
import {activationSite} from './site-state.js';
import {generationCard} from './card-generator.js';
import {cardForm} from './form-card.js';

const addressInput = cardForm.querySelector('#address');
const tokyoCenter = {
  lat: 35.6895,
  lng: 139.692,
}
addressInput.value = `${tokyoCenter.lat}, ${tokyoCenter.lng}`;


const map = L.map('map-canvas')
  .on('load', activationSite)
  .setView({
    lat: tokyoCenter.lat,
    lng: tokyoCenter.lng,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: tokyoCenter.lat,
    lng: tokyoCenter.lng,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  const latLng = evt.target.getLatLng();
  addressInput.value = `${latLng.lat.toFixed(5)}, ${latLng.lng.toFixed(5)}`;
});

const renderMapCards = (dataFromServer) => {
  dataFromServer.forEach((apartment) => {
    const {location} = apartment;
    const icon = L.icon({
      iconUrl: './img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const marker = L.marker({
      lat: location.lat,
      lng: location.lng,
    },
    {
      icon: icon,
    });

    marker.addTo(map)
      .bindPopup(
        generationCard(apartment),
        {
          keepInView: true,
        },
      );
  });
};

export {renderMapCards, tokyoCenter, mainPinMarker, map};
