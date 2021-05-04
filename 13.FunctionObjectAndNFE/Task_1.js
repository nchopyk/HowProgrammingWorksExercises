// Измените код makeCounter() так, чтобы счётчик мог увеличивать и устанавливать значение:
// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1

'use strict';
function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = (value) => count = value;

    counter.decrease = () => count--;

    return counter;

}

const counter = makeCounter();

counter();
counter.set(11);
counter.decrease();
console.log(counter());
