// Напишите функцию sumTo(n),
// которая вычисляет сумму чисел 1 + 2 + ... + n.
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3

'use strict';
function sumTo(n) {
    if (n === 1) return 1;
    return n + sumTo(n - 1);
}

console.log(sumTo(2));
