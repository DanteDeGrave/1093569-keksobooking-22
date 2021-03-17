import {renderMapCards} from './map.js'
import {renderErrorDownloadData} from './error-message.js';

const SERVER_URL_DOWNLOAD_DATA = 'https://22.javascript.pages.academy/keksobooking/data';
fetch(SERVER_URL_DOWNLOAD_DATA)
  .then((response) => response.json())
  .then(renderMapCards)
  .catch(renderErrorDownloadData);
