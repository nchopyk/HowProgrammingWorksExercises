'use strict';

function shuffle(arr) {
    arr.sort(() => .5 - Math.random());
}

const arr = [1, 2, 3];

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);
