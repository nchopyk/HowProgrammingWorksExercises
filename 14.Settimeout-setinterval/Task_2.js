// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду,
// начиная от from и заканчивая to.
// Сделайте два варианта решения.
// Используя setInterval.

function printNumbers(from, to) {
    let current = from;

    setTimeout(function go() {
        console.log(current);
        if (current < to) {
            setTimeout(go, 1000);
        }
        current++;
    }, 1000);
}

// использование:
printNumbers(5, 10);