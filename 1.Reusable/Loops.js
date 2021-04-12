function range(start, end) {
    const resultList = [];
    for (let i = start; i <= end; i++) {
        resultList.push(i);
    }
    return resultList;
}

function rangeOdd(start, end) {
    const resultList = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) resultList.push(i);
    }
    return resultList;
}

console.log(range(15, 30));
console.log(rangeOdd(15, 30));