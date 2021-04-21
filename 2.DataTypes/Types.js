const countTypesInArray = (arr) => {
    const typesCounter = {};
    for (const el of arr) {
        const type = typeof el;
        const count = typesCounter[type] || 0;
        typesCounter[type] = count + 1;
    }
    return typesCounter;
};


const differentTypesArr = [true, 'hello', 5, 12, -200, false, false, 'word'];
console.log(countTypesInArray(differentTypesArr));
