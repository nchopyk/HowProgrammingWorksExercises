// Напишите функцию getSecondsToday(),
// возвращающую количество секунд с начала сегодняшнего дня.
// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:
// getSecondsToday() == 36000 // (3600 * 10)

'use strict';
function getSecondsToday() {
    const dateNow = new Date(2021, 3, 27, 10, 0);
    const dataAtStartDay = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
    const diff = dateNow - dataAtStartDay;
    return Math.round(diff) / 1000;

}

console.log(getSecondsToday());
