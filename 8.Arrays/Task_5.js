'use strict';

function camelize(text) {
    return text
        .split('-')
        .map((word, index) =>
            (index === 0 ?
                word :
                word[0].toUpperCase() + word.slice(1))).join('');
}

console.log(camelize('list-style-image') === 'listStyleImage');
