const average = (a, b) => (a + b) / 2;
const square = (x) => x * x;
const cube = (x) => x ** 3;

const calculate = () => {
    let resultList = [];
    for (let i = 0; i <= 9; i++) {
        const result = average(square(i), cube(i));
        resultList.push(result);
    }
    return resultList;
}

console.log(calculate());