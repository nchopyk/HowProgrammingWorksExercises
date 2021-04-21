'use strict';

const array = () => {
    const data = [];
    const get = (index) => data[index];
    get.push = (element) => data.push(element);
    get.pop = () => data.pop();
    return get;
};

//Usage
const arr = array();
arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); // Выводит: first
console.log(arr(1)); // Выводит: second
console.log(arr(2)); // Выводит: third

console.log(arr.pop()); // Выводит: third
console.log(arr.pop()); // Выводит: second
console.log(arr.pop()); // Выводит: first

console.log(arr.pop()); // Выводит: undefined
