// Сортировать по полю

function byField(field){
    return (a, b)=>{
        return a[field] > b[field] ? 1 : -1;
    }
}

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

console.log(users)
console.log(users.sort(byField('name')))