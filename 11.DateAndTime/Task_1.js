// Create a Date object for the date:
// Feb 20, 2012, 3:12am. The time zone is local.
'use strict';
const date = new Date(2012, 1, 20, 3, 12);
const dateFromString = new Date('February 20, 2012 03:12:00');
console.log(date);
console.log(dateFromString);
