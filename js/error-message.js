
const body = document.querySelector('body');

const renderErrorDownloadData = () => {
  const errorDownloadString = document.createElement('div');
  errorDownloadString.classList.add('error-download-data');
  errorDownloadString.style.cssText = 'position: absolute; top: 0; left: 0; background-color: red; text-align: center; width: 100%;';
  errorDownloadString.innerHTML = '<p style="color: white; font-size: 18px; margin: 0">Произошла ошибка загрузки данных с сервера</p>';
  body.appendChild(errorDownloadString);
}

export {renderErrorDownloadData};
