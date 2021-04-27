// Write a function getWeekDay(date)
// to show the weekday in short format:
// ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

'use strict';
function getWeekDay(date) {
    const weekdays = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    return weekdays[date.getDay()]; //counted from zero (that’s Sunday)
}


const date = new Date(2012, 0, 3);  // 3 Jan 2012
console.log(getWeekDay(date));        // should output "TU"
