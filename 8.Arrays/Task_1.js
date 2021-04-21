'use strict';

const removeElement = (array, item) => {
    const index = array.indexOf(item);
    if (index !== -1) array.splice(index, 1);
};

const array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElement(array, 'Lima'); // удалит 'Lima' из массива
removeElement(array, 'Berlin'); // не удалит ничего
console.log(array);
// Результат: ['Kiev', 'Beijing', 'Saratov']
