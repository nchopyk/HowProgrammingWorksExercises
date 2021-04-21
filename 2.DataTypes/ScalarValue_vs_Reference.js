const inc1 = (num) => ++num;
const inc2 = (obj) => {
    if (obj.hasOwnProperty('n')) obj.n++;
};

const a1 = 5;
const b1 = inc1(a1);
console.dir({ a1, b1 });

const obj = { n: 5 };
inc2(obj);
console.dir(obj);
