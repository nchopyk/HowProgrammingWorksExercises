const curry = fn => (...args) => {
    if (fn.length > args.length) {
        const f = fn.bind(null, ...args);
        return curry(f);
    } else {
        return fn(...args);
    }
};


// Usage
const sum = (a, b, c, d) => (a + b + c + d);

const f = curry(sum);
const y1 = sum(1, 2, 3, 4);
const y2 = f(1, 2, 3, 4);
const y3 = f(1, 2, 3)(4);
const y4 = f(1, 2)(3)(4)

console.dir({ y1, y2, y3, y4 })