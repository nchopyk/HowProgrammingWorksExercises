const power = (exp, n) => Math.pow(n, exp);
const square = (n) => power(2,n);
const cube = power.bind(null, 3)

console.log(power(2,6))
console.log(square(6))
console.log(cube(3))