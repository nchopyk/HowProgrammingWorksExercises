'use strict';

const removeElements = (array, ...items) => {
    for (const el of items) {
        const index = array.indexOf(el);
        if (index !== -1) array.splice(index, 1);
    }

};

const array = [1, 2, 3, 4, 5, 6, 7];
removeElements(array, 5, 1, 6);
console.log(array);
// Результат: [2, 3, 4, 7]
