// European countries have days of week starting with Monday (number 1),
// then Tuesday (number 2) and till Sunday (number 7).
// Write a function getLocalDay(date)
// that returns the “European” day of week for date.

'use strict';
function getLocalDay(date) {
    let day = date.getDay();

    if (day === 0) { // weekday 0 (sunday) is 7 in european
        day = 7;
    }
    return day;
}

const date = new Date(2012, 0, 3);  // 3 Jan 2012
console.log(getLocalDay(date));       // tuesday, should show 2
