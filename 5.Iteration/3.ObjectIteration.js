'use strict';

const getAges = (persons) => {
    const ages = {};
    for (const person in persons) {
        if (persons.hasOwnProperty(person)) {
            ages[person] = persons[person].died - persons[person].born;
        }
    }
    return ages;
};

const persons = {
    lenin: { born: 1870, died: 1924 },
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 },
};

console.log(getAges(persons));
// {
//   lenin: 54,
//   mao: 83,
//   gandhi: 79,
//   hirohito: 88,
// }
