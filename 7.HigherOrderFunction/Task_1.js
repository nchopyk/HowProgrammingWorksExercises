'use strict';

const iterate = (obj, callback) => {
    const keys = Object.keys(obj);
    for (const key of keys) {
        const value = obj[key];
        callback(key, value, obj);
    }
};

const obj = { a: 1, b: 2, c: 3 };
