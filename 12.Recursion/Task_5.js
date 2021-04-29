// Выведите односвязный список
// из предыдущего задания Вывод
// односвязного списка в обратном порядке.

'use strict';
function printReverseList(list) {

    if (list.next) {
        printReverseList(list.next);
    }

    console.log(list.value);
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


printReverseList(list);
