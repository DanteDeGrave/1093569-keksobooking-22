const getRandomInt = (min, max) => {
  if (min >= max && min < 0) {
    throw new Error('Минимальное значение должно быть меньше максимального и числа не должны быть отрицательными');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;

};

const getRandomUniqNumber = (min, max) => {
  const numbers = [];
  return () => {
    let currentValue = getRandomInt(min, max);
    if (numbers.length >= (max - min) + 1) {
      throw new Error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
    }
    while (numbers.includes(currentValue)) {
      currentValue = getRandomInt(min, max);
    }
    numbers.push(currentValue);
    return currentValue;
  }
};

const getRandomFloat = (min, max, dec) => {
  if (min >= max || min < 0) {
    throw new Error('Первое значение - минимальное не должно быть больше или равно второго - максимального и числа не могут быть отрицательными');
  }
  const randomNumber = (Math.random() * (max - min)) + min;
  return randomNumber.toFixed(dec);
};


export {getRandomInt, getRandomFloat, getRandomUniqNumber}
