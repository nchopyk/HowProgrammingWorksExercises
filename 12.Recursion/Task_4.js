// Вывод односвязного списка

'use strict';
function printListRecursion(list) {
    console.log(list.value);

    if (list.next) {
        printListRecursion(list.next);
    }
}

function printListLoop(list) {
    let  temp = list;
    while (temp) {
        console.log(temp.value);
        temp = temp.next;
    }
}

const list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

printListRecursion(list);
// printListLoop(list)
