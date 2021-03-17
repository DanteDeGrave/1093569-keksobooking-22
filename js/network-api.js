import {renderMap} from './map.js'

const SERVER_URL_DOWNLOAD_DATA = 'https://22.javascript.pages.academy/keksobooking/data';
fetch(SERVER_URL_DOWNLOAD_DATA)
  .then((response) => response.json())
  .then(renderMap);
// .catch(showMessageErrorDownloadData);
