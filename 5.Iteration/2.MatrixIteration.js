'use strict';

const max = (matrix) => {
    let max = matrix[0][0];
    for (const row of matrix) {
        for (const el of row) {
            if (el > max) max = el;
        }
    }
    return max;
};


const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m); // 9
