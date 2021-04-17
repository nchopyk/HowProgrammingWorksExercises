const sum = (...args) => args.reduce((a, b) => (a + b));

const a = sum(1, 2, 3) // a === 6
console.log(a)