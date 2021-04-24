'use strict';

function sortByAge(arr) {
    arr.sort((a, b) => (a.age > b.age ? 1 : -1));
}


const vasya = { name: 'Вася', age: 25 };
const petya = { name: 'Петя', age: 30 };
const masha = { name: 'Маша', age: 28 };

const arr = [vasya, petya, masha];

sortByAge(arr);

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя
