import {isEscEvent} from './util.js';
const body = document.querySelector('body');
const main = body.querySelector('main');

const renderErrorDownloadData = () => {
  const errorDownloadString = document.createElement('div');
  errorDownloadString.classList.add('error-download-data');
  errorDownloadString.style.cssText = 'position: absolute; top: 0; left: 0; background-color: red; text-align: center; width: 100%;';
  errorDownloadString.innerHTML = '<p style="color: white; font-size: 18px; margin: 0">Произошла ошибка загрузки данных с сервера</p>';
  body.appendChild(errorDownloadString);
}

const renderMessage = (answer) => {
  const messageTemplate = body.querySelector(`#${answer}`).content.querySelector(`.${answer}`);
  const message = messageTemplate.cloneNode(true);
  message.style.zIndex = '1000';
  const onDocumentKeydown = (evt) => {
    if (isEscEvent(evt)) {
      message.remove();
      document.removeEventListener('keydown', onDocumentKeydown);
    }
  }
  document.addEventListener('keydown', onDocumentKeydown);
  message.addEventListener('click', () => {
    message.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
  });
  if (answer === 'error') {
    message.querySelector('.error__button').addEventListener('click', () => {
      message.remove();
      document.removeEventListener('keydown', onDocumentKeydown);
    });
  }
  main.appendChild(message);
}

export {renderErrorDownloadData, renderMessage};
