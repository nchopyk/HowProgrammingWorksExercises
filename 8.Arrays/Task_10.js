'use strict';

const vasya = { name: 'Вася', age: 25 };
const petya = { name: 'Петя', age: 30 };
const masha = { name: 'Маша', age: 28 };

const users = [vasya, petya, masha];

const names = users.map((obj) => obj.name);

console.log(names); // Вася, Петя, Маша
